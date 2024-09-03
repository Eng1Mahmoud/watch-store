import React from "react";
import { apiRequest } from "@/apiRequests/fetch";

// Define the Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

// Make the component async
const Product = async () => {
  // Fetch product data
  const product: Product = await apiRequest<Product>({
    endpoint: "/products/1", // Adjust the endpoint as needed
    method: "GET",
    tags: ["product"], // Add appropriate tags for revalidation
  });

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
