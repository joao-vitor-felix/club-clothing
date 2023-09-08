import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Category from "../../../../types/categories.types";
import CategoryItem from "./CategoryItem";

describe("Category Item", () => {
  it("should render category correctly", () => {
    const category: Category = {
      id: "1",
      displayName: "Lorem Ipsum",
      imageUrl: "image_url",
      name: "lorem-ipsum",
      products: []
    };

    render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    );

    const displayName = screen.getByText("Lorem Ipsum");
    const explore = screen.getByText("Explorar");

    expect(displayName).toBeInTheDocument();
    expect(explore).toBeInTheDocument();
  });
});
