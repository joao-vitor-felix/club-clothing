import * as S from "./Categories.styles";
import Category from "../../types/categories.types";
import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { categoryConverter } from "../../firebase/firestore.converters";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
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
    }
  };

  useEffect(() => {
    const fetchData = async () => await fetchCategories();

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {categories.map(category => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Categories;
