import * as S from "./Header.styles";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <S.Navigation>
      <S.LogoContainer to={"/"}>
        <S.Logo />
        <S.Title>CLUB CLOTHING</S.Title>
      </S.LogoContainer>
      <S.ItemWrapper>
        <S.Item to={"/"}>Explorar</S.Item>
        <S.Item to={"/"}>Login</S.Item>
        <S.Item to={"/"}>Criar conta</S.Item>
        <S.Item to={"/"}>
          <BsCart3 size={22} />
        </S.Item>
      </S.ItemWrapper>
    </S.Navigation>
  );
};

export default Header;
