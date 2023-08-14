import { FC } from "react";
import * as S from "./ProductItem.styles";
import Product from "../../types/product.types";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <S.Container>
      <S.Image imageUrl={product.imageUrl} />
      <S.Info>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </S.Info>
    </S.Container>
  );
};

export default ProductItem;
