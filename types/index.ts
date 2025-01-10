export interface Product {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface SearchResult {
    items: Product[];
    totalResults: number;
}