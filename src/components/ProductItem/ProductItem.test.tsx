import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../utils/test.helper";
import ProductItem from "./ProductItem";
import Navigation from "../Navigation/Navigation";
import Product from "../../types/product.types";

describe("ProductItem", () => {
  it("should add product to cart when click on product item button", async () => {
    const product: Product = {
      id: "1",
      name: "Boné",
      imageUrl: "google.com.br",
      price: 10
    };

    renderWithRedux(
      <>
        <Navigation />
        <ProductItem product={product} />
      </>,
      { preloadedState: { cart: { cartItems: [] } } as any }
    );

    const cart = screen.getByLabelText("Carrinho de compras");
    const quantity = screen.queryByText("0");
    const message = screen.queryByText("Seu carrinho está vazio!");

    expect(cart).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    const cartButton = screen.getByLabelText(
      "Adicionar Boné ao carrinho de compras"
    );

    await userEvent.click(cartButton);
    await userEvent.click(cartButton);

    expect(cart).toHaveTextContent("2");
  });

  it("should show correct product", () => {
    const product: Product = {
      id: "1",
      name: "Boné",
      imageUrl: "google.com.br",
      price: 10
    };

    renderWithRedux(<ProductItem product={product} />, {});

    const item = screen.getByText("Boné");
    const price = screen.getByText("R$10");
    const cartButton = screen.getByLabelText(
      "Adicionar Boné ao carrinho de compras"
    );
    expect(item).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });
});
