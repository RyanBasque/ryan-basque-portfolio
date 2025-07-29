import styled from "styled-components";

import {
  colors,
  spacing,
  borderRadius,
  transitions,
  fontSize,
} from "@/assets/styles";

export const UserProfileContainer = styled.div<{
  $variant: "default" | "menu";
}>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  width: auto;

  ${({ $variant }) =>
    $variant === "menu" &&
    `
    justify-content: space-between;
    padding: ${spacing.md} ${spacing.lg};
    background: ${colors.background.tertiary};
    border: 1px solid ${colors.border.primary};
    border-radius: ${borderRadius.lg};
    transition: all ${transitions.fast};
    
    &:hover {
      background: ${colors.background.paper};
      border-color: ${colors.primary.main};
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

  /* Mobile and tablet - full width */
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const UserAvatar = styled.div<{ $size: "medium" | "large" }>`
  width: ${({ $size }) => ($size === "large" ? "48px" : "32px")};
  height: ${({ $size }) => ($size === "large" ? "48px" : "32px")};
  border-radius: ${borderRadius.full};
  background: ${colors.primary.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neutral.white};
  font-weight: 600;
  font-size: ${({ $size }) => ($size === "large" ? fontSize.md : fontSize.sm)};
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid ${colors.border.primary};
  transition: all ${transitions.fast};

  &:hover {
    border-color: ${colors.primary.main};
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
  color: ${colors.text.primary};
  font-weight: 600;
  font-size: ${fontSize.md};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserEmail = styled.span`
  color: ${colors.text.secondary};
  font-size: ${fontSize.sm};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`;

export const LogoutButton = styled.button<{ $variant: "default" | "menu" }>`
  background: transparent;
  border: 1px solid ${colors.border.primary};
  color: ${colors.text.secondary};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.md};
  cursor: pointer;
  transition: all ${transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 32px;
  height: 32px;

  &:hover {
    border-color: ${colors.status.error};
    color: ${colors.status.error};
    background: rgba(218, 54, 51, 0.1);
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

  ${({ $variant }) =>
    $variant === "menu" &&
    `
    background: ${colors.background.secondary};
    border-color: ${colors.border.secondary};
    
    &:hover {
      background: rgba(218, 54, 51, 0.15);
      border-color: ${colors.status.error};
    }

    @media (max-width: 1024px) {
      width: 100%;
      justify-content: center;
      padding: ${spacing.sm};
      height: 40px;
    }
  `}
`;
