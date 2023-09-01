import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../../types/cart.type";
import Product from "../../types/product.types";

export type CartReducer = {
  cartItems: Cart[];
  isCartOpen: boolean;
};

const INITIAL_STATE: CartReducer = {
  cartItems: [],
  isCartOpen: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCart: state => {
      state.isCartOpen = !state.isCartOpen;
    },
    addProductToCart: (state: CartReducer, action: PayloadAction<Product>) => {
      const product = action.payload;

      const isOnCart = state.cartItems.find(item => item.id === product.id);

      if (isOnCart) {
        state.cartItems = state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return;
      }
      state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const isOnCart = state.cartItems.find(item => item.id === product.id);
      const removeProduct = isOnCart && isOnCart?.quantity === 1;

      if (removeProduct) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== product.id
        );
        return;
      }

      state.cartItems = state.cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    clearProductFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== product.id);
    },
    clearCart: state => {
      state.cartItems = [];
    }
  }
});

export const cartReducer = cartSlice.reducer;

export const {
  toggleCart,
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  clearCart
} = cartSlice.actions;
