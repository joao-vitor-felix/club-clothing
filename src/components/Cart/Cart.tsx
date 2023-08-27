import { BsCartPlus } from "react-icons/bs";
import * as S from "./Cart.styles";
import useCartContext from "../../hooks/useCartContext";
import { useEffect, useRef } from "react";
import CartItem from "./components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, sumCartTotal, toggleCart, isCartOpen } = useCartContext();
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isCartOpen && e.key === "Escape") {
        toggleCart();
      }
    };

    addEventListener("keydown", handleEscape);

    return () => {
      removeEventListener("keydown", handleEscape);
    };
  }, [isCartOpen]);

  const goToCheckout = () => {
    toggleCart();
    navigate("checkout");
  };

  return (
    <S.Background isCartOpen={isCartOpen}>
      <S.EscapeArea onClick={toggleCart} />
      <S.SideBar ref={divRef}>
        <S.Title>Seu carrinho</S.Title>
        <S.ItemContainer>
          {cart.map(product => (
            <CartItem product={product} key={product.id} />
          ))}
        </S.ItemContainer>
        {sumCartTotal > 0 && <S.Total>Total: R$ {sumCartTotal}</S.Total>}
        {sumCartTotal > 0 && (
          <S.PayButton icon={<BsCartPlus size={23} />} onClick={goToCheckout}>
            Prosseguir com o pagamento
          </S.PayButton>
        )}
        {sumCartTotal === 0 && <S.Empty>Seu carrinho está vazio :(</S.Empty>}
      </S.SideBar>
    </S.Background>
  );
};

export default Cart;
