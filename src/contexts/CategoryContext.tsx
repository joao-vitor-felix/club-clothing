import { PropsWithChildren, createContext, useState } from "react";
import Category from "../types/categories.types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { categoryConverter } from "../firebase/firestore.converters";

type CategoryType = {
  categories: Category[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
};

export const CategoryContext = createContext<CategoryType>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
});

const CategoryContextProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const categories: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );
      querySnapshot.forEach(doc => {
        categories.push(doc.data());
      });
      setCategories(categories);
    } catch (error) {
      return console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    categories,
    isLoading,
    fetchCategories
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
