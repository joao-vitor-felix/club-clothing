import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4rem 2rem 4rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  p {
    font-size: 2.1rem;
    font-weight: 500;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  margin-top: 0.5rem;
  grid-row-gap: 2rem;
`;

export const Icon = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.text.secondary};
  &:hover {
    cursor: pointer;
  }
`;
