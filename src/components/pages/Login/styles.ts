import styled, { keyframes } from "styled-components";
import {
  mediaQueries,
  spacing,
  borderRadius,
  shadows,
  fontSize,
  transitions,
  gradients,
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
  color: ${({ theme }) => theme.colors.text.primary};
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
        ${({ theme }) => theme.colors.primary.main}15 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        ${({ theme }) => theme.colors.secondary.main}20 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.md};
  }
`;

export const LoginCard = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.colors.background.secondary}F2;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.xxl};
  padding: ${spacing.xxxl};
  width: 100%;
  max-width: 480px;
  box-shadow: ${shadows.xl};

  ${mediaQueries.down.md} {
    padding: ${spacing.xl};
    max-width: 400px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: ${spacing.xxxl};

  ${mediaQueries.down.md} {
    margin-bottom: ${spacing.xl};
  }
`;

export const LoginMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  margin-bottom: ${spacing.xl};
`;

export const LoginButton = styled.button<{
  $variant: "github" | "google";
  $loading?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  width: 100%;
  padding: ${spacing.lg} ${spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  background: ${({ $variant }) =>
    $variant === "github" ? gradients.github : gradients.google};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  transition: all ${transitions.normal};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: ${({ $loading }) => ($loading ? "none" : "translateY(-2px)")};
    box-shadow: ${({ $loading }) =>
      $loading ? "none" : `0 8px 32px rgba(0, 0, 0, 0.3)`};
    border-color: ${({ $variant }) =>
      $variant === "github"
        ? "#6e7681" // colors.social.github.border
        : "#4285f4"}; // colors.social.google.primary
  }

  &:active {
    transform: ${({ $loading }) => ($loading ? "none" : "translateY(0)")};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${gradients.shimmer};
    transition: left 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  ${({ $loading }) =>
    $loading &&
    `
    opacity: 0.7;
    
    svg {
      animation: ${pulse} 1.5s ease-in-out infinite;
    }
  `}

  ${mediaQueries.down.md} {
    padding: ${spacing.md} ${spacing.lg};
  }
`;

export const LoginButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LoginButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${spacing.xl} 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border.primary};
  }

  &::before {
    margin-right: ${spacing.md};
  }

  &::after {
    margin-left: ${spacing.md};
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    flex-shrink: 0;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: ${spacing.xxxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};

  ${mediaQueries.down.md} {
    margin-top: ${spacing.xl};
  }
`;

export const ErrorMessage = styled.div`
  background: ${({ theme }) => theme.colors.status.error}1A;
  border: 1px solid ${({ theme }) => theme.colors.status.error};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  margin-bottom: ${spacing.lg};
  color: ${({ theme }) => theme.colors.status.error};
  font-size: ${fontSize.sm};
  text-align: center;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background.primary}CC;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.xxl};
  z-index: 10;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.border.primary};
  border-top: 3px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const GitHubSection = styled.div`
  margin-bottom: ${spacing.lg};
`;

export const GitHubButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  width: 100%;
  padding: ${spacing.lg} ${spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  background: ${gradients.github};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all ${transitions.normal};
  position: relative;
  overflow: hidden;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : `0 8px 32px rgba(0, 0, 0, 0.3)`};
    border-color: ${({ theme }) => theme.colors.social.github.border};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(0)")};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.7;
  `}

  ${mediaQueries.down.md} {
    padding: ${spacing.md} ${spacing.lg};
  }
`;

export const GoogleSection = styled.div`
  margin-bottom: ${spacing.lg};
`;

export const GoogleButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  width: 100%;
  padding: ${spacing.lg} ${spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  background: ${gradients.google};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all ${transitions.normal};
  position: relative;
  overflow: hidden;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : `0 8px 32px rgba(0, 0, 0, 0.3)`};
    border-color: ${({ theme }) => theme.colors.social.google.primary};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(0)")};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.7;
  `}

  ${mediaQueries.down.md} {
    padding: ${spacing.md} ${spacing.lg};
  }
`;
