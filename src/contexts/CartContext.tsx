import { PropsWithChildren, createContext, useState } from "react";
import Cart from "../types/cart.type";
import Product from "../types/product.types";

type CartContextType = {
  cart: Cart[];
  addToCart: (product: Product, cart: Cart[]) => void;
  removeFromCart: (product: Product, cart: Cart[]) => void;
  clearCart: () => void;
  sumCartTotal: () => number;
  sumTotalQuantity: () => number;
  toggleCart: () => void;
  isCartOpen: boolean;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  sumCartTotal: () => 0,
  sumTotalQuantity: () => 0,
  toggleCart: () => null,
  isCartOpen: false
});

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, cart: Cart[]) => {
    const isOnCart = cart.find(item => item.id === product.id);

    if (isOnCart) {
      return setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    return setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product: Product, cart: Cart[]) => {
    const isOnCart = cart.find(item => item.id === product.id);
    const productQuantity = isOnCart && isOnCart?.quantity < 1;

    if (productQuantity) {
      return setCart(cart.filter(item => item.id !== product.id));
    }

    if (isOnCart) {
      return setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  const sumCartTotal = () => {
    return cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  };

  const sumTotalQuantity = () => {
    return cart.reduce((acc, current) => acc + current.quantity, 0);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    sumCartTotal,
    sumTotalQuantity,
    toggleCart,
    isCartOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
