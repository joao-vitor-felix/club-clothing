import { InputHTMLAttributes, FC } from "react";
import * as S from "./Input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const Input: FC<InputProps> = ({ hasError, ...rest }) => {
  return <S.Container hasError={hasError} {...rest}></S.Container>;
};

export default Input;
