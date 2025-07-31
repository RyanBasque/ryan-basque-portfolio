import styled from "styled-components";

import {
  borderRadius,
  fontSize,
  mediaQueries,
  spacing,
  shadows,
  zIndex,
} from "@/assets/styles";

export const Badge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.full};
  background: ${({ theme }) => theme.colors.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${shadows.md};
  }

  p {
    margin: 0;
    font-size: ${fontSize.xs};
  }

  ${mediaQueries.down.sm} {
    width: 28px;
    height: 28px;
  }
`;

export const TooltipContent = styled.div`
  position: absolute;
  bottom: calc(100% + ${spacing.sm});
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  font-size: ${fontSize.xs};
  font-weight: 500;
  white-space: nowrap;
  z-index: ${zIndex.tooltip};
  box-shadow: ${shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.background.tertiary};
  }

  ${mediaQueries.down.sm} {
    font-size: 11px;
    padding: 6px 10px;
    bottom: calc(100% + 10px);
  }
`;

export const BadgeImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  pointer-events: none;

  ${mediaQueries.down.sm} {
    width: 16px;
    height: 16px;
  }
`;
