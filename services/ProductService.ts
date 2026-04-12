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
            const response = await api.post('/listing/seller/product', formData
                // ,
                // {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //     },
                // }
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to create product.');
        }
    },
    // async createProduct(formData: FormData) {
    //     try {
    //         const response = await api.post(
    //             '/listing/seller/product',
    //             formData
    //         );
    //         return response.data;
    //     } catch (error: any) {
    //         throw new Error(error.response?.data?.message || 'Failed to create product.');
    //     }
    // },

    async getProduct(productId: string) {
        try {
            const response = await api.get(`/listing/seller/product/${productId}`);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to fetch product details.');
        }
    },

    async editProduct(productId: string, payload: any) {
        try {
            const response = await api.put(`/listing/seller/product/${productId}`, payload);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to update product.');
        }
    },

    async uploadFile(file: File) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await api.post('/listing/seller/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data; // Backend returns URL as Success data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to upload file.');
        }
    },

    async deleteProduct(productId: string) {
        try {
            const response = await api.delete(`/listing/seller/product/${productId}`);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to delete product.');
        }
    }
};
