import { FC, forwardRef, InputHTMLAttributes } from "react";
import * as S from "./Input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  $hasError?: boolean;
};

const Input: FC<InputProps> = forwardRef((props, ref) => {
  return <S.Input {...props} ref={ref as any}></S.Input>;
});

Input.displayName = "Input";

export default Input;
