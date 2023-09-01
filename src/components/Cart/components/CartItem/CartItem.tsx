import * as S from "./CartItem.styles";
import Cart from "../../../../types/cart.type";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../../store/cart/cart.selectors";
import {
  addProductToCart,
  clearProductFromCart,
  removeProductFromCart
} from "../../../../store/cart/cart.slice";

type CartItemProps = {
  product: Cart;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image src={imageUrl} alt={`Imagem do produto ${name}`} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.PriceContainer>
          <S.Text>R$ {price}</S.Text>
          <S.Remove onClick={() => dispatch(clearProductFromCart(product))} />
        </S.PriceContainer>
        <S.ButtonContainer>
          <S.Decrease
            onClick={() => dispatch(removeProductFromCart(product))}
          />
          <S.Text>{quantity}</S.Text>
          <S.Increase onClick={() => dispatch(addProductToCart(product))} />
        </S.ButtonContainer>
      </S.Info>
    </S.Container>
  );
};

export default CartItem;
