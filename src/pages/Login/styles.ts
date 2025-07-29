import styled, { keyframes } from "styled-components";
import {
  colors,
  mediaQueries,
  spacing,
  borderRadius,
  shadows,
  fontSize,
  transitions,
} from "@/assets/styles";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

export const LoginContainer = styled.div`
  min-height: calc(100vh - 300px);
  color: ${colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.md};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        ${colors.primary.main}15 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        ${colors.secondary.main}20 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.md};
  }
`;

export const LoginCard = styled.div`
  background: ${colors.background.paper};
  backdrop-filter: blur(10px);
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xxxl};
  box-shadow: ${shadows.xl}, 0 0 0 1px ${colors.border.primary},
    0 0 50px ${colors.primary.main}10;
  border: 1px solid ${colors.border.primary};
  width: 100%;
  max-width: 480px;
  position: relative;
  overflow: hidden;
  transition: all ${transitions.normal};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${colors.primary.main},
      ${colors.primary.light},
      ${colors.secondary.main}
    );
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xxl};
    max-width: 400px;
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.xl};
    max-width: 320px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxl};

  h2 {
    margin-bottom: ${spacing.sm};
    background: linear-gradient(
      135deg,
      ${colors.primary.light},
      ${colors.primary.main}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const GitHubSection = styled.div`
  margin-bottom: ${spacing.lg};
`;

export const GoogleSection = styled.div`
  margin-bottom: ${spacing.xl};
`;

export const GitHubButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  padding: ${spacing.lg} ${spacing.xl};
  background: linear-gradient(
    135deg,
    ${colors.neutral.black},
    ${colors.neutral.gray[900]}
  );
  border: 2px solid ${colors.border.primary};
  border-radius: ${borderRadius.md};
  color: ${colors.text.primary};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.fast};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.neutral.gray[800]}30,
      transparent
    );
    transition: left ${transitions.normal};
  }

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${colors.neutral.gray[900]},
      ${colors.neutral.gray[800]}
    );
    /* border-color: ${colors.border.focus}; */
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.neutral.black}50;

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    animation: ${pulse} 2s infinite;

    &::before {
      display: none;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    z-index: 1;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  padding: ${spacing.lg} ${spacing.xl};
  background: linear-gradient(
    135deg,
    ${colors.background.paper},
    ${colors.background.tertiary}
  );
  border: 2px solid ${colors.border.primary};
  border-radius: ${borderRadius.md};
  color: ${colors.text.primary};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.fast};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.main}20,
      transparent
    );
    transition: left ${transitions.normal};
  }

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${colors.background.secondary},
      ${colors.background.paper}
    );
    border-color: ${colors.border.focus};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.primary.main}20;

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    animation: ${pulse} 2s infinite;

    &::before {
      display: none;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    z-index: 1;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${spacing.xl} 0;
  position: relative;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.border.primary},
      transparent
    );
  }

  span {
    padding: 0 ${spacing.lg};
    color: ${colors.text.secondary};
    font-size: ${fontSize.sm};
    font-weight: 500;
    background: ${colors.background.paper};
    border-radius: ${borderRadius.sm};
    border: 1px solid ${colors.border.primary};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: linear-gradient(
        135deg,
        ${colors.primary.main}30,
        ${colors.secondary.main}20
      );
      border-radius: ${borderRadius.sm};
      z-index: -1;
    }
  }
`;

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: ${spacing.xl};
  padding-top: ${spacing.lg};
  position: relative;
`;

export const LinkText = styled.span`
  color: ${colors.text.secondary};
  font-size: ${fontSize.sm};

  a {
    color: ${colors.primary.light};
    text-decoration: none;
    font-weight: 600;
    transition: all ${transitions.fast};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${colors.primary.main},
        ${colors.primary.light}
      );
      transition: width ${transitions.fast};
    }

    &:hover {
      color: ${colors.primary.main};
      text-decoration: none;

      &::after {
        width: 100%;
      }
    }
  }
`;
