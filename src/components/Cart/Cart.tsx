import { BsCartPlus } from "react-icons/bs";
import * as S from "./Cart.styles";
import { useEffect, useRef } from "react";
import CartItem from "./components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
  selectCartItemsTotalPrice
} from "../../store/cart/cart.selectors";

const Cart = () => {
  const cart = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartTotalPrice = useSelector(selectCartItemsTotalPrice);

  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(toggleCart());
    navigate("checkout");
  };

  const handleClickOutside = () => {
    dispatch(toggleCart());
  };

  return (
    <S.Background $isCartOpen={isCartOpen}>
      <S.EscapeArea onClick={handleClickOutside} />
      <S.SideBar ref={divRef}>
        <S.Title>Seu carrinho</S.Title>
        <S.ItemContainer>
          {cart.map(product => (
            <CartItem product={product} key={product.id} />
          ))}
        </S.ItemContainer>
        {cartTotalPrice > 0 && <S.Total>Total: R$ {cartTotalPrice}</S.Total>}
        {cartTotalPrice > 0 && (
          <S.PayButton icon={<BsCartPlus size={23} />} onClick={goToCheckout}>
            Prosseguir com o pagamento
          </S.PayButton>
        )}
        {cartTotalPrice === 0 && <S.Empty>Seu carrinho está vazio :(</S.Empty>}
      </S.SideBar>
    </S.Background>
  );
};

export default Cart;
