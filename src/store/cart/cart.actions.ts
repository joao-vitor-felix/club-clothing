import Cart from "../../types/cart.type";
import Product from "../../types/product.types";
import { CART_ACTION_TYPES } from "./cart.types";

// Types
type AddProductToCart = {
  type: CART_ACTION_TYPES.ADD_PRODUCT;
  payload: Cart[];
};

type RemoveProductFromCart = {
  type: CART_ACTION_TYPES.REMOVE_PRODUCT;
  payload: Cart[];
};

type ClearProductFromCart = {
  type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART;
  payload: Cart[];
};

type ClearCart = {
  type: CART_ACTION_TYPES.CLEAR_CART;
};

type ToggleCart = {
  type: CART_ACTION_TYPES.TOGGLE_CART;
};

export type CartActionTypes =
  | AddProductToCart
  | RemoveProductFromCart
  | ClearProductFromCart
  | ClearCart
  | ToggleCart;

// Functions
const addToCart = (product: Product, cart: Cart[]): Cart[] => {
  const isOnCart = cart.find(item => item.id === product.id);

  if (isOnCart) {
    return cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
};

const removeFromCart = (product: Product, cart: Cart[]): Cart[] => {
  const isOnCart = cart.find(item => item.id === product.id);
  const removeProduct = isOnCart && isOnCart?.quantity === 1;

  if (removeProduct) {
    return cart.filter(item => item.id !== product.id);
  }

  return cart.map(item =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearFromCart = (product: Cart, cart: Cart[]): Cart[] =>
  cart.filter(item => item.id !== product.id);

// Actions
export const addProductToCart = (
  product: Product,
  cart: Cart[]
): AddProductToCart => {
  const updatedCart = addToCart(product, cart);
  return {
    type: CART_ACTION_TYPES.ADD_PRODUCT,
    payload: updatedCart
  };
};

export const removeProductFromCart = (
  product: Product,
  cart: Cart[]
): RemoveProductFromCart => {
  const updatedCart = removeFromCart(product, cart);
  return {
    type: CART_ACTION_TYPES.REMOVE_PRODUCT,
    payload: updatedCart
  };
};

export const clearProductFromCart = (
  product: Cart,
  cart: Cart[]
): ClearProductFromCart => {
  const updatedCart = clearFromCart(product, cart);
  return {
    type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART,
    payload: updatedCart
  };
};

export const clearCart = (): ClearCart => {
  return {
    type: CART_ACTION_TYPES.CLEAR_CART
  };
};

export const toggleCart = (): ToggleCart => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_CART
  };
};
