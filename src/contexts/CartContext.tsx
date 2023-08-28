import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState
} from "react";
import Cart from "../types/cart.type";
import Product from "../types/product.types";

type CartContextType = {
  cart: Cart[];
  sumCartTotal: number;
  sumTotalQuantity: number;
  isCartOpen: boolean;
  addToCart: (product: Product, cart: Cart[]) => void;
  removeFromCart: (product: Product, cart: Cart[]) => void;
  clearFromCart: (product: Cart, cart: Cart[]) => void;
  clearCart: () => void;
  toggleCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  sumCartTotal: 0,
  sumTotalQuantity: 0,
  isCartOpen: false,
  clearCart: () => null,
  addToCart: () => null,
  removeFromCart: () => null,
  clearFromCart: () => null,
  toggleCart: () => null
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

  const clearCart = () => setCart([]);

  const sumCartTotal = useMemo(() => {
    return cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  }, [cart]);

  const sumTotalQuantity = useMemo(() => {
    return cart.reduce((acc, current) => acc + current.quantity, 0);
  }, [cart]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearFromCart,
    clearCart,
    sumCartTotal,
    sumTotalQuantity,
    toggleCart,
    isCartOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
