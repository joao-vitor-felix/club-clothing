import { screen } from "@testing-library/react";
import Category from "../../../../types/categories.types";
import CategoryPreview from "./CategoryPreview";
import { renderWithRedux } from "../../../../utils/test.helper";

describe("Category Overview", () => {
  it("should show correct category and its products", () => {
    const category: Category = {
      displayName: "Lorem Ipsum",
      id: "1",
      imageUrl: "image_url",
      name: "lorem-ipsum",
      products: [
        {
          id: "2",
          imageUrl: "image_url",
          name: "Lorem",
          price: 100
        },
        {
          id: "3",
          imageUrl: "image_url",
          name: "Ipsum",
          price: 200
        },
        {
          id: "4",
          imageUrl: "image_url",
          name: "Dolor",
          price: 300
        },
        {
          id: "5",
          imageUrl: "image_url",
          name: "Sit",
          price: 400
        },
        {
          id: "6",
          imageUrl: "image_url",
          name: "Amet",
          price: 500
        }
      ]
    };

    renderWithRedux(<CategoryPreview category={category} />, {});

    const categoryName = screen.getByText(/lorem ipsum/i);

    const productName1 = screen.getByText("Lorem");
    const productPrice1 = screen.getByText("R$100");

    const productName2 = screen.getByText("Ipsum");
    const productPrice2 = screen.getByText("R$200");

    const productName3 = screen.getByText("Dolor");
    const productPrice3 = screen.getByText("R$300");

    const productName4 = screen.getByText("Sit");
    const productPrice4 = screen.getByText("R$400");

    const productName5 = screen.queryByText("Amet");

    expect(categoryName).toBeInTheDocument();
    expect(productName1).toBeInTheDocument();
    expect(productPrice1).toBeInTheDocument();
    expect(productName2).toBeInTheDocument();
    expect(productPrice2).toBeInTheDocument();
    expect(productName3).toBeInTheDocument();
    expect(productPrice3).toBeInTheDocument();
    expect(productName4).toBeInTheDocument();
    expect(productPrice4).toBeInTheDocument();
    expect(productName5).not.toBeInTheDocument();
  });
});
