import { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';

export interface ProductImage {
    position: number;
    img_url: string;
}

export interface Product {
    id: string;
    title: string;
    category_id: string;
    min_price: string;
    max_price: string;
    created_at: string;
    images: ProductImage[];
}

export const useProductController = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, [page]);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const data = await ProductService.getProducts(page);
            setProducts(data.data.products || []);
            setTotal(data.data.total || 0);
        } catch (err) {
            console.error('Failed to fetch products:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const setPageNumber = (newPage: number) => {
        setPage(newPage);
    };

    return {
        products,
        isLoading,
        page,
        total,
        setPageNumber,
        refreshProducts: fetchProducts
    };
};
