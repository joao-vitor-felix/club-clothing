import { FC } from "react";
import * as S from "./ProductItem.styles";
import Product from "../../types/product.types";
import { BsCartPlus } from "react-icons/bs";
import useCartContext from "../../hooks/useCartContext";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { cart, addToCart } = useCartContext();
  const { imageUrl, name, price } = product;
  return (
    <S.Container>
      <S.Image imageUrl={imageUrl}>
        <S.CartButton onClick={() => addToCart(product, cart)}>
          <BsCartPlus size={23} /> Adicionar ao carrinho
        </S.CartButton>
      </S.Image>
      <S.Info>
        <p>{name}</p>
        <p>R${price}</p>
      </S.Info>
    </S.Container>
  );
};

export default ProductItem;
