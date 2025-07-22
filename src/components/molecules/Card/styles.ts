import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.div`
  margin-bottom: 1rem;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
`;
