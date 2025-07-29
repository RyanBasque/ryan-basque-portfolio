import styled from "styled-components";
import Image from "next/image";

import { colors } from "@/assets/styles/theme";

export const Container = styled.main`
  min-height: calc(100vh - 140px);
  background-color: ${colors.background.primary};
  padding: 2rem 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

export const ProfileSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background-color: ${colors.background.secondary};
  border: 1px solid ${colors.border.primary};
  border-radius: 12px;

  max-width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem;
    max-width: 100%;
  }
`;

export const ProfileImageContainer = styled.div`
  flex-shrink: 0;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  border: 2px solid ${colors.border.primary};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DescriptionSection = styled.div`
  max-width: 600px;
`;

export const StatsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatDivider = styled.span`
  color: ${colors.text.secondary};
  font-size: 1.2rem;
`;
