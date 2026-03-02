import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface DocumentInfo {
    id: number;
    document_name: string;
    country: string;
    required: boolean;
    created_at: string;
}

export const useEditProfileController = (onSave: () => void) => {
    const [step, setStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        business_name: '',
        business_type: '',
        business_address: '',
        business_category: '',
        country: '',
        city: '',
        state: '',
        email: '',
        phone_number: '',
        no_of_employees: 0,
        year_of_establishment: new Date().getFullYear(),
        logo_url: ''
    });

    const [documentRequirements, setDocumentRequirements] = useState<DocumentInfo[]>([]);
    const [uploadedDocuments, setUploadedDocuments] = useState<any[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<{ [docId: number]: File }>({});

    const fetchUploadedDocuments = () => {
        api.get('/auth/seller/uploaded/documents')
            .then(res => {
                setUploadedDocuments(res.data.data || []);
            })
            .catch(err => {
                console.error("Failed to fetch uploaded documents:", err);
            });
    };

    // Fetch business profile details and uploaded documents on mount
    useEffect(() => {
        api.get('/auth/seller/business/profile')
            .then(res => {
                const payload = res.data?.data?.business_details ? res.data.data : res.data;
                if (payload && payload.is_active && payload.business_details) {
                    const details = payload.business_details;
                    setFormData(prev => ({
                        ...prev,
                        business_name: details.business_name || '',
                        business_type: details.business_type || '',
                        business_address: details.business_address || '',
                        business_category: details.business_category || '',
                        country: details.country || '',
                        city: details.city || '',
                        state: details.state || '',
                        email: details.email || '',
                        phone_number: details.phone_number || '',
                        no_of_employees: details.no_of_employees || 0,
                        year_of_establishment: details.year_of_establishment || new Date().getFullYear(),
                        logo_url: details.logo_url || ''
                    }));
                }
            })
            .catch(err => {
                console.error("Failed to fetch business profile:", err);
            });

        fetchUploadedDocuments();
    }, []);

    // Fetch documents requirements when country changes
    useEffect(() => {
        if (!formData.country) return;

        api.get(`/auth/seller/business/documents?country=${encodeURIComponent(formData.country)}`)
            .then(res => {
                setDocumentRequirements(res.data.data || []);
            })
            .catch(err => {
                console.error("Failed to fetch documents:", err);
            });
    }, [formData.country]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'no_of_employees' || name === 'year_of_establishment' ? parseInt(value) || 0 : value
        }));
    };

    const handleFileChange = (docId: number, file: File | null) => {
        if (!file) {
            const newFiles = { ...selectedFiles };
            delete newFiles[docId];
            setSelectedFiles(newFiles);
        } else {
            setSelectedFiles(prev => ({ ...prev, [docId]: file }));
        }
    };

    const uploadFile = async (file: File) => {
        const data = new FormData();
        data.append('file', file);

        const response = await api.post('/listing/seller/upload', data);

        return response.data.data;
    };

    const handleSave = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Upload selected documents in parallel
            const uploadPromises = documentRequirements.map(async (doc) => {
                const file = selectedFiles[doc.id];
                if (file) {
                    const documentUrl = await uploadFile(file);
                    return {
                        id: doc.id,
                        document_name: doc.document_name,
                        document_url: documentUrl
                    };
                }
                return null;
            });

            const uploadResults = await Promise.all(uploadPromises);
            const documents = uploadResults.filter((doc): doc is NonNullable<typeof doc> => doc !== null);

            // Submit form data
            const payload = {
                ...formData,
                documents: documents
            };

            await api.post('/auth/seller/register/business/complete', payload);

            fetchUploadedDocuments();
            setShowSuccess(true);
        } catch (err: any) {
            setError(err.response?.data?.error || err.response?.data?.message || err.message || 'Complete setup failed');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        onSave();
    };

    return {
        state: {
            step,
            showSuccess,
            totalSteps,
            formData,
            isLoading,
            error,
            documentRequirements,
            uploadedDocuments,
            selectedFiles
        },
        actions: {
            setStep,
            handleSave,
            handleCloseSuccess,
            handleInputChange,
            handleFileChange
        }
    };
};
