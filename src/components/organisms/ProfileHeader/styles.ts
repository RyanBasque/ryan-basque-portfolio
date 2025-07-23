import styled from "styled-components";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  mediaQueries,
} from "../../../assets/styles";

export const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  max-width: 400px;
  padding: ${spacing.lg};
  background: ${colors.background.primary};
  border-radius: ${borderRadius.xl};
  color: ${colors.text.primary};
  border: 1px solid ${colors.border.primary};

  ${mediaQueries.down.md} {
    max-width: 100%;
    padding: ${spacing.md};
  }
`;

export const ProfileImageContainer = styled.div`
  align-self: flex-start;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${borderRadius.full};
  border: 2px solid ${colors.border.primary};
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProfileName = styled.div`
  h1 {
    color: ${colors.text.primary};
    font-size: ${fontSize.xxxl};
    font-weight: 600;
    margin: 0;
  }
`;

export const ProfileHandle = styled.div`
  p {
    color: ${colors.text.secondary};
    margin: 0;
  }
`;

export const StatusSection = styled.div`
  margin: ${spacing.sm} 0;
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} 0.75rem;
  background: ${colors.secondary.main};
  border: 1px solid ${colors.border.primary};
  border-radius: 20px;
  width: fit-content;

  span {
    font-size: ${fontSize.sm};
  }
`;

export const StatusText = styled.div`
  p {
    color: ${colors.text.primary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const DescriptionSection = styled.div`
  p {
    color: ${colors.text.secondary};
    line-height: 1.5;
    margin: 0;
  }
`;

export const LocationSection = styled.div`
  p {
    color: ${colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const WebsiteSection = styled.div`
  p {
    color: ${colors.primary.light};
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
    color: ${colors.text.secondary};
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

export const BadgesSection = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: ${spacing.sm};
`;

export const Badge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${borderRadius.full};
  background: ${colors.secondary.main};
  border: 1px solid ${colors.border.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: ${fontSize.xs};
  }
`;
