export interface IProduct {
  id: string;
  name: string;
  CategoryId?: string;
  sku?: string;
  categoryName?: string;
  description?: string;
  weight?: number;
  width?: number;
  length?: number;
  height?: number;
  image?: string;
  price?: string;
}
