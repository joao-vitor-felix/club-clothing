import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4rem;
  height: 100%;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Icon = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.text.secondary};
  &:hover {
    cursor: pointer;
  }
`;
