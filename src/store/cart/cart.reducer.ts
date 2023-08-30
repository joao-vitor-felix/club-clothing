import Cart from "../../types/cart.type";
import { CartActionTypes } from "./cart.actions";
import { CART_ACTION_TYPES } from "./cart.types";

type CartReducer = {
  cart: Cart[];
  isCartOpen: boolean;
};

const INITIAL_STATE: CartReducer = {
  cart: [],
  isCartOpen: false
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: CartActionTypes
): CartReducer => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTION_TYPES.REMOVE_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART:
      return { ...state, cart: action.payload };
    case CART_ACTION_TYPES.CLEAR_CART:
      return { ...state, cart: [] };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
