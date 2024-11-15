import { ProductDetails } from "../types/types";
import { getData } from "../utils/getData";

export function getProducts(): Promise<ProductDetails[]> {
  return getData<ProductDetails[]>('products.json')
}

export function getComments(): Promise<ProductDetails[]> {
  return getData<ProductDetails[]>('comments.json')
}
