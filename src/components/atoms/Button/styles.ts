import styled, { css } from "styled-components";
import {
  colors,
  buttonSizes,
  mediaQueries,
  shadows,
  transitions,
} from "../../../assets/styles";

interface StyledButtonProps {
  $variant: "primary" | "secondary" | "outline";
  $size:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "responsive";
}

const variantStyles = {
  primary: css`
    background-color: ${colors.primary.main};
    color: ${colors.text.primary};
    border: 2px solid ${colors.primary.main};

    &:hover:not(:disabled) {
      background-color: ${colors.primary.hover};
      border-color: ${colors.primary.hover};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.main};
    color: ${colors.text.primary};
    border: 2px solid ${colors.border.primary};

    &:hover:not(:disabled) {
      background-color: ${colors.secondary.hover};
      border-color: ${colors.secondary.light};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${colors.primary.light};
    border: 2px solid ${colors.border.primary};

    &:hover:not(:disabled) {
      background-color: ${colors.primary.main};
      color: ${colors.text.primary};
      border-color: ${colors.primary.main};
    }
  `,
};

const sizeStyles = {
  xsmall: css`
    padding: ${buttonSizes.xsmall.padding};
    font-size: ${buttonSizes.xsmall.fontSize};
    border-radius: ${buttonSizes.xsmall.borderRadius};
  `,
  small: css`
    padding: ${buttonSizes.small.padding};
    font-size: ${buttonSizes.small.fontSize};
    border-radius: ${buttonSizes.small.borderRadius};
  `,
  medium: css`
    padding: ${buttonSizes.medium.padding};
    font-size: ${buttonSizes.medium.fontSize};
    border-radius: ${buttonSizes.medium.borderRadius};
  `,
  large: css`
    padding: ${buttonSizes.large.padding};
    font-size: ${buttonSizes.large.fontSize};
    border-radius: ${buttonSizes.large.borderRadius};
  `,
  xlarge: css`
    padding: ${buttonSizes.xlarge.padding};
    font-size: ${buttonSizes.xlarge.fontSize};
    border-radius: ${buttonSizes.xlarge.borderRadius};
  `,
  xxlarge: css`
    padding: ${buttonSizes.xxlarge.padding};
    font-size: ${buttonSizes.xxlarge.fontSize};
    border-radius: ${buttonSizes.xxlarge.borderRadius};
  `,
  responsive: css`
    padding: ${buttonSizes.small.padding};
    font-size: ${buttonSizes.small.fontSize};
    border-radius: ${buttonSizes.small.borderRadius};

    ${mediaQueries.up.md} {
      padding: ${buttonSizes.medium.padding};
      font-size: ${buttonSizes.medium.fontSize};
      border-radius: ${buttonSizes.medium.borderRadius};
    }

    ${mediaQueries.up.lg} {
      padding: ${buttonSizes.large.padding};
      font-size: ${buttonSizes.large.fontSize};
      border-radius: ${buttonSizes.large.borderRadius};
    }

    ${mediaQueries.up.xl} {
      padding: ${buttonSizes.xlarge.padding};
      font-size: ${buttonSizes.xlarge.fontSize};
      border-radius: ${buttonSizes.xlarge.borderRadius};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: inherit;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all ${transitions.fast};

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
  
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0;
    box-shadow: ${shadows.focus};
  }
`;
