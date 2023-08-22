import { FC } from "react";
import * as S from "./CategoryItem.styles";
import Category from "../../../../types/categories.types";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { displayName, imageUrl, id } = category;
  return (
    <S.Container
      to={`shop/category/${id}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <S.Name>
        <p>{displayName}</p>
        <p>Explorar</p>
      </S.Name>
    </S.Container>
  );
};

export default CategoryItem;
