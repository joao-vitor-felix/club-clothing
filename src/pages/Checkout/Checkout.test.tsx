import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../utils/test.helper";
import Checkout from "./Checkout";
describe("Checkout", () => {
  it("should show correct products and total price", () => {
    renderWithRedux(<Checkout />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: "2",
              imageUrl: "image_url",
              name: "Lorem",
              price: 100,
              quantity: 1
            },
            {
              id: "3",
              imageUrl: "image_url",
              name: "Ipsum",
              price: 200,
              quantity: 1
            },
            {
              id: "4",
              imageUrl: "image_url",
              name: "Dolor",
              price: 300,
              quantity: 1
            }
          ]
        }
      } as any
    });

    const header = screen.getByText("Checkout");
    const totalPrice = screen.getByText("Total: R$ 600");
    const paymentButton = screen.getByText("Finalizar compra");
    expect(header).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(paymentButton).toBeInTheDocument();
  });

  it("should show empty message if cart is empty and not show checkout button", () => {
    renderWithRedux(<Checkout />, {
      preloadedState: {
        cart: {
          cartItems: []
        }
      } as any
    });

    const checkoutMessage = screen.getByText("Seu carrinho está vazio!");
    const paymentButton = screen.queryByText("Finalizar compra");
    expect(checkoutMessage).toBeInTheDocument();
    expect(paymentButton).not.toBeInTheDocument();
  });
});
