import { Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import useUserContext from "../../hooks/useUserContext";
import * as S from "./Navigation.styles";
import useCartContext from "../../hooks/useCartContext";
import Cart from "../Cart/Cart";

const Navigation = () => {
  const { currentUser, logoutUser } = useUserContext();
  const { toggleCart, sumTotalQuantity } = useCartContext();

  const SignUserOut = async () => {
    await signOut(auth);
    logoutUser();
    console.log("User logged out");
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
