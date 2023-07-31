import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as S from "./Login.styles";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Headline>Entre com sua conta</S.Headline>
          <Button icon={<BsGoogle size={22} />}>Entrar com o Google</Button>
          <S.Subtitle>Entre com o seu e-mail</S.Subtitle>
          <S.InputContainer>
            <label htmlFor="email">E-mail</label>
            <Input placeholder="Digite seu e-mail" id="email" />
          </S.InputContainer>
          <S.InputContainer>
            <label htmlFor="password">Senha</label>
            <Input placeholder="Digite sua senha" id="password" />
          </S.InputContainer>
          <Button icon={<FiLogIn size={22} />}>Entrar</Button>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Login;
