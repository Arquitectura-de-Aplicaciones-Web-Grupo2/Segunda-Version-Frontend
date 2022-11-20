export interface category {
  categoryId: string;
  name: string;
  description: string;
}

export interface Product {
  productId: string;
  name: string;
  categoryId: number;
  price: number;
  stock: number;
  active: boolean;
  image: any;
  category: category;
}
