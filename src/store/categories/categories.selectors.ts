import { RootState } from "../store";
import { CategoriesReducer } from "./categories.reducer";
import { createSelector } from "reselect";

export const selectCategoriesReducer = (state: RootState): CategoriesReducer =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  categoriesReducer => categoriesReducer.categories
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  categoriesReducer => categoriesReducer.isLoading
);
