import { useEffect } from "react";
import * as S from "./CategoriesOverview.styles";
import useCategoryContext from "../../hooks/useCategoryContext";
import Loading from "../Loading/Loading";
import CategoryOverview from "../CategoryOverview/CategoryOverview";

const CategoriesOverview = () => {
  const { categories, isLoading, fetchCategories } = useCategoryContext();

  useEffect(() => {
    if (!categories.length) {
      fetchCategories();
    }
  }, []);
  if (isLoading) return <Loading />;

  return (
    <S.Container>
      {categories.map(category => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </S.Container>
  );
};

export default CategoriesOverview;
