// category interface
export interface ICategory {
  id?: string;
  name: string;
  cover_url: string;
}

// product interface
export interface IProduct {
  id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
  total_price: number;
}

// filter interface
export interface IFilter {
  category: string;
  minPrice: number;
  maxPrice: number;
  search: string;
}
