import { RootState } from "../store";
import { createSelector } from "reselect";
import { CartReducer } from "./cart.reducer";

export const selectCartReducer = (state: RootState): CartReducer => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

// export const selectCartTotalPrice = (state: RootState) => {
//   return state.cart.cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
// };

// export const selectCartQuantity = (state: RootState) => {
//   return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
// };
