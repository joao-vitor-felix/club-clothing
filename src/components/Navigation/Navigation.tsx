import { Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import * as S from "./Navigation.styles";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/cart/cart.actions";
import { selectCartItemsCount } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { logoutUser } from "../../store/user/user.slice";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);

  const SignUserOut = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      <S.Nav>
        <S.LogoContainer to="/">
          <S.Logo />
          <S.Title>CLUB CLOTHING</S.Title>
        </S.LogoContainer>
        <S.ItemWrapper>
          <S.Item to="shop">Explorar</S.Item>
          {currentUser ? (
            <S.Item to="#" onClick={SignUserOut}>
              Sair
            </S.Item>
          ) : (
            <>
              <S.Item to="sign-up">Criar conta</S.Item>
              <S.Item to="sign-in">Entrar</S.Item>
            </>
          )}

          <S.Item to="#" onClick={handleCartClick}>
            <BsCart3 size={22} />
            {cartItemsCount}
          </S.Item>
        </S.ItemWrapper>
        <Cart />
      </S.Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
