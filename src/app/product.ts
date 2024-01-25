export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  cartCount?: number;
}
