export type TStationery = {
    name: string;
    brand: string;
    price: number;
    category: 'Writing' | 'Office Supplies' | 'Art Supplies' | 'Educational' | 'Technology';
    description: string;
    quantity: number;
    inStock: boolean;
    created_at?: Date;
    updated_at?: Date;
}