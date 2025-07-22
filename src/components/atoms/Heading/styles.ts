import styled, { css } from "styled-components";

interface StyledHeadingProps {
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  $color: "primary" | "secondary" | "accent";
  $weight: "normal" | "medium" | "bold";
  $align: "left" | "center" | "right";
}

const levelStyles = {
  1: css`
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  `,
  2: css`
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 1.25rem;
  `,
  3: css`
    font-size: 1.75rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  `,
  4: css`
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 0.875rem;
  `,
  5: css`
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  `,
  6: css`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  `,
};

const colorStyles = {
  primary: css`
    color: #333;
  `,
  secondary: css`
    color: #666;
  `,
  accent: css`
    color: #007bff;
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
