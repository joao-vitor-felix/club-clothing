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
            <p>E-mail</p>
            <Input placeholder="Digite seu e-mail" />
          </S.InputContainer>
          <S.InputContainer>
            <p>Senha</p>
            <Input placeholder="Digite sua senha" />
          </S.InputContainer>
          <Button icon={<FiLogIn size={22} />}>Entrar</Button>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Login;
