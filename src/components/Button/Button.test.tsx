import { screen, render } from "@testing-library/react";
import Button from "./Button";
import Theme from "../../Theme";

describe("Button", () => {
  it("should render with correct children", () => {
    render(
      <Theme>
        <Button>Entrar</Button>
      </Theme>
    );

    const button = screen.getByText(/entrar/i);
    expect(button).toBeInTheDocument();
  });

  it("should not render any children if isLoading is passed as true", () => {
    render(
      <Theme>
        <Button isLoading={true}>Entrar</Button>
      </Theme>
    );

    const button = screen.queryByText(/entrar/i);
    expect(button).not.toBeInTheDocument();
  });
});
