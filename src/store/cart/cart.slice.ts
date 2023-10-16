import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../../types/cart.type";
import Product from "../../types/product.types";
import { toast } from "react-toastify";

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
        toast.success("Produto adicionado ao carrinho!", {
          position: "bottom-center",
          autoClose: 1000
        });
        return;
      }
      state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
      toast.success("Produto adicionado ao carrinho!", {
        position: "bottom-center",
        autoClose: 1000
      });
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const isOnCart = state.cartItems.find(item => item.id === product.id);
      const removeProduct = isOnCart && isOnCart?.quantity === 1;

      if (removeProduct) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== product.id
        );
        toast.error("Produto removido do carrinho!", {
          position: "bottom-center",
          autoClose: 1000
        });
        return;
      }

      state.cartItems = state.cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      toast.error("Produto removido do carrinho!", {
        position: "bottom-center",
        autoClose: 1000
      });
    },
    clearProductFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== product.id);
      toast.error("Produto removido do carrinho!", {
        position: "bottom-center",
        autoClose: 1000
      });
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
