import { useEffect } from "react";
import useCategoryContext from "../../hooks/useCategoryContext";
import CategoryItem from "../CategoryItem/CategoryItem";
import * as S from "./Categories.styles";
import Loading from "../Loading/Loading";

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useCategoryContext();

  useEffect(() => {
    const fetchData = async () => await fetchCategories();

    fetchData();
  }, []);

  return (
    <S.Container>
      {isLoading && <Loading />}
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
