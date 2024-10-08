import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "@/types/types";
interface OrderState {
  orders: ICart[];
}
const initialState: OrderState = {
  orders: [
    {
      product: {
        id: "1",
        name: "Product 1",
        price: 100,
        description: "Description 1",
        category_ids: ["Category 1"],
        image_url: "Image 1",
        quantity: 1,
      },
      quantity: 1,
      total_price: 100,
    },
  ],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // add prto cart
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.orders.push(action.payload);
    },
    // remove product from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(
        (order) => order.product.id !== action.payload,
      );
    },
    // clear cart
    clearCart: (state) => {
      state.orders = [];
    },
    // increment quantity
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const order = state.orders.find(
        (order) => order.product.id === action.payload,
      );
      if (order) {
        order.quantity += 1;
      }
    },
    // decrement quantity
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const order = state.orders.find(
        (order) => order.product.id === action.payload,
      );
      if (order && order.quantity > 1) {
        order.quantity -= 1;
      }
    },
  },
});
// Selector to get orders length
export const getOrdersLength = (state: { cart: OrderState }) => {
  return state.cart.orders.length;
};
// get total price for all orders
export const getTotalPrice = (state: { cart: OrderState }) => {
  return state.cart.orders.reduce(
    (total, order) => total + order.total_price,
    0,
  );
};
// get all orders
export const getAllOrders = (state: { cart: OrderState }) => {
  return state.cart.orders;
};

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
