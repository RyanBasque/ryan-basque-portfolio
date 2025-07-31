import styled from "styled-components";

import { spacing, borderRadius, transitions, fontSize } from "@/assets/styles";

export const UserProfileContainer = styled.div<{
  $variant: "default" | "menu";
}>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  width: auto;

  ${({ $variant, theme }) =>
    $variant === "menu" &&
    `
    justify-content: space-between;
    padding: ${spacing.md} ${spacing.lg};
    background: ${theme.colors.background.tertiary};
    border: 0.5px solid ${theme.colors.border.primary};
    border-radius: ${borderRadius.lg};
    transition: all ${transitions.fast};
    
    &:hover {
      background: ${theme.colors.background.paper};
      border-color: ${theme.colors.primary.main};
    }
  `}

  /* Responsive layout for tablet and mobile */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.md};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  flex: 1;
  min-width: 0;
  cursor: pointer;
  border-radius: ${borderRadius.md};
  padding: ${spacing.xs};
  transition: all ${transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.paper};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const UserAvatar = styled.div<{ $size: "medium" | "large" }>`
  width: ${({ $size }) => ($size === "large" ? "60px" : "32px")};
  height: ${({ $size }) => ($size === "large" ? "60px" : "32px")};
  border-radius: ${borderRadius.full};
  background: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 600;
  font-size: ${({ $size }) => ($size === "large" ? fontSize.md : fontSize.sm)};
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    transform: scale(1.05);
  }
`;

export const UserDetails = styled.div<{ $variant: "default" | "menu" }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;

  ${({ $variant }) =>
    $variant === "default" &&
    `
    @media (max-width: 768px) {
      display: flex;
    }
  `}
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  font-size: ${fontSize.md};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserEmail = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`;

export const LogoutButton = styled.button<{ $variant: "default" | "menu" }>`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.md};
  cursor: pointer;
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 42px;
  height: 55px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.status.error};
    color: ${({ theme }) => theme.colors.status.error};
    background: ${({ theme }) => theme.colors.status.error}1A;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    transform: rotate(90deg);
    font-size: ${fontSize.sm};
    font-weight: 600;
  }

  ${({ $variant }) =>
    $variant === "default" &&
    `
    margin-left: ${spacing.sm};
    
    @media (max-width: 1024px) {
      margin-left: 0;
      width: 100%;
      justify-content: center;
      padding: ${spacing.sm};
      height: 40px;
    }
  `}

  ${({ $variant, theme }) =>
    $variant === "menu" &&
    `
    background: ${theme.colors.background.secondary};
    border-color: ${theme.colors.border.secondary};
    
    &:hover {
      background: ${theme.colors.status.error}26;
      border-color: ${theme.colors.status.error};
    }

    @media (max-width: 1024px) {
      width: 100%;
      justify-content: center;
      padding: ${spacing.sm};
      height: 40px;
    }
  `}
`;
