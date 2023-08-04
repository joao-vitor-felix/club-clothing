import { FC, ReactNode, ComponentPropsWithoutRef } from "react";
import * as S from "./Button.styles";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  icon?: ReactNode;
};

const Button: FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <S.Button {...rest}>
      {icon && <S.Icon>{icon}</S.Icon>}
      {children}
    </S.Button>
  );
};

export default Button;
