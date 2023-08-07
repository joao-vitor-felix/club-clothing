import { FC } from "react";
import * as S from "./CategoryItem.styles";
import Category from "../../types/categories.types";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return (
    <S.Container
      to={"#"}
      style={{ backgroundImage: `url('${category.imageUrl}')` }}
    >
      <S.Name>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </S.Name>
    </S.Container>
  );
};

export default CategoryItem;
