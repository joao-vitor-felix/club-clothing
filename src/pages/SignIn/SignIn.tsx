import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as S from "./SignIn.styles";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Informe um e-mail válido.")
    .required("O campo e-mail é obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve conter, no mínimo, 6 caracteres")
    .max(20, "A senha deve conter, no máximo, 20 caracteres")
    .required("Informe uma senha válida.")
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });

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
            type="email"
            hasError={!!errors?.email}
            {...register("email")}
          />
          {errors?.email?.message && <S.Error>{errors.email.message}</S.Error>}
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="Digite sua senha"
            id="password"
            type="password"
            hasError={!!errors?.password}
            {...register("password")}
          />
          {errors?.password?.message && (
            <S.Error>{errors.password.message}</S.Error>
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

export default SignIn;
