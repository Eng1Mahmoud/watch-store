// category interface
export interface ICategory {
  id?: string;
  name: string;
  cover_url: string;
}

// product interface
export interface IProduct {
  id?: string | undefined;
  name: string;
  price: number;
  description: string;
  categories: string[];
  image_url: string;
  quantity: number;
}

// user interface
export interface IUser {
  id?: string;
  username: string;
  email: string;
  role: string;
  avatar_url?: string | null;
  cover_url?: string | null;
  phone?: string | null;
  addresses?: {
    country: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
  } | null;
}

// order interface
export interface ICart {
  product: IProduct;
  quantity: number;
}

// filter interface
export interface IFilter {
  category: string;
  minPrice: number;
  maxPrice: number;
  search: string;
}
