import styled, { css } from "styled-components";
import { colors, spacing, borderRadius, shadows, zIndex } from "@/assets/styles";
import { TooltipContentProps, TooltipArrowProps } from "./types";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const getTooltipPosition = (position: string) => {
  switch (position) {
    case "top":
      return css`
        bottom: calc(100% + ${spacing.sm});
        left: 50%;
        transform: translateX(-50%);
      `;
    case "bottom":
      return css`
        top: calc(100% + ${spacing.sm});
        left: 50%;
        transform: translateX(-50%);
      `;
    case "left":
      return css`
        right: calc(100% + ${spacing.sm});
        top: 50%;
        transform: translateY(-50%);
      `;
    case "right":
      return css`
        left: calc(100% + ${spacing.sm});
        top: 50%;
        transform: translateY(-50%);
      `;
    default:
      return css`
        bottom: calc(100% + ${spacing.sm});
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  background: ${colors.background.tertiary};
  color: ${colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: ${zIndex.tooltip};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.border.primary};

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;

  ${(props) => getTooltipPosition(props.position)}
`;

const getArrowPosition = (position: string) => {
  switch (position) {
    case "top":
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 6px solid ${colors.background.tertiary};
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      `;
    case "bottom":
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 6px solid ${colors.background.tertiary};
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      `;
    case "left":
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left: 6px solid ${colors.background.tertiary};
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
      `;
    case "right":
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: 6px solid ${colors.background.tertiary};
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
      `;
    default:
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 6px solid ${colors.background.tertiary};
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      `;
  }
};

export const TooltipArrow = styled.div<TooltipArrowProps>`
  position: absolute;
  width: 0;
  height: 0;

  ${(props) => getArrowPosition(props.position)}
`;
