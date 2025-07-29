import styled from "styled-components";

import {
  colors,
  spacing,
  borderRadius,
  transitions,
  zIndex,
} from "@/assets/styles";

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  background: ${colors.background.secondary};
  backdrop-filter: blur(12px);
  border-right: 1px solid ${colors.border.primary};
  border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
  padding: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: ${transitions.normal};
  z-index: ${zIndex.dropdown};
  overflow-y: auto;

  /* Tablet */
  @media (min-width: 768px) {
    width: 320px;
    padding: ${spacing.xl};
    padding-top: 0;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    width: 300px;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  }

  /* Desktop large */
  @media (min-width: 1280px) {
    width: 380px;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg};
`;

export const MobileMenuTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.text.secondary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${spacing.xs};
  border-radius: ${borderRadius.sm};
  transition: ${transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    color: ${colors.text.primary};
    background: ${colors.background.secondary};
  }
`;

export const MobileMenuContent = styled.div`
  padding: ${spacing.xl} ${spacing.lg};
  height: calc(100vh - 80px);
  overflow-y: auto;
`;

export const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: ${transitions.normal};
  z-index: ${zIndex.dropdown - 1};
`;

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
`;

export const MobileNavLink = styled.a`
  color: ${colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  transition: ${transitions.normal};
  text-align: center;

  &:hover {
    color: ${colors.primary.light};
    background: rgba(88, 166, 255, 0.1);
  }
`;

export const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.border.primary};
`;

export const MobileLoginButton = styled.button`
  background: transparent;
  border: 1px solid ${colors.border.primary};
  color: ${colors.text.primary};
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    border-color: ${colors.primary.light};
    color: ${colors.primary.light};
  }
`;

export const MobileSignUpButton = styled.button`
  background: ${colors.status.success};
  border: 1px solid ${colors.status.success};
  color: ${colors.neutral.white};
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};

  &:hover {
    background: #2ea043;
    border-color: #2ea043;
  }
`;
