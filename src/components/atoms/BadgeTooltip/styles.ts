import { styled } from "styled-components";

import { borderRadius, colors, fontSize, mediaQueries } from "@/assets/styles";

export const Badge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${borderRadius.full};
  background: ${colors.secondary.main};
  border: 1px solid ${colors.border.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  p {
    margin: 0;
    font-size: ${fontSize.xs};
  }

  /* Para celulares pequenos */
  ${mediaQueries.down.sm} {
    width: 28px;
    height: 28px;
  }
`;

export const TooltipContent = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
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
    border-top: 6px solid #1c2128;
  }

  /* Para celulares pequenos */
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
