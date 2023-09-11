import styled from "styled-components";
import * as S from "../Cart/components/CartItem/CartItem.styles";

export const Container = styled(S.Container)``;
export const Name = styled(S.Name)``;
export const Image = styled(S.Image)`
  width: 20rem;

  @media screen and (max-width: 800px) {
    width: 12rem;
  }

  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 15rem;
  }
`;
export const Text = styled(S.Text)``;
export const Info = styled(S.Info)`
  width: 100%;
`;
export const PriceContainer = styled(S.PriceContainer)``;
export const ButtonContainer = styled(S.ButtonContainer)``;
export const Increase = styled(S.Increase)``;
export const Decrease = styled(S.Decrease)``;
export const Remove = styled(S.Remove)``;
