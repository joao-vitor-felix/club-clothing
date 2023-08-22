import { BsCartPlus } from "react-icons/bs";
import Button from "../Button/Button";
import * as S from "./Cart.styles";
import useCartContext from "../../hooks/useCartContext";
import { useEffect, useRef } from "react";
import CartItem from "./components/CartItem/CartItem";

const Cart = () => {
  const { cart, sumCartTotal, toggleCart } = useCartContext();
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(e.target as Node)) {
      toggleCart();
    }
  };

  useEffect(() => {
    addEventListener("mousedown", handleClickOutside);
    return () => removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.Background>
      <S.SideBar ref={divRef}>
        <S.Title>Seu carrinho</S.Title>
        <S.ItemContainer>
          {cart.map(product => (
            <CartItem product={product} key={product.id} />
          ))}
        </S.ItemContainer>
        <S.Total>Total: R$ {sumCartTotal()}</S.Total>
        <Button icon={<BsCartPlus size={23} />}>Finalizar compra</Button>
      </S.SideBar>
    </S.Background>
  );
};

export default Cart;
