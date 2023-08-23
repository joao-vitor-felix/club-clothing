import { BsCartPlus } from "react-icons/bs";
import Button from "../../components/Button/Button";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import useCartContext from "../../hooks/useCartContext";
import * as S from "./Checkout.styles";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <S.Container>
      <S.Text>Checkout</S.Text>
      {cart.map(item => (
        <CheckoutItem product={item} key={item.id} />
      ))}
      <Button icon={<BsCartPlus size={23} />}>Finalizar compra</Button>
    </S.Container>
  );
};

export default Checkout;
