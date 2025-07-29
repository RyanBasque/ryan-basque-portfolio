import styled from "styled-components";
import { colors, spacing, borderRadius, fontSize, mediaQueries, transitions, zIndex } from "@/assets/styles";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: ${zIndex.sticky};
  background: rgba(${colors.background.primary.replace('#', '')}, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${colors.border.primary};
  padding: ${spacing.md} 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries.down.md} {
    padding: 0 ${spacing.md};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: ${colors.text.primary};
  font-size: ${fontSize.xxxl};
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    color: ${colors.primary.light};
  }

  ${mediaQueries.down.md} {
    font-size: ${fontSize.xl};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${spacing.xl};

  ${mediaQueries.down.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  transition: ${transitions.normal};

  &:hover {
    color: ${colors.primary.light};
    background: rgba(88, 166, 255, 0.1);
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: ${spacing.md};
  align-items: center;

  ${mediaQueries.down.md} {
    gap: ${spacing.sm};
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 1px solid ${colors.border.primary};
  color: ${colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    border-color: ${colors.primary.light};
    color: ${colors.primary.light};
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.sm} ${spacing.sm};
    font-size: ${fontSize.sm};
  }
`;

export const SignUpButton = styled.button`
  background: ${colors.status.success};
  border: 1px solid ${colors.status.success};
  color: ${colors.neutral.white};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    background: #2ea043;
    border-color: #2ea043;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.sm} ${spacing.sm};
    font-size: ${fontSize.sm};
  }
`;
