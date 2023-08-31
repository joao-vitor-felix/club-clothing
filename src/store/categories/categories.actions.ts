import { collection, getDocs } from "firebase/firestore";
import Category from "../../types/categories.types";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { db } from "../../firebase/firebase.config";
import { Dispatch } from "redux";
import { categoryConverter } from "../../firebase/firestore.converters";

type FetchStart = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START;
};

export const fetchStart = (): FetchStart => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
  };
};

type FetchFailure = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE;
};

export const fetchFailure = (): FetchFailure => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE
  };
};

type FetchSuccess = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
};

export const fetchSuccess = (categories: Category[]): FetchSuccess => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStart());
    try {
      const categories: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );
      querySnapshot.forEach(doc => {
        categories.push(doc.data());
      });
      dispatch(fetchSuccess(categories));
    } catch (error) {
      dispatch(fetchFailure());
      return console.log(error);
    }
  };
};

export type CategoriesActions = FetchStart | FetchFailure | FetchSuccess;
