import { FC } from "react";
import * as S from "./CategoryItem.styles";
import Category from "../../types/categories.types";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <S.Container
      to={"#"}
      style={{ backgroundImage: `url('${category.imageUrl}')` }}
    >
      <S.Name>
        <p>{capitalizeFirstLetter(category.name)}</p>
        <p>Explorar</p>
      </S.Name>
    </S.Container>
  );
};

export default CategoryItem;
