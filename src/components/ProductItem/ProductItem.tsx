import { FC } from "react";
import * as S from "./ProductItem.styles";
import Product from "../../types/product.types";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { addProductToCart } from "../../store/cart/cart.slice";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { imageUrl, name, price } = product;
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image $imageUrl={imageUrl}>
        <S.CartButton onClick={() => dispatch(addProductToCart(product))}>
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
