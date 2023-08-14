import styled from "styled-components";

type ProductImageProps = {
  imageUrl: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Image = styled.div<ProductImageProps>`
  background-image: ${props => `url('${props.imageUrl}')`};
  height: 38rem;
  width: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;
