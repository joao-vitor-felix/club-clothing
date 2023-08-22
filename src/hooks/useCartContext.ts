import { CartContext } from "./../contexts/CartContext";
import { useContext } from "react";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }
  return context;
};

export default useCartContext;
