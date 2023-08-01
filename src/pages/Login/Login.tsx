import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as S from "./Login.styles";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const getFormData = (data: FormData) => {
    console.log({ data });
  };

  console.log({ errors });
  return (
    <S.Container>
      <S.Content>
        <S.Headline>Entre com sua conta</S.Headline>
        <Button icon={<BsGoogle size={22} />}>Entrar com o Google</Button>
        <S.Subtitle>Entre com o seu e-mail</S.Subtitle>
        <S.InputContainer>
          <label htmlFor="email">E-mail</label>
          <Input
            placeholder="Digite seu e-mail"
            id="email"
            hasError={!!errors?.email}
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <S.Error>Informe o e-mail.</S.Error>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="Digite sua senha"
            id="password"
            hasError={!!errors?.password}
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <S.Error>Informe sua senha.</S.Error>
          )}
        </S.InputContainer>
        <Button
          icon={<FiLogIn size={22} />}
          onClick={handleSubmit(getFormData)}
        >
          Entrar
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Login;
