import { InputHTMLAttributes, FC, forwardRef } from "react";
import * as S from "./Input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const Input: FC<InputProps> = forwardRef((props, ref) => {
  return <S.Container {...props} ref={ref as any}></S.Container>;
});

Input.displayName = "Input";

export default Input;
