import styled from "styled-components";
import {
  colors,
  borderRadius,
  spacing,
  shadows,
  transitions,
} from "../../../assets/styles";

export const CardContainer = styled.div`
  background: ${colors.background.paper};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.border.primary};
  transition: box-shadow ${transitions.normal};

  &:hover {
    box-shadow: ${shadows.lg};
  }
`;

export const CardContent = styled.div`
  margin-bottom: ${spacing.md};
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${spacing.sm};
`;
