import styled, { css } from "styled-components";
import { colors, fontSize } from "../../../assets/styles";

interface StyledTextProps {
  $variant: "body" | "caption" | "subtitle";
  $color: "primary" | "secondary" | "muted";
  $weight: "normal" | "medium" | "bold";
  $align: "left" | "center" | "right";
}

const variantStyles = {
  body: css`
    font-size: ${fontSize.md};
    line-height: 1.5;
  `,
  caption: css`
    font-size: ${fontSize.sm};
    line-height: 1.4;
  `,
  subtitle: css`
    font-size: ${fontSize.lg};
    line-height: 1.6;
  `,
};

const colorStyles = {
  primary: css`
    color: ${colors.text.primary};
  `,
  secondary: css`
    color: ${colors.text.secondary};
  `,
  muted: css`
    color: ${colors.text.disabled};
  `,
};

const weightStyles = {
  normal: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const alignStyles = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};

export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-family: inherit;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $color }) => colorStyles[$color]}
  ${({ $weight }) => weightStyles[$weight]}
  ${({ $align }) => alignStyles[$align]}
`;
