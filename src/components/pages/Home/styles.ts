import styled from "styled-components";
import {
  mediaQueries,
  spacing,
  borderRadius,
  transitions,
  fontSize,
} from "@/assets/styles";

export const AboutContainer = styled.div`
  min-height: calc(100vh - 120px);
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.secondary} 0%,
    ${({ theme }) => theme.colors.background.primary} 100%
  );
  padding: ${spacing.xxxl} ${spacing.xl};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} ${spacing.md};
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["5xl"]};
    font-weight: 700;

    ${mediaQueries.down.md} {
      font-size: ${fontSize["4xl"]};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${fontSize.xl};
    line-height: 1.6;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.xl};

  ${mediaQueries.down.md} {
    padding: 0 ${spacing.md};
  }
`;

export const MissionSection = styled.section`
  padding: ${spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background.primary};

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["4xl"]};
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${fontSize.lg};
    line-height: 1.7;
    max-width: 800px;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} 0;

    h2 {
      font-size: ${fontSize["4xl"]};
    }
  }
`;

export const FeaturesSection = styled.section`
  padding: ${spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background.secondary};

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.xxxl};
    font-size: ${fontSize["4xl"]};
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} 0;

    h2 {
      font-size: ${fontSize["4xl"]};
      margin-bottom: ${spacing.xl};
    }
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.xl};
  margin-top: ${spacing.xl};

  ${mediaQueries.down.md} {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
  }
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.xl};
  padding: ${spacing.xl};
  text-align: center;
  transition: ${transitions.normal};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary.light};
    margin: ${spacing.md} 0;
    font-size: ${fontSize.xl};
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    margin: 0;
  }
`;

export const FeatureIcon = styled.div`
  font-size: ${fontSize["5xl"]};
  margin-bottom: ${spacing.md};
`;

export const BenefitsSection = styled.section`
  padding: ${spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background.primary};

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} 0;
  }
`;

export const BenefitsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xxxl};
  align-items: start;

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["4xl"]};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${fontSize.lg};
    line-height: 1.7;
  }

  ${mediaQueries.down.md} {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};

    h2 {
      font-size: ${fontSize["4xl"]};
    }
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.sm} 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.lg};

  span {
    color: ${({ theme }) => theme.colors.primary.light};
    font-weight: 600;
    font-size: ${fontSize.xl};
  }
`;

export const TechnologySection = styled.section`
  padding: ${spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background.secondary};

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["4xl"]};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${fontSize.lg};
    line-height: 1.7;
    margin-bottom: ${spacing.xxxl};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} 0;

    h2 {
      font-size: ${fontSize["4xl"]};
    }

    p {
      margin-bottom: ${spacing.xl};
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.xxxl};
  flex-wrap: wrap;

  ${mediaQueries.down.md} {
    gap: ${spacing.xl};
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm};
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.xl};
  transition: ${transitions.normal};
  min-width: 120px;
  min-height: 120px;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  span {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
    font-size: ${fontSize.sm};
  }
`;

export const CTASection = styled.section`
  padding: ${spacing.xxxl} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.primary} 0%,
    ${({ theme }) => theme.colors.background.secondary} 100%
  );
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["4xl"]};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${fontSize.lg};
    line-height: 1.7;
    margin-bottom: ${spacing.xxxl};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} 0;

    h2 {
      font-size: ${fontSize["4xl"]};
    }

    p {
      margin-bottom: ${spacing.xl};
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: ${spacing.lg};
  justify-content: center;
  flex-wrap: wrap;

  ${mediaQueries.down.md} {
    gap: ${spacing.md};
    flex-direction: column;
    align-items: center;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary.main};
  animation: blink 1s infinite;
  margin-left: 2px;
  font-weight: 300;

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`;
