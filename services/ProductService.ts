import api from './api';

export const ProductService = {
    async getProducts(page: number = 1) {
        try {
            const response = await api.get(`/listing/seller/products?page=${page}`);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to fetch products.');
        }
    },

    async searchCategory(query: string) {
        try {
            const response = await api.get(`/listing/seller/search/category?search=${encodeURIComponent(query)}`);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to search category.');
        }
    },

    async getCategoryFilters(categoryId: string) {
        try {
            const response = await api.get(`/listing/seller/category/filters?category_id=${categoryId}`);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to fetch filters.');
        }
    },

    async createProduct(formData: FormData) {
        try {
            const response = await api.post('/listing/seller/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to create product.');
        }
    }
};
