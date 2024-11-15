
export interface ProductSize {
  width: number;
  height: number;
}

export interface ProductDetails {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: ProductSize;
  weight: string;
  comments: string[];
}

export interface ProductComments {
  id: number;
  productId: number;
  description: string;
  date: string;
}