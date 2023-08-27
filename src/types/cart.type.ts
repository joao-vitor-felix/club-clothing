import Product from "./product.types";

type Cart = Product & {
  quantity: number;
};

export default Cart;
