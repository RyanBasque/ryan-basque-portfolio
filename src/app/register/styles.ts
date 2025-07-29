import styled from "styled-components";
import {
  colors,
  mediaQueries,
  spacing,
  borderRadius,
  shadows,
  fontSize,
  transitions,
} from "@/assets/styles";

export const RegisterContainer = styled.div`
  min-height: calc(100vh - 120px);
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xl};

  ${mediaQueries.down.md} {
    padding: ${spacing.md};
  }
`;

export const RegisterCard = styled.div`
  background: ${colors.background.paper};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.xxxl};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.border.primary};
  width: 100%;
  max-width: 480px;

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
`;

export const GitHubSection = styled.div`
  margin-bottom: ${spacing.xl};
`;

export const GitHubButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  padding: ${spacing.lg} ${spacing.xl};
  background: ${colors.neutral.black};
  border: 2px solid ${colors.border.primary};
  border-radius: ${borderRadius.md};
  color: ${colors.text.primary};
  font-size: ${fontSize.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.neutral.gray[900]};
    border-color: ${colors.border.focus};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${spacing.xl} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${colors.border.primary};
  }

  span {
    padding: 0 ${spacing.md};
    color: ${colors.text.secondary};
    font-size: ${fontSize.sm};
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};

  ${mediaQueries.up.md} {
    flex-direction: row;

    > * {
      flex: 1;
    }
  }
`;

export const SubmitButton = styled.div`
  margin-top: ${spacing.lg};
`;

export const LoginLink = styled.div`
  text-align: center;
  margin-top: ${spacing.xl};
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.border.primary};
`;

export const LinkText = styled.span`
  color: ${colors.text.secondary};
  font-size: ${fontSize.sm};

  a {
    color: ${colors.primary.light};
    text-decoration: none;
    font-weight: 500;
    transition: color ${transitions.fast};

    &:hover {
      color: ${colors.primary.main};
      text-decoration: underline;
    }
  }
`;

export const TermsText = styled.div`
  font-size: ${fontSize.sm};
  color: ${colors.text.secondary};
  text-align: center;
  margin-top: ${spacing.md};
  line-height: 1.5;

  a {
    color: ${colors.primary.light};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
