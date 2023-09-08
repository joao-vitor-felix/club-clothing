import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import Theme from "../../Theme";

describe("Input", () => {
  it("should render correct", () => {
    render(
      <Theme>
        <Input />
      </Theme>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should have the value typed", async () => {
    render(
      <Theme>
        <Input $hasError={false} placeholder="Digite aqui" />
      </Theme>
    );

    const input = screen.getByPlaceholderText("Digite aqui");
    await userEvent.type(input, "teste");
    expect(input).toHaveValue("teste");
  });

  it("should not have the error style when $hasError has not been passed", () => {
    render(
      <Theme>
        <Input $hasError={false} placeholder="Digite aqui" />
      </Theme>
    );

    const input = screen.getByPlaceholderText("Digite aqui");
    expect(input).toHaveStyle("border: none");
  });
});

it("should have the error style when $hasError has been passed", () => {
  render(
    <Theme>
      <Input $hasError={true} placeholder="Digite aqui" />
    </Theme>
  );

  const input = screen.getByPlaceholderText("Digite aqui");
  expect(input).toHaveStyle("border: 0.2rem solid #ff6a6a");
});
