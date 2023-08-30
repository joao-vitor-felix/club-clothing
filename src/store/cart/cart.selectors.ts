import { RootState } from "../store";
// import { createSelector } from "reselect";

export const selectCartTotalPrice = (state: RootState) => {
  return state.cartReducer.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};

export const selectCartQuantity = (state: RootState) => {
  return state.cartReducer.cart.reduce((acc, item) => acc + item.quantity, 0);
};

// const selectCartReducer = (state: RootState): CartReducer => state.cart;

// export const selectCartTotalPrice = createSelector([selectCartItems], cart =>
//   cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
// );
