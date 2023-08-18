import styled from "styled-components";
import { Button } from "../Button/Button.styles";

type ProductImageProps = {
  imageUrl: string;
};

export const CartButton = styled(Button)`
  width: 80%;
  visibility: hidden;
  opacity: 0;
  margin: 0 auto;
  margin-top: 32rem;
`;

export const Image = styled.div<ProductImageProps>`
  background-image: ${props => `url('${props.imageUrl}')`};
  height: 38rem;
  width: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    ${CartButton} {
      visibility: visible;
      opacity: 1;
    }

    ${Image} {
      background-color: grey;
      background-blend-mode: multiply;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
