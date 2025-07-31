import styled from "styled-components";

import {
  spacing,
  borderRadius,
  fontSize,
  mediaQueries,
  transitions,
  zIndex,
} from "@/assets/styles";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: ${zIndex.sticky};
  background: ${({ theme }) => theme.colors.background.primaryOpacity};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
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
  gap: ${spacing.md};
`;

export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.xxxl};
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
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
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  transition: ${transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
    background: ${({ theme }) => theme.colors.primary.main}1A;
  }
`;

export const AuthButtons = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  gap: ${spacing.md};
  align-items: center;
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "1")};
  visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? "hidden" : "visible")};
  transition: ${transitions.normal};

  ${mediaQueries.down.md} {
    gap: ${spacing.sm};
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.light};
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.sm} ${spacing.sm};
    font-size: ${fontSize.sm};
  }
`;

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.sm};
  transition: ${transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main}1A;
  }
`;

export const HamburgerLine = styled.span<{ $isOpen: boolean; $index: number }>`
  display: block;
  height: 2px;
  width: 18px;
  background: ${({ theme }) => theme.colors.text.primary};
  transition: ${transitions.normal};
  transform-origin: center;

  ${({ $isOpen, $index }) => {
    if (!$isOpen) return "";

    if ($index === 0) {
      return `
        transform: translateY(6px) rotate(45deg);
      `;
    }

    if ($index === 1) {
      return `
        opacity: 0;
      `;
    }

    if ($index === 2) {
      return `
        transform: translateY(-6px) rotate(-45deg);
      `;
    }
  }}
`;

export const UserInfo = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  opacity: 1;
  visibility: visible;
  transition: ${transitions.normal};

  ${mediaQueries.down.md} {
    display: none;
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${borderRadius.full};
  background: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 600;
  font-size: ${fontSize.sm};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.down.md} {
    display: none;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: ${fontSize.sm};
  line-height: 1.2;
`;

export const UserEmail = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.xs};
  line-height: 1.2;
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  transition: ${transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${spacing.sm};

  &:hover {
    border-color: ${({ theme }) => theme.colors.status.error};
    color: ${({ theme }) => theme.colors.status.error};
    background: ${({ theme }) => theme.colors.status.error}1A;
  }

  span {
    transform: rotate(90deg);
    font-size: ${fontSize.sm};
  }

  ${mediaQueries.down.md} {
    margin-left: ${spacing.xs};
    padding: ${spacing.xs};
  }
`;

export const FexContainer = styled.div`
  display: flex;

  gap: ${spacing.md};
`;

export const AccountAndTheameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
`;
