import styled from "styled-components";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  transitions,
} from "@/assets/styles";

interface StatItemProps {
  $color?: string;
}

interface StatIconProps {
  $color?: string;
}

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  flex: 1;
`;

export const StatItem = styled.div<StatItemProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.md};
  background: ${colors.background.primary};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.lg};
  color: ${colors.text.primary};
  cursor: pointer;
  transition: all ${transitions.normal};

  &:hover {
    background: ${colors.background.secondary};
    border-color: ${colors.primary.light};
  }
`;

export const StatIcon = styled.div<StatIconProps>`
  width: 32px;
  height: 32px;
  border-radius: ${borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.xl};
  background: ${(props) => {
    switch (props.$color) {
      case "blue":
        return colors.primary.main;
      case "yellow":
        return colors.status.warning;
      case "orange":
        return colors.status.orange;
      case "purple":
        return colors.status.purple;
      default:
        return colors.secondary.main;
    }
  }};
`;

export const StatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const StatLabel = styled.div`
  p {
    color: ${colors.text.primary};
    margin: 0;
    font-weight: 500;
  }
`;

export const StatCount = styled.div`
  p {
    color: ${colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const StatArrow = styled.div`
  color: ${colors.text.secondary};
  font-size: ${fontSize.lg};
  font-weight: bold;
`;
