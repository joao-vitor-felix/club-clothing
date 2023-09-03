import { useEffect } from "react";
import * as S from "./CategoriesPreview.styles";
import Loading from "../Loading/Loading";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview";
import {
  selectCategories,
  selectIsLoading
} from "../../store/categories/categories.selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/categories/categories.slice";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories() as any);
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
