import * as S from "../SignIn/SignIn.styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "O primeiro nome deve conter, no mínimo, 2 caracteres")
    .max(20, "O primeiro nome deve conter, no máximo, 20 caracteres")
    .required("O nome é obrigatório."),
  lastName: yup
    .string()
    .min(2, "O sobrenome nome deve conter, no mínimo, 2 caracteres")
    .max(20, "O sobrenome nome deve conter, no máximo, 20 caracteres")
    .required("O sobrenome é obrigatório."),
  email: yup
    .string()
    .email("Informe um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve conter, no mínimo, 6 caracteres")
    .max(20, "A senha deve conter, no máximo, 20 caracteres")
    .required("A senha é obrigatória."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais.")
    .required("Confirme a senha.")
});

const SignUp = () => {
  useDocumentTitle("Cria conta | Club Clothing");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const getFormData = async (data: FormData) => {
    try {
      setIsLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await addDoc(collection(db, "users"), {
        id: userCredentials.user?.uid,
        email: userCredentials.user?.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: "firebase"
      });

      console.log("Usuário criado com sucesso!");
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", {
          type: "email-in-use",
          message: "O e-mail informado já está em uso."
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Headline>Crie sua conta</S.Headline>
        <S.InputContainer>
          <label htmlFor="firstName">Nome</label>
          <Input
            placeholder="Informe seu nome"
            id="firstName"
            hasError={!!errors?.firstName}
            {...register("firstName")}
          />
          {errors?.firstName?.message && (
            <S.Error>{errors.firstName.message}</S.Error>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="lastName">Sobrenome</label>
          <Input
            placeholder="Informe seu sobrenome"
            hasError={!!errors?.lastName}
            id="lastName"
            {...register("lastName")}
          />
          {errors?.lastName?.message && (
            <S.Error>{errors.lastName.message}</S.Error>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="email">E-mail</label>
          <Input
            placeholder="Informe seu melhor e-mail"
            id="email"
            hasError={!!errors?.email}
            {...register("email")}
          />
          {errors?.email?.message && <S.Error>{errors.email.message}</S.Error>}
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="Informe sua senha"
            hasError={!!errors?.password}
            id="password"
            {...register("password")}
          />
          {errors?.password?.message && (
            <S.Error>{errors.password.message}</S.Error>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="confirmPassword">Confirme a senha</label>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            id="confirmPassword"
            hasError={!!errors?.confirmPassword}
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword?.message && (
            <S.Error>{errors.confirmPassword.message}</S.Error>
          )}
        </S.InputContainer>

        <Button
          icon={<FiLogIn size={22} />}
          onClick={handleSubmit(getFormData)}
          isLoading={isLoading}
        >
          Criar conta
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
