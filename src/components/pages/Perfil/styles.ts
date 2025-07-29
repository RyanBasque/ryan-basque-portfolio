import styled from "styled-components";

import {
  colors,
  mediaQueries,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/assets/styles";

export const HomeContainer = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${spacing.xl};
  background: ${colors.background.primary};
  color: ${colors.text.primary};

  ${mediaQueries.down.md} {
    padding: ${spacing.md};
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  max-width: 1200px;
  width: 100%;
  margin-bottom: ${spacing.xxxl};

  ${mediaQueries.down.md} {
    gap: ${spacing.lg};
    margin-bottom: ${spacing.xl};
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: ${spacing.xl};
  width: 100%;

  ${mediaQueries.down.md} {
    flex-direction: column;
    gap: ${spacing.lg};
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const SkillsSection = styled.section`
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xl};
  margin-top: ${spacing.xl};

  h2 {
    color: ${colors.text.primary};
    margin-bottom: ${spacing.lg};
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.lg};
    margin-top: ${spacing.lg};

    h2 {
      margin-bottom: ${spacing.md};
      font-size: 1.375rem;
    }
  }

  @media (max-width: 480px) {
    padding: ${spacing.md};
    margin-top: ${spacing.md};
    border-radius: ${borderRadius.lg};

    h2 {
      margin-bottom: ${spacing.md};
      font-size: 1.25rem;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.lg};

  ${mediaQueries.down.lg} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${spacing.md};
  }

  ${mediaQueries.down.md} {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${spacing.sm};
  }
`;

export const SkillCard = styled.div`
  background: ${colors.background.tertiary};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
  transition: ${transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  h3 {
    color: ${colors.primary.light};
    margin-bottom: ${spacing.sm};
    font-size: 1.125rem;
    font-weight: 600;
  }

  p {
    color: ${colors.text.primary};
    line-height: 1.5;
    margin: 0;
    font-size: 0.9rem;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.md};

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    padding: ${spacing.md};

    h3 {
      font-size: 0.95rem;
      margin-bottom: ${spacing.xs};
    }

    p {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }
`;

export const ContactSection = styled.section`
  background: ${colors.background.primary};
  border: 2px solid ${colors.border.primary};
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xl};
  text-align: center;
  margin-top: ${spacing.xl};

  h2 {
    color: ${colors.text.primary};
    margin-bottom: ${spacing.md};
  }

  p {
    color: ${colors.text.secondary};
    margin-bottom: ${spacing.lg};
  }
`;
