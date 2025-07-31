import styled from "styled-components";

import {
  spacing,
  borderRadius,
  transitions,
  zIndex,
  shadows,
  fontSize,
} from "@/assets/styles";

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  background: ${({ theme }) => theme.colors.background.primary}F5;
  backdrop-filter: blur(20px);
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  box-shadow: ${({ $isOpen, theme }) =>
    $isOpen
      ? `${shadows.xl}, inset 1px 0 0 ${theme.colors.primary.main}1A`
      : "none"};
  padding: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all ${transitions.normal};
  z-index: ${zIndex.modal};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* Tablet */
  @media (min-width: 768px) {
    max-width: 360px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    max-width: 340px;
  }

  /* Desktop large */
  @media (min-width: 1280px) {
    max-width: 380px;
  }

  /* Add subtle gradient overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary.main}0D 0%,
      transparent 50%,
      ${({ theme }) => theme.colors.primary.main}05 100%
    );
    pointer-events: none;
    z-index: -1;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  min-height: 64px;
`;

export const MobileMenuTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.xl};
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;

  margin-left: ${spacing.xl};
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.xl};
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.md};
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  position: relative;
  margin-right: ${spacing.xl};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.tertiary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MobileMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.primary};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.border.secondary};
  }
`;

export const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.neutral.black}4D;
  backdrop-filter: blur(4px);
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all ${transitions.normal};
  z-index: ${zIndex.modalBackdrop};
`;

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  padding: 0 ${spacing.xl};

  /* Staggered animation for nav items */
  & > * {
    animation: slideInFromLeft 0.3s ease-out forwards;
    opacity: 0;
    transform: translateX(-20px);
  }

  & > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${fontSize.md};
  padding: ${spacing.sm};
  border-radius: ${borderRadius.lg};
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
  border: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.tertiary};
    border-color: ${({ theme }) => theme.colors.border.primary};
    transform: translateX(4px);
    box-shadow: ${shadows.sm};
  }

  &:active {
    transform: translateX(2px) scale(0.98);
    background: ${({ theme }) => theme.colors.background.paper};
  }

  /* Add subtle left border accent on hover */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 0 2px 2px 0;
    transition: height ${transitions.fast};
  }

  &:hover::before {
    height: 60%;
  }
`;

export const NavLinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: ${spacing.md};
  color: ${({ theme }) => theme.colors.primary.main};
  transition: color ${transitions.fast};
  flex-shrink: 0;

  a:hover & {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export const MobileNavSection = styled.div`
  padding: ${spacing.xl} 0;
  flex: 1;
`;

export const MobileNavSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 ${spacing.lg} 0;
  padding: 0 ${spacing.xl};
`;

export const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  padding: ${spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const MobileLoginButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${spacing.md} ${spacing.lg};
  border-radius: ${borderRadius.lg};
  font-weight: 600;
  font-size: ${fontSize.md};
  cursor: pointer;
  transition: all ${transitions.fast};
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
    transform: translateY(-1px);
    box-shadow: ${shadows.md};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${shadows.sm};
  }

  /* Ripple effect */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:active::after {
    width: 100px;
    height: 100px;
  }
`;

export const UserProfileSection = styled.div`
  width: auto;
  padding: ${spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const MenuFooter = styled.div`
  padding: ${spacing.md} ${spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  text-align: center;
`;

export const MenuVersion = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.xs};
  margin: 0;
  font-weight: 400;
  opacity: 0.7;
`;
