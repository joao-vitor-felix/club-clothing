import userEvent from "@testing-library/user-event";
import * as firebaseAuth from "firebase/auth";
import { AuthErrorCodes } from "firebase/auth";
import SignUp from "./SignUp";
import { renderWithRedux } from "../../utils/test.helper";

jest.mock("firebase/auth");

describe("Sign Up", () => {
  it("should show error when trying to submit without filling all required fields", async () => {
    const { getByText, findByText, getByRole } = renderWithRedux(
      <SignUp />,
      {}
    );

    const submitButton = getByRole("button", {
      name: /criar conta/i
    });

    userEvent.click(submitButton);

    await findByText("O primeiro nome deve conter, no mínimo, 2 caracteres");
    getByText("O sobrenome nome deve conter, no mínimo, 2 caracteres");
    getByText("O e-mail é obrigatório.");
    getByText("A senha deve conter, no mínimo, 6 caracteres");
    getByText("Confirme a senha.");
  });

  it("should show error when filling an invalid email", async () => {
    const { getByRole, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />,
      {}
    );

    const emailInput = getByPlaceholderText("Informe seu melhor e-mail");

    await userEvent.type(emailInput, "invalid_email");

    const submitButton = getByRole("button", {
      name: /criar conta/i
    });

    userEvent.click(submitButton);

    await findByText("Informe um e-mail válido.");
  });

  it("should show error when password and password confirmation are different", async () => {
    const { getByRole, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />,
      {}
    );

    const passwordInput = getByPlaceholderText("Informe sua senha");
    const passwordConfirmationInput =
      getByPlaceholderText("Confirme sua senha");

    await userEvent.type(passwordInput, "123456");
    await userEvent.type(passwordConfirmationInput, "12345678");

    const submitButton = getByRole("button", {
      name: /criar conta/i
    });

    userEvent.click(submitButton);

    await findByText("As senhas precisam ser iguais.");
  });

  it("should show error when password has less than 6 characters", async () => {
    const { getByRole, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />,
      {}
    );

    const passwordInput = getByPlaceholderText("Informe sua senha");

    userEvent.type(passwordInput, "123");

    const submitButton = getByRole("button", {
      name: /criar conta/i
    });

    userEvent.click(submitButton);

    await findByText("A senha deve conter, no mínimo, 6 caracteres");
  });

  it("should show error if email already exists", async () => {
    const mockFirebaseAuth = firebaseAuth as any;

    const { getByRole, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />,
      {}
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockFirebaseAuth.createUserWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.EMAIL_EXISTS })
    );

    const nameInput = getByPlaceholderText("Informe seu nome");
    const lastName = getByPlaceholderText("Informe seu sobrenome");
    const emailInput = getByPlaceholderText("Informe seu melhor e-mail");
    const passwordInput = getByPlaceholderText("Informe sua senha");
    const passwordConfirmationInput =
      getByPlaceholderText("Confirme sua senha");

    await userEvent.type(nameInput, "Lorem");
    await userEvent.type(lastName, "Ipsum");
    await userEvent.type(emailInput, "lorem@ipsum.com");
    await userEvent.type(passwordInput, "12345678");
    await userEvent.type(passwordConfirmationInput, "12345678");

    const submitButton = getByRole("button", {
      name: /criar conta/i
    });

    userEvent.click(submitButton);

    await findByText("O e-mail informado já está em uso.");
  });
});
