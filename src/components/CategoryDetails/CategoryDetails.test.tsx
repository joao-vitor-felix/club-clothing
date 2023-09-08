import * as firestore from "firebase/firestore";
import Category from "../../types/categories.types";
import { renderWithRedux } from "../../utils/test.helper";
import { screen } from "@testing-library/react";
import CategoryDetails from "./CategoryDetails";

jest.mock("firebase/firestore");

describe("Category Details", () => {
  it("should fetch and show categories and its products", async () => {
    const mockedFirestore = firestore as any;

    // eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-unsafe-call
    mockedFirestore.getDocs.mockImplementation(async () => ({
      docs: [
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
      ]
    }));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockedFirestore.query.mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockedFirestore.where.mockImplementation(() => {});

    renderWithRedux(<CategoryDetails categoryId="any_id" />, {});

    await screen.findByText("Explorar Lorem Ipsum");
    screen.getByText(/boné/i);
    screen.getByText("R$100");
  });
});
