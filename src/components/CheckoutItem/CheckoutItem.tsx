import * as S from "./CheckoutItem.styles";
import Cart from "../../types/cart.type";
import { FC } from "react";
import {
  addProductToCart,
  clearProductFromCart,
  removeProductFromCart
} from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";

type CheckoutItemProps = {
  product: Cart;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
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
            aria-label={`Remover ${name} do Checkout`}
          />
        </S.PriceContainer>
        <S.ButtonContainer>
          <S.Decrease
            onClick={() => dispatch(removeProductFromCart(product))}
            aria-label={`Diminuir ${name} do Checkout`}
          />
          <S.Text>{quantity}</S.Text>
          <S.Increase
            onClick={() => dispatch(addProductToCart(product))}
            aria-label={`Aumentar ${name} do Checkout`}
          />
        </S.ButtonContainer>
      </S.Info>
    </S.Container>
  );
};

export default CheckoutItem;
