import { useEffect } from "react";
import * as S from "./Categories.styles";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import Loading from "../Loading/Loading";
import {
  selectCategories,
  selectIsLoading
} from "../../store/categories/categories.selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/categories/categories.actions";

const Categories = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, []);

  return (
    <S.Container>
      {isLoading && categories.length === 0 && <Loading />}
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
