import styled, { css } from "styled-components";
import { TooltipContentProps, TooltipArrowProps } from "./types";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const getTooltipPosition = (position: string) => {
  switch (position) {
    case "top":
      return css`
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      `;
    case "bottom":
      return css`
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      `;
    case "left":
      return css`
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      `;
    case "right":
      return css`
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      `;
    default:
      return css`
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  background: #1c2128;
  color: #f0f6fc;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border: 1px solid #30363d;

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
        border-top: 6px solid #1c2128;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      `;
    case "bottom":
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 6px solid #1c2128;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      `;
    case "left":
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left: 6px solid #1c2128;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
      `;
    case "right":
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: 6px solid #1c2128;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
      `;
    default:
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 6px solid #1c2128;
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
