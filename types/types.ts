import { IconType } from "react-icons";
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
  is_wishlisted?: boolean;
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
  searchHistory: string[];
}
// table interfaces
export interface IColumn {
  key: string;
  label: string;
  labelColor?: string;
}

export interface IAction {
  label: string;
  onClick: (item: any) => void;
  icon?: IconType;
  labelColor?: string;
}
export interface ITableProps {
  data: any[]; // Adjusted to accept flat data directly
  columns: IColumn[];
  actions?: IAction[];
  dataKey: string;
}

// wishlist interface
export interface IWishlist {
  product: IProduct;
  user?: IUser;
  created_at?: string;
  updated_at?: string;
}
