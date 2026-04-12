import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface DocumentInfo {
    id: number;
    document_name: string;
    country: string;
    required: boolean;
    created_at: string;
}

interface Country {
    id: number;
    name: string;
    iso2: string;
}

interface State {
    id: number;
    name: string;
    iso2: string;
}

export const useEditProfileController = (onSave: () => void) => {
    const [step, setStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [countries, setCountries] = useState<Country[]>([]);
    const [states, setStates] = useState<State[]>([]);
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
        tax_id: '',
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

    // Fetch countries on mount
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://country-city-state.akshitagulerialdh.workers.dev/v1/regions/1/countries');
                const data = await response.json();
                setCountries(data || []);
            } catch (err) {
                console.error("Failed to fetch countries:", err);
            }
        };

        fetchCountries();
    }, []);

    // Fetch states when country changes
    useEffect(() => {
        const fetchStates = async () => {
            if (!formData.country) {
                setStates([]);
                return;
            }

            // Find ISO2 code for the selected country name
            const country = countries.find(c => c.name === formData.country);
            if (!country) return;

            try {
                const response = await fetch(`https://country-city-state.akshitagulerialdh.workers.dev/v1/countries/${country.iso2}/states`);
                const data = await response.json();
                setStates(data || []);
            } catch (err) {
                console.error("Failed to fetch states:", err);
            }
        };

        fetchStates();
    }, [formData.country, countries]);

    // Fetch business profile details and uploaded documents on mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // 1. Try fetching full verified profile
                const res = await api.get('/auth/seller/business/profile');
                const payload = res.data?.data;
                if (payload && payload.business_details) {
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
                else {
                    throw new Error("Business details not found");
                }
            } catch (err) {
                // 2. Fallback: If not verified/found, try fetching just the basic (half) details
                try {
                    const halfRes = await api.get('/auth/seller/business/half-details');
                    const halfDetails = halfRes.data?.data?.business_details;
                    if (halfDetails) {
                        setFormData(prev => ({
                            ...prev,
                            business_name: halfDetails.business_name || '',
                            business_type: halfDetails.business_type || '',
                            business_address: halfDetails.business_address || '',
                            business_category: halfDetails.business_category || '',
                        }));
                    }
                } catch (fallbackErr) {
                    console.error("Failed to fetch any business details:", fallbackErr);
                }
            }
        };

        fetchProfile();
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

    const handleLogoUpload = async (file: File) => {
        setIsLoading(true);
        try {
            const logoUrl = await uploadFile(file);
            setFormData(prev => ({ ...prev, logo_url: logoUrl }));
        } catch (err: any) {
            setError('Logo upload failed');
        } finally {
            setIsLoading(false);
        }
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
            selectedFiles,
            countries,
            states
        },
        actions: {
            setStep,
            handleSave,
            handleCloseSuccess,
            handleInputChange,
            handleFileChange,
            handleLogoUpload
        }
    };
};
