import { FC } from "react";
import Cart from "../../../../types/cart.type";
import * as S from "./CartItem.styles";
import useCartContext from "../../../../hooks/useCartContext";

type CartItemProps = {
  product: Cart;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const { cart, addToCart, removeFromCart, clearFromCart } = useCartContext();
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={`Imagem do produto ${name}`} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.PriceContainer>
          <S.Text>R$ {price}</S.Text>
          <S.Remove onClick={() => clearFromCart(product, cart)} />
        </S.PriceContainer>
        <S.ButtonContainer>
          <S.Decrease onClick={() => removeFromCart(product, cart)} />
          <S.Text>{quantity}</S.Text>
          <S.Increase onClick={() => addToCart(product, cart)} />
        </S.ButtonContainer>
      </S.Info>
    </S.Container>
  );
};

export default CartItem;
