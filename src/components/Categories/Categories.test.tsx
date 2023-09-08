import * as firestore from "firebase/firestore";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../utils/test.helper";
import Categories from "./Categories";

jest.mock("firebase/firestore");

describe("Categories", () => {
  it("should fetch and show categories", async () => {
    const mockedFirestore = firestore as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-await
    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data() {
          return {
            id: "1",
            displayName: "Lorem Ipsum"
          };
        }
      }
    ]);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }));

    renderWithRedux(<Categories />, {});

    await screen.findByText("Lorem Ipsum");
    screen.getByText(/explorar/i);
  });
});
