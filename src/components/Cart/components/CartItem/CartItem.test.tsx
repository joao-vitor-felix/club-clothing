import { screen } from "@testing-library/react";
import Cart from "../../../../types/cart.type";
import { renderWithRedux } from "../../../../utils/test.helper";
import CartItem from "./CartItem";

describe("Cart Item", () => {
  it("should show correct cart item", () => {
    const cartItem: Cart = {
      id: "1",
      imageUrl: "image_url",
      name: "Boné",
      price: 100,
      quantity: 1
    };

    renderWithRedux(<CartItem product={cartItem} />, {});

    const item = screen.getByText("Boné");
    const price = screen.getByText("R$ 100");
    const quantity = screen.getByText("1");
    const increaseButton = screen.getByLabelText("Aumentar Boné do Carrinho");
    const decreaseButton = screen.getByLabelText("Diminuir Boné do Carrinho");
    const removeButton = screen.getByLabelText("Remover Boné do Carrinho");
    expect(item).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });
});
