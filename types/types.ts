// category interface
export interface ICategory {
  name: string;
  cover_url: string;
}

// product interface
export interface IProduct {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}
