import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useCartReducer = () => {
  const reducer = useSelector(({ cartReducer }: RootState) => cartReducer);

  return reducer;
};
