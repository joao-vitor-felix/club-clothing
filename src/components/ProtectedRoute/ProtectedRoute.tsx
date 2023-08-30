import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import useUserContext from "../../hooks/useUserContext";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentUser !== null) {
      setIsLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (currentUser === null) {
    toast.warn("Você precisa entrar para realizar uma compra.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  return currentUser ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
