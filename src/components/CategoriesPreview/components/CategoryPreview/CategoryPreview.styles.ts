import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
`;

export const Title = styled(Link)`
  width: max-content;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    /* gap: 3rem; */
    /* justify-content: center; */
  }
`;
