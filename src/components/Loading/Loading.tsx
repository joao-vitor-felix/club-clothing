import { PulseLoader } from "react-spinners";
import * as S from "./Loading.styles";

const Loading = () => {
  return (
    <S.Wrapper>
      <PulseLoader color="#000" size={20} />
    </S.Wrapper>
  );
};

export default Loading;
