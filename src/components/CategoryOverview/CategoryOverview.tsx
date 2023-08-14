import { FC } from "react";
import Category from "../../types/categories.types";
import * as S from "./CategoryOverview.styles";
import ProductItem from "../ProductItem/ProductItem";

type CategoryOverviewProps = {
  category: Category;
};

const CategoryOverview: FC<CategoryOverviewProps> = ({ category }) => {
  return (
    <S.Container>
      <S.Title>{category.displayName}</S.Title>
      <S.ProductsContainer>
        {category.products.slice(0, 4).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default CategoryOverview;
