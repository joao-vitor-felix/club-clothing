import { PropsWithChildren, createContext, useEffect, useState } from "react";
import Cart from "../types/cart.type";
import Product from "../types/product.types";

type CartContextType = {
  cart: Cart[];
  addToCart: (product: Product, cart: Cart[]) => void;
  removeFromCart: (product: Product, cart: Cart[]) => void;
  clearFromCart: (product: Cart, cart: Cart[]) => void;
  sumCartTotal: () => number;
  sumTotalQuantity: () => number;
  toggleCart: () => void;
  isCartOpen: boolean;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearFromCart: () => null,
  sumCartTotal: () => 0,
  sumTotalQuantity: () => 0,
  toggleCart: () => null,
  isCartOpen: false
});

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart) as Cart[]);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, 0);
  }, [cart]);

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
    const productQuantity = isOnCart && isOnCart?.quantity === 1;

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

  const clearFromCart = (product: Cart, cart: Cart[]) =>
    setCart(cart.filter(item => item.id !== product.id));

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
    clearFromCart,
    sumCartTotal,
    sumTotalQuantity,
    toggleCart,
    isCartOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
