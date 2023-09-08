import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../utils/test.helper";
import Cart from "./Cart";

describe("Cart", () => {
  it("should show correct cart products", () => {
    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: "1",
              imageUrl: "image_url",
              name: "Boné",
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    });

    const item = screen.getByText("Boné");
    const price = screen.getByText("R$ 100");
    const quantity = screen.getByText("2");
    const totalPrice = screen.getByText("Total: R$ 200");
    const button = screen.getByText("Prosseguir com o pagamento");

    expect(item).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should not show checkout button and should show an empty message if cart is empty", () => {
    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: []
        }
      } as any
    });

    const cartMessage = screen.getByText("Seu carrinho está vazio!");
    const button = screen.queryByText("Prosseguir com o pagamento");
    expect(cartMessage).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it("should increase product quantity on increase click", async () => {
    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: "1",
              imageUrl: "image_url",
              name: "Boné",
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    });

    const increaseButton = screen.getByLabelText("Aumentar Boné");
    await userEvent.click(increaseButton);
    const quantity = screen.getByText("3");
    const totalPrice = screen.getByText("Total: R$ 300");
    expect(quantity).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });

  it("should decrease product quantity on decrease click", async () => {
    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: "1",
              imageUrl: "image_url",
              name: "Boné",
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    });

    const decreaseButton = screen.getByLabelText("Diminuir Boné");

    await userEvent.click(decreaseButton);
    const quantity = screen.getByText("1");
    const totalPrice = screen.getByText("Total: R$ 100");
    expect(quantity).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });

  it("should remove product on remove click", async () => {
    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: "1",
              imageUrl: "image_url",
              name: "Boné",
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    });

    const removeButton = screen.getByLabelText("Remover Boné");
    await userEvent.click(removeButton);
    const item = screen.queryByText("Boné");
    const cartMessage = screen.getByText("Seu carrinho está vazio!");
    expect(item).not.toBeInTheDocument();
    expect(cartMessage).toBeInTheDocument();
  });
});
