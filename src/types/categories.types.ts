import Product from "./product.types";

type Category = {
  id: string;
  name: string;
  displayName: string;
  imageUrl: string;
  products: Product[];
};

export default Category;
