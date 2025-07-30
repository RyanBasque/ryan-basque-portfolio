import styled, { css } from "styled-components";

import { colors, fontSize, spacing } from "@/assets/styles/theme";

interface StyledHeadingProps {
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  $color: "primary" | "secondary" | "accent";
  $weight: "normal" | "medium" | "bold";
  $align: "left" | "center" | "right";
}

const levelStyles = {
  1: css`
    font-size: ${fontSize["5xl"]};
    line-height: 1.2;
    margin-bottom: ${spacing.lg};
  `,
  2: css`
    font-size: ${fontSize["4xl"]};
    line-height: 1.3;
    margin-bottom: ${spacing.xl};
  `,
  3: css`
    font-size: ${fontSize.xxxl};
    line-height: 1.4;
    margin-bottom: ${spacing.md};
  `,
  4: css`
    font-size: ${fontSize.xxl};
    line-height: 1.4;
    margin-bottom: ${spacing.lg};
  `,
  5: css`
    font-size: ${fontSize.xl};
    line-height: 1.5;
    margin-bottom: ${spacing.lg};
  `,
  6: css`
    font-size: ${fontSize.md};
    line-height: 1.5;
    margin-bottom: ${spacing.sm};
  `,
};

const colorStyles = {
  primary: css`
    color: ${colors.text.primary};
  `,
  secondary: css`
    color: ${colors.text.secondary};
  `,
  accent: css`
    color: ${colors.primary.light};
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

export const StyledHeading = styled.h1<StyledHeadingProps>`
  margin: 0;
  font-family: inherit;

  ${({ $level }) => levelStyles[$level]}
  ${({ $color }) => colorStyles[$color]}
  ${({ $weight }) => weightStyles[$weight]}
  ${({ $align }) => alignStyles[$align]}
`;
