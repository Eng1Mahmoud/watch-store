// category interface
export interface ICategory {
  id?: string;
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
