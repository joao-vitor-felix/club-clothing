import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Category from "../../types/categories.types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { categoryConverter } from "../../firebase/firestore.converters";

type CategoriesReducer = {
  isLoading: boolean;
  categories: Category[];
};

const INITIAL_STATE: CategoriesReducer = {
  isLoading: false,
  categories: []
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories: Category[] = [];
    const querySnapshot = await getDocs(
      collection(db, "categories").withConverter(categoryConverter)
    );
    querySnapshot.forEach(doc => {
      categories.push(doc.data());
    });
    return categories;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, state => {
      state.isLoading = false;
    });
  }
});

export const categoriesReducer = categoriesSlice.reducer;
