import { FC } from "react";
import * as S from "./CategoryPreview.styles";
import Category from "../../../../types/categories.types";
import ProductItem from "../../../ProductItem/ProductItem";

type CategoryPreviewProps = {
  category: Category;
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ category }) => {
  return (
    <S.Container>
      <S.Title to={`category/${category.id}`}>{category.displayName}</S.Title>
      <S.ProductsContainer>
        {category.products.slice(0, 4).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default CategoryPreview;
