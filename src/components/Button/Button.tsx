import { FC, ReactNode, ComponentPropsWithoutRef } from "react";
import * as S from "./Button.styles";
import { PulseLoader } from "react-spinners";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  icon?: ReactNode;
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({ children, icon, isLoading, ...rest }) => {
  return (
    <S.Button {...rest}>
      {isLoading && <PulseLoader color="#ffffff" size={15} />}
      {icon && !isLoading && <S.Icon>{icon}</S.Icon>}
      {!isLoading && children}
    </S.Button>
  );
};

export default Button;
