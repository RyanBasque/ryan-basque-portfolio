import styled, { css } from "styled-components";

import {
  borderRadius,
  spacing,
  fontSize,
  transitions,
} from "@/assets/styles/theme";

import { StyledInputProps } from "./types";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${spacing.md} ${spacing.lg};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.md};
  transition: border-color ${transitions.fast},
    background-color ${transitions.fast};
  width: 100%;
  box-sizing: border-box;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.focus};
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.background.primary};
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.status.error};

      &:focus {
        border-color: ${({ theme }) => theme.colors.status.error};
      }
    `}
`;

export const ErrorMessage = styled.span`
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: ${spacing.xs};
`;
