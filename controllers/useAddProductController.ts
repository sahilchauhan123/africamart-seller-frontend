import React, { useState } from 'react';
import { ProductService } from '../services/ProductService';

export type AddProductStep = 'basic' | 'specification';

export const useAddProductController = () => {
    const [step, setStep] = useState<AddProductStep>('basic');
    const [expandedSpec, setExpandedSpec] = useState<number | null>(0);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPublishing, setIsPublishing] = useState(false);
    const [error, setError] = useState('');

    // Product Basic Details
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        minPrice: '',
        maxPrice: '',
        currency: 'USD',
        unit: 'Kilogram (kg)'
    });

    // Media
    const [mediaFiles, setMediaFiles] = useState<{ file: File, preview: string, type: 'image' | 'video' }[]>([]);

    // Category Search
    const [categorySearch, setCategorySearch] = useState('');
    const [categories, setCategories] = useState<{ id: string, name: string, is_leaf: boolean }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<{ id: string, name: string } | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [showCategoryResults, setShowCategoryResults] = useState(false);

    // Filters/Attributes
    const [categoryFilters, setCategoryFilters] = useState<any[]>([]);
    const [attributeValues, setAttributeValues] = useState<Record<string, any>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };

    const handleCategorySearch = async (query: string) => {
        setCategorySearch(query);
        if (query.length < 2) {
            setCategories([]);
            return;
        }

        setIsSearching(true);
        try {
            const data = await ProductService.searchCategory(query);
            setCategories(data.data.Categories || []);
            setShowCategoryResults(true);
        } catch (err) {
            console.error('Category search error:', err);
        } finally {
            setIsSearching(false);
        }
    };

    const handleCategorySelect = async (category: { id: string, name: string }) => {
        setSelectedCategory(category);
        setCategorySearch(category.name);
        setShowCategoryResults(false);
        setIsLoading(true);

        try {
            const data = await ProductService.getCategoryFilters(category.id);
            setCategoryFilters(data.data.filters || []);
            // Initialize attribute values
            const initialValues: Record<string, any> = {};
            (data.data.filters || []).forEach((f: any) => {
                initialValues[f.id] = f.is_multi ? [] : '';
            });
            setAttributeValues(initialValues);
        } catch (err) {
            console.error('Fetch filters error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAttributeChange = (filterId: string, value: any, isMulti: boolean) => {
        if (isMulti) {
            const current = attributeValues[filterId] || [];
            const updated = current.includes(value)
                ? current.filter((v: any) => v !== value)
                : [...current, value];
            setAttributeValues({ ...attributeValues, [filterId]: updated });
        } else {
            setAttributeValues({ ...attributeValues, [filterId]: value });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
        const files = e.target.files;
        if (!files) return;

        const newFiles = Array.from(files).map((file: File) => ({
            file,
            preview: URL.createObjectURL(file),
            type
        }));

        setMediaFiles(prev => [...prev, ...newFiles]);
    };

    const handleRemoveMedia = (index: number) => {
        setMediaFiles(prev => {
            const updated = [...prev];
            URL.revokeObjectURL(updated[index].preview);
            updated.splice(index, 1);
            return updated;
        });
    };

    const handleSubmit = async () => {
        if (!selectedCategory || !productData.title || !productData.description) {
            setError('Please fill in all required basic details.');
            setStep('basic');
            return false; // Indicating failure to proceed
        }

        setIsPublishing(true);
        setError('');

        const formData = new FormData();

        // Prepare API expected structure
        const payload = {
            product_details: {
                title: productData.title,
                description: productData.description,
                category_id: selectedCategory.id,
                min_price: parseFloat(productData.minPrice) || 0,
                max_price: parseFloat(productData.maxPrice) || 0
            },
            product_attributes: Object.entries(attributeValues).map(([filterId, values]) => {
                const filter = categoryFilters.find(f => f.id === filterId);
                let processedValue = values;

                if (filter) {
                    if (['select', 'checkbox', 'tag'].includes(filter.type)) {
                        if (!Array.isArray(values)) {
                            processedValue = values ? [values] : [];
                        }
                    } else if (filter.type === 'number') {
                        const num = parseFloat(String(values));
                        processedValue = isNaN(num) ? 0 : num;
                    } else if (filter.type === 'boolean') {
                        processedValue = String(values).toLowerCase() === 'true';
                    }
                }

                return {
                    filter_id: filterId,
                    values: processedValue
                };
            })
        };

        formData.append('data', JSON.stringify(payload));

        mediaFiles.forEach(m => {
            formData.append('files', m.file);
        });

        try {
            await ProductService.createProduct(formData);
            setShowSuccessModal(true);
            return true;
        } catch (err: any) {
            setError(err.message || 'Failed to publish product. Please check your data.');
            return false;
        } finally {
            setIsPublishing(false);
        }
    };

    const calculateProgress = () => {
        let score = 0;
        if (productData.title) score += 15;
        if (productData.description) score += 20;
        if (selectedCategory) score += 15;
        if (mediaFiles.some(m => m.type === 'image')) score += 20;
        if (Object.keys(attributeValues).length > 0) {
            const filledSpecs = Object.values(attributeValues).filter(v => v && (Array.isArray(v) ? v.length > 0 : true)).length;
            score += (filledSpecs / Math.max(categoryFilters.length, 1)) * 30;
        }
        return Math.min(Math.round(score), 100);
    };

    const resetForm = () => {
        setProductData({
            title: '', description: '', minPrice: '', maxPrice: '', currency: 'USD', unit: 'Kilogram (kg)'
        });
        setMediaFiles([]);
        setSelectedCategory(null);
        setCategorySearch('');
        setCategoryFilters([]);
        setAttributeValues({});
        setStep('basic');
        setShowSuccessModal(false);
    };

    return {
        state: {
            step,
            expandedSpec,
            showSuccessModal,
            isLoading,
            isPublishing,
            error,
            productData,
            mediaFiles,
            categorySearch,
            categories,
            selectedCategory,
            isSearching,
            showCategoryResults,
            categoryFilters,
            attributeValues,
            progress: calculateProgress()
        },
        actions: {
            setStep,
            setExpandedSpec,
            setShowSuccessModal,
            setShowCategoryResults,
            handleInputChange,
            handleCategorySearch,
            handleCategorySelect,
            handleAttributeChange,
            handleFileChange,
            handleRemoveMedia,
            handleSubmit,
            resetForm
        }
    };
};
