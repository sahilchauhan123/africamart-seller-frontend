import React, { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';

export type AddProductStep = 'basic' | 'specification';

export const useAddProductController = (initialProductId?: string) => {
    const [step, setStep] = useState<AddProductStep>('basic');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPublishing, setIsPublishing] = useState(false);
    const [error, setError] = useState('');
    const [availableUnits, setAvailableUnits] = useState<{ id: string, name: string, symbol: string }[]>([]);
    const [isEditing, setIsEditing] = useState(!!initialProductId);

    // Product Basic Details
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        minPrice: '',
        maxPrice: '',
        currency: 'USD',
        unit: ''
    });

    // Media
    const [mediaFiles, setMediaFiles] = useState<{ file?: File, preview: string, type: 'image' | 'video' }[]>([]);

    // Category Search
    const [categorySearch, setCategorySearch] = useState('');
    const [categories, setCategories] = useState<{ id: string, name: string, is_leaf: boolean }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<{ id: string, name: string } | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [showCategoryResults, setShowCategoryResults] = useState(false);

    // Filters/Attributes
    const [categoryFilters, setCategoryFilters] = useState<any[]>([]);
    const [attributeValues, setAttributeValues] = useState<Record<string, any>>({});

    // Load product for editing
    useEffect(() => {
        if (initialProductId) {
            loadProductData(initialProductId);
        }
    }, [initialProductId]);

    const loadProductData = async (id: string) => {
        setIsLoading(true);
        setError('');
        try {
            const response = await ProductService.getProduct(id);
            const { product_details, filters, images, attributes, units } = response.data;

            setProductData({
                title: product_details.title || '',
                description: product_details.description || '',
                minPrice: product_details.min_price || '',
                maxPrice: product_details.max_price || '',
                currency: 'USD',
                unit: product_details.unit || ''
            });

            setSelectedCategory({
                id: product_details.category_id,
                name: product_details.category_name
            });
            setCategorySearch(product_details.category_name);
            setCategoryFilters(filters || []);
            setAvailableUnits(units || []);

            // Map existing attributes to attributeValues state
            const mappedValues: Record<string, any> = {};
            (filters || []).forEach((f: any) => {
                const attr = (attributes || []).find((a: any) => a.filter_id === f.id);
                if (attr) {
                    mappedValues[f.id] = attr.values;
                } else {
                    mappedValues[f.id] = f.is_multi ? [] : '';
                }
            });
            setAttributeValues(mappedValues);

            // Pre-fill existing images
            if (images && images.length > 0) {
                setMediaFiles(images.map((img: any) => ({
                    preview: img.img_url,
                    type: 'image'
                })));
            }
        } catch (err: any) {
            setError(err.message || 'Failed to load product data.');
        } finally {
            setIsLoading(false);
        }
    };

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
            setAvailableUnits(data.data.units || []);

            // Set default unit if available
            if (data.data.units && data.data.units.length > 0) {
                setProductData(prev => ({
                    ...prev,
                    unit: data.data.units[0].symbol
                }));
            }

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
            if (updated[index].file) {
                URL.revokeObjectURL(updated[index].preview);
            }
            updated.splice(index, 1);
            return updated;
        });
    };

    const handleSubmit = async () => {
        if (!selectedCategory || !productData.title || !productData.description) {
            setError('Please fill in all required basic details.');
            setStep('basic');
            return false;
        }

        setIsPublishing(true);
        setError('');

        const preparedAttributes = Object.entries(attributeValues).map(([filterId, values]) => {
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
        });

        const productDetails = {
            title: productData.title,
            description: productData.description,
            category_id: selectedCategory.id,
            min_price: parseFloat(productData.minPrice) || 0,
            max_price: parseFloat(productData.maxPrice) || 0,
            unit: productData.unit
        };

        try {
            if (isEditing && initialProductId) {
                // Determine which files are new and need uploading
                const finalImages = [];

                for (let i = 0; i < mediaFiles.length; i++) {
                    const m = mediaFiles[i];
                    if (m.file) {
                        // If there's a file, it's new. Upload and get the URL.
                        const uploadRes = await ProductService.uploadFile(m.file);
                        // Backend returns the URL as response.data (uploadRes here)
                        finalImages.push({
                            img_url: uploadRes.data,
                            position: i
                        });
                    } else {
                        // Existing image, just use its preview URL
                        finalImages.push({
                            img_url: m.preview,
                            position: i
                        });
                    }
                }

                const payload = {
                    product_id: initialProductId,
                    product_details: productDetails,
                    product_attributes: preparedAttributes,
                    product_images: finalImages
                };

                await ProductService.editProduct(initialProductId, payload);
            } else {
                const formData = new FormData();
                formData.append('data', JSON.stringify({
                    product_details: productDetails,
                    product_attributes: preparedAttributes
                }));

                mediaFiles.forEach(m => {
                    if (m.file) formData.append('files', m.file);
                });

                await ProductService.createProduct(formData);
            }
            setShowSuccessModal(true);
            return true;
        } catch (err: any) {
            setError(err.message || 'Failed to process product. Please check your data.');
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
            title: '', description: '', minPrice: '', maxPrice: '', currency: 'USD', unit: ''
        });
        setMediaFiles([]);
        setSelectedCategory(null);
        setCategorySearch('');
        setCategoryFilters([]);
        setAvailableUnits([]);
        setAttributeValues({});
        setStep('basic');
        setShowSuccessModal(false);
        setIsEditing(false);
    };

    return {
        state: {
            step,
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
            availableUnits,
            isEditing,
            progress: calculateProgress()
        },
        actions: {
            setStep,
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

