import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useUserReducer = () => {
  const reducer = useSelector(({ userReducer }: RootState) => userReducer);

  return reducer;
};
