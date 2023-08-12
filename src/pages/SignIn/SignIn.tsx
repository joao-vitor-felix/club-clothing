import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as S from "./SignIn.styles";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

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
  useDocumentTitle("Entrar | Club Clothing");
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

  const SignUserIn = async (data: FormData) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      const _error = error as AuthError;
      console.log(error);

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", {
          type: "wrong-password",
          message: "Senha incorreta."
        });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", {
          type: "user-not-found",
          message:
            "O usuário informado não está cadastrado. Crie uma conta para entrar."
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: "google"
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Headline>Entre com sua conta</S.Headline>
        <Button
          icon={<BsGoogle size={22} />}
          onClick={handleGoogleLogin}
          isLoading={isLoading}
        >
          Entrar com o Google
        </Button>
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
          onClick={handleSubmit(SignUserIn)}
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
