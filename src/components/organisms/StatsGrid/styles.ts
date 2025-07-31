import styled from "styled-components";
import { spacing, borderRadius, fontSize, transitions } from "@/assets/styles";

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
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: all ${transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
    border-color: ${({ theme }) => theme.colors.primary.light};
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
    const { theme } = props;
    switch (props.$color) {
      case "blue":
        return theme.colors.primary.main;
      case "yellow":
        return theme.colors.status.warning;
      case "orange":
        return theme.colors.status.orange;
      case "purple":
        return theme.colors.status.purple;
      default:
        return theme.colors.secondary.main;
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
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    font-weight: 500;
  }
`;

export const StatCount = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const StatArrow = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.lg};
  font-weight: bold;
`;
