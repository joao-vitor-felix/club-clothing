import { FC } from "react";
import * as S from "./ProductItem.styles";
import Product from "../../types/product.types";
import { BsCartPlus } from "react-icons/bs";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <S.Container>
      <S.Image imageUrl={product.imageUrl}>
        <S.CartButton>
          <BsCartPlus size={23} /> Adicionar ao carrinho
        </S.CartButton>
      </S.Image>
      <S.Info>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </S.Info>
    </S.Container>
  );
};

export default ProductItem;
