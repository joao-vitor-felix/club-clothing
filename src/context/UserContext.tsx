import { PropsWithChildren, createContext, useState } from "react";
import User from "../types/user.types";

type ContextType = {
  currentUser: User | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
};

export const UserContext = createContext<ContextType>({
  currentUser: null,
  loginUser: () => null,
  logoutUser: () => null
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loginUser,
    logoutUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
