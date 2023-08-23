import { BsCartPlus } from "react-icons/bs";
import * as S from "./Cart.styles";
import useCartContext from "../../hooks/useCartContext";
import { useEffect, useRef } from "react";
import CartItem from "./components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, sumCartTotal, toggleCart } = useCartContext();
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
        <S.PayButton
          icon={<BsCartPlus size={23} />}
          onClick={() => navigate("checkout")}
        >
          Prosseguir com o pagamento
        </S.PayButton>
      </S.SideBar>
    </S.Background>
  );
};

export default Cart;
