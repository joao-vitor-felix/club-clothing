import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import axios from "axios";
import * as S from "./Checkout.styles";
import Button from "../../components/Button/Button";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../store/cart/cart.selectors";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartItemsTotalPrice);

  const [isLoading, setIsLoading] = useState(false);

  const finishPurchase = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post(
        `${process.env.VITE_API_URL}/create-checkout-session`,
        {
          cart
        }
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Text>Checkout</S.Text>
      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CheckoutItem product={item} key={item.id} />
          ))}
          <S.Text>Total: R$ {totalPrice}</S.Text>
          <Button
            icon={<BsCartPlus size={23} />}
            onClick={finishPurchase}
            isLoading={isLoading}
          >
            Finalizar compra
          </Button>
        </>
      ) : (
        <S.Empty>Seu carrinho está vazio!</S.Empty>
      )}
    </S.Container>
  );
};

export default Checkout;
