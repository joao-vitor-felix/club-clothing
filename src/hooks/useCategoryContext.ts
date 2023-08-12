import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }
  return context;
};

export default useCategoryContext;
