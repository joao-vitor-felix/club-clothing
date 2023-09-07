import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { renderWithRedux } from "../../utils/test.helper";
import Cart from "../../types/cart.type";

describe("Navigation", () => {
  it("should show the Sair button when there's a user ", () => {
    renderWithRedux(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {
            id: "123",
            firstName: "ze",
            lastName: "da manga",
            email: "aizedamanga@gmail.com",
            provider: "google"
          }
        }
      } as any
    });

    const sair = screen.getByText(/sair/i);
    expect(sair).toBeInTheDocument();
  });

  it("should show the Entrar e Criar Conta button when there's no user ", () => {
    renderWithRedux(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      } as any
    });

    const login = screen.getByText(/entrar/i);
    const createAccount = screen.getByText(/criar conta/i);
    expect(login).toBeInTheDocument();
    expect(createAccount).toBeInTheDocument();
  });

  it("should show correct cart products count", () => {
    const products: Cart[] = [
      {
        id: "1",
        imageUrl: "image_url",
        name: "Boné",
        price: 100,
        quantity: 10
      },
      {
        id: "2",
        imageUrl: "image_url",
        name: "Jaqueta",
        price: 100,
        quantity: 12
      }
    ];

    renderWithRedux(<Navigation />, {
      preloadedState: {
        cart: {
          cartItems: products
        }
      } as any
    });

    const quantity = screen.getByText("22");
    expect(quantity).toBeInTheDocument();
  });
});
