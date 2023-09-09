import userEvent from "@testing-library/user-event";
import * as firebaseAuth from "firebase/auth";
import { AuthErrorCodes } from "firebase/auth";

import SignIn from "./SignIn";
import { renderWithRedux } from "../../utils/test.helper";

jest.mock("firebase/auth");

describe("Login", () => {
  it("should show erros when trying to submit without filling all required fields", async () => {
    const { getByText, findByText } = renderWithRedux(<SignIn />, {});

    const submitButton = getByText("Entrar");

    userEvent.click(submitButton);

    await findByText("O campo e-mail é obrigatório.");
    getByText("A senha deve conter, no mínimo, 6 caracteres");
  });

  it("should show error if email is invalid", async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <SignIn />,
      {}
    );

    const emailInput = getByPlaceholderText(/digite seu e-mail/i);

    userEvent.type(emailInput, "invalid_email");

    const submitButton = getByText("Entrar");

    userEvent.click(submitButton);

    await findByText("Informe um e-mail válido.");
  });

  it("should show an error if email is not found", async () => {
    const mockFirebaseAuth = firebaseAuth as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.USER_DELETED })
    );

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <SignIn />,
      {}
    );

    const emailInput = getByPlaceholderText(/digite seu e-mail/i);

    await userEvent.type(emailInput, "lorem@ipsum.com");

    const passwordInput = getByPlaceholderText(/digite sua senha/i);

    await userEvent.type(passwordInput, "12345678");

    const submitButton = getByText("Entrar");

    userEvent.click(submitButton);

    await findByText(
      "O usuário informado não está cadastrado. Crie uma conta para entrar."
    );
  });

  it("should show an error if password is not valid", async () => {
    const mockFirebaseAuth = firebaseAuth as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.INVALID_PASSWORD })
    );

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <SignIn />,
      {}
    );

    const emailInput = getByPlaceholderText(/digite seu e-mail/i);

    await userEvent.type(emailInput, "lorem@ipsum.com");

    const passwordInput = getByPlaceholderText(/digite sua senha/i);

    await userEvent.type(passwordInput, "123456");

    const submitButton = getByText("Entrar");

    userEvent.click(submitButton);

    await findByText("Senha incorreta.");
  });
});
