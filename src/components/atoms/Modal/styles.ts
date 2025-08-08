import styled, { css } from "styled-components";
import {
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  fontSize,
  mediaQueries,
} from "@/assets/styles";

import { StyledModalProps, ModalBackdropProps } from "./types";

export const ModalBackdrop = styled.div<ModalBackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.neutral.black}80;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndex.modalBackdrop};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all ${transitions.normal};
  padding: ${spacing.lg};

  ${mediaQueries.down.md} {
    padding: ${spacing.md};
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.sm};
  }
`;

const sizeStyles = {
  small: css`
    max-width: 400px;
    width: 90%;
  `,
  medium: css`
    max-width: 600px;
    width: 90%;
  `,
  large: css`
    max-width: 800px;
    width: 95%;
  `,
  fullscreen: css`
    max-width: 95vw;
    max-height: 95vh;
    width: 95%;
    height: 95%;
  `,
};

export const ModalContainer = styled.div<StyledModalProps>`
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  transform: ${({ $isOpen }) =>
    $isOpen ? "scale(1) translateY(0)" : "scale(0.9) translateY(-20px)"};
  transition: transform ${transitions.normal}, opacity ${transitions.normal};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};

  ${({ $size }) => sizeStyles[$size]}

  ${mediaQueries.down.md} {
    max-height: 95vh;
    border-radius: ${borderRadius.lg};
  }

  ${mediaQueries.down.sm} {
    max-height: 98vh;
    border-radius: ${borderRadius.md};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${borderRadius.xl} ${borderRadius.xl} 0 0;

  ${mediaQueries.down.md} {
    padding: ${spacing.lg};
    border-radius: ${borderRadius.lg} ${borderRadius.lg} 0 0;
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.md};
    border-radius: ${borderRadius.md} ${borderRadius.md} 0 0;
  }
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.xl};
  font-weight: 600;
  margin: 0;
  line-height: 1.3;

  ${mediaQueries.down.md} {
    font-size: ${fontSize.lg};
  }

  ${mediaQueries.down.sm} {
    font-size: ${fontSize.md};
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.md};
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: ${spacing.xl};
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.text.primary};

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${borderRadius.sm};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.primary};
    border-radius: ${borderRadius.sm};

    &:hover {
      background: ${({ theme }) => theme.colors.border.focus};
    }
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.lg};
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.md};
  }
`;

export const ModalFooter = styled.div`
  padding: ${spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 0 0 ${borderRadius.xl} ${borderRadius.xl};
  display: flex;
  gap: ${spacing.md};
  justify-content: flex-end;
  align-items: center;

  ${mediaQueries.down.md} {
    padding: ${spacing.lg};
    border-radius: 0 0 ${borderRadius.lg} ${borderRadius.lg};
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.md};
    border-radius: 0 0 ${borderRadius.md} ${borderRadius.md};
    flex-direction: column;
    align-items: stretch;

    /* Stack buttons vertically on mobile */
    > * {
      width: 100%;
    }
  }
`;

/* Animation keyframes for entry and exit */
export const ModalAnimationWrapper = styled.div`
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes modalFadeOut {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
  }
`;
