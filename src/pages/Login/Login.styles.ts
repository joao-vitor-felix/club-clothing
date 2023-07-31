import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Headline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  p:nth-child(1) {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;
