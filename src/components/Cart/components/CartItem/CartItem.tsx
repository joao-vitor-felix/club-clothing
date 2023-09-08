import * as S from "./CartItem.styles";
import Cart from "../../../../types/cart.type";
import { FC } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image src={imageUrl} alt={`Imagem do produto ${name}`} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.PriceContainer>
          <S.Text>R$ {price}</S.Text>
          <S.Remove
            onClick={() => dispatch(clearProductFromCart(product))}
            aria-label={`Remover ${name}`}
          />
        </S.PriceContainer>
        <S.ButtonContainer>
          <S.Decrease
            onClick={() => dispatch(removeProductFromCart(product))}
            aria-label={`Diminuir ${name}`}
          />
          <S.Text>{quantity}</S.Text>
          <S.Increase
            onClick={() => dispatch(addProductToCart(product))}
            aria-label={`Aumentar ${name}`}
          />
        </S.ButtonContainer>
      </S.Info>
    </S.Container>
  );
};

export default CartItem;
