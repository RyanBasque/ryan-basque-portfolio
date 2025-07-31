import styled from "styled-components";

import { spacing, borderRadius, fontSize, mediaQueries } from "@/assets/styles";

export const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  max-width: 500px;
  padding: ${spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${borderRadius.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};

  ${mediaQueries.down.md} {
    max-width: 100%;
    padding: ${spacing.md};
  }

  ${mediaQueries.down.sm} {
    padding: ${spacing.md};
    gap: ${spacing.md};
  }
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;

  ${mediaQueries.down.sm} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${spacing.md};
  }
`;

export const ProfileHeaderNameContainer = styled.div`
  padding-left: ${spacing.md};
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.sm};

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries.down.sm} {
    padding-left: 0;
    padding-top: 0;
    align-items: center;
    text-align: center;
    gap: ${spacing.sm};
  }
`;

export const ProfileImageContainer = styled.div`
  display: inline-block;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${borderRadius.full};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  object-fit: cover;

  ${mediaQueries.down.sm} {
    width: 120px;
    height: 120px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const ProfileName = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${fontSize.xxxl};
    font-weight: 600;
    margin: 0;

    ${mediaQueries.down.sm} {
      font-size: ${fontSize.xxl};
      text-align: center;
    }
  }
`;

export const ProfileHandle = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
  }
`;

export const StatusSection = styled.div``;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.lg};
  background: ${({ theme }) => theme.colors.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.xxl};
  width: fit-content;

  span {
    font-size: ${fontSize.sm};
  }

  ${mediaQueries.down.sm} {
    margin: ${spacing.sm} auto;
  }
`;

export const StatusText = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const DescriptionSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.5;
    margin: 0;
  }
`;

export const LocationSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const WebsiteSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.primary.light};
    margin: 0;
    font-size: ${fontSize.sm};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FollowersSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const BadgeEmoji = styled.span`
  font-size: ${fontSize.md};
  line-height: 1;
`;

export const BadgesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md};
  margin-top: ${spacing.sm};
  position: relative;

  ${mediaQueries.down.md} {
    gap: ${spacing.sm};
  }

  ${mediaQueries.down.sm} {
    gap: ${spacing.sm};
  }
`;
