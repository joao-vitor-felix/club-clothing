import Category from "../../types/categories.types";
import { CategoriesActions } from "./categories.actions";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export type CategoriesReducer = {
  isLoading: boolean;
  categories: Category[];
};

const INITIAL_STATE: CategoriesReducer = {
  isLoading: false,
  categories: []
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action: CategoriesActions
): CategoriesReducer => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
