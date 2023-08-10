import { Outlet } from "react-router-dom";
import * as S from "./Navigation.styles";
import { BsCart3 } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import useUserContext from "../../hooks/useUserContext";

const Navigation = () => {
  const SignUserOut = async () => {
    await signOut(auth);
    console.log("User logged out");
  };

  const { currentUser } = useUserContext();

  return (
    <>
      <S.Nav>
        <S.LogoContainer to={"/"}>
          <S.Logo />
          <S.Title>CLUB CLOTHING</S.Title>
        </S.LogoContainer>
        <S.ItemWrapper>
          <S.Item to="/">Explorar</S.Item>
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

          <S.Item to="/">
            <BsCart3 size={22} />
          </S.Item>
        </S.ItemWrapper>
      </S.Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
