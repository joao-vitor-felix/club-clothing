import { useEffect } from "react";
import * as S from "./CategoriesPreview.styles";
import useCategoryContext from "../../hooks/useCategoryContext";
import Loading from "../Loading/Loading";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
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
        <CategoryPreview key={category.id} category={category} />
      ))}
    </S.Container>
  );
};

export default CategoriesPreview;
