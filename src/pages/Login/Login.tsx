import * as S from "./Login.styles";

const Login = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Headline>Entre com sua conta</S.Headline>
          {/* Button */}
          <S.Subtitle>Entre com o seu e-mail</S.Subtitle>
          <S.InputContainer>{/* Input */}</S.InputContainer>
          <S.InputContainer>{/* Input */}</S.InputContainer>
          {/* Button */}
        </S.Content>
      </S.Container>
    </>
  );
};

export default Login;
