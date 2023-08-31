import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useUserReducer = () => {
  const reducer = useSelector(({ user }: RootState) => user);

  return reducer;
};
