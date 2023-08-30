import { Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import * as S from "./Navigation.styles";
import useCartContext from "../../hooks/useCartContext";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/user.actions";
import { useUserReducer } from "../../hooks/useUserReducer";

const Navigation = () => {
  const { currentUser } = useUserReducer();

  const dispatch = useDispatch();
  const { toggleCart, sumTotalQuantity } = useCartContext();

  const SignUserOut = async () => {
    await signOut(auth);
    dispatch(logoutUser());
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

          <S.Item to="#" onClick={toggleCart}>
            <BsCart3 size={22} />
            {sumTotalQuantity}
          </S.Item>
        </S.ItemWrapper>
        <Cart />
      </S.Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
