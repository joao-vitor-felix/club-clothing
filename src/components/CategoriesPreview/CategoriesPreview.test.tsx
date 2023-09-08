import * as firestore from "firebase/firestore";
import Category from "../../types/categories.types";
import CategoriesPreview from "./CategoriesPreview";
import { renderWithRedux } from "../../utils/test.helper";
import { screen } from "@testing-library/react";
jest.mock("firebase/firestore");

describe("Categories Overview", () => {
  it("should fetch and show categories", async () => {
    const mockedFirestore = firestore as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-await
    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data(): Category {
          return {
            id: "1",
            displayName: "Lorem Ipsum",
            imageUrl: "image_url",
            name: "lorem-ipsum",
            products: [
              { id: "1", name: "Boné", price: 100, imageUrl: "image_url" }
            ]
          };
        }
      }
    ]);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }));

    renderWithRedux(<CategoriesPreview />, {});

    await screen.findByText(/boné/i);
    screen.getByText("Lorem Ipsum");
    screen.getByText("R$100");
  });
});
