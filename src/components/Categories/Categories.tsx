import * as S from "./Categories.styles";
import Category from "../../types/categories.types";
import env from "../../utils/env.config";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get<Category[]>(
        `${env.apiUrl}/api/category`
      );

      console.log({ data });
      setCategories(data);
    } catch (error) {
      return error;
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
