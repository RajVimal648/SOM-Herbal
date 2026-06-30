export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}
