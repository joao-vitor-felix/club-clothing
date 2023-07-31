import { Outlet } from "react-router-dom";
import * as S from "./Navigation.styles";
import { BsCart3 } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <S.Nav>
        <S.LogoContainer to={"/"}>
          <S.Logo />
          <S.Title>CLUB CLOTHING</S.Title>
        </S.LogoContainer>
        <S.ItemWrapper>
          <S.Item to={"/"}>Explorar</S.Item>
          <S.Item to="/shop">Login</S.Item>
          <S.Item to={"/"}>Criar conta</S.Item>
          <S.Item to={"/"}>
            <BsCart3 size={22} />
          </S.Item>
        </S.ItemWrapper>
      </S.Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
