import styled from "styled-components";
import {
  colors,
  mediaQueries,
  spacing,
  borderRadius,
  shadows,
  transitions,
  fontSize,
} from "@/assets/styles";

export const RegisterContainer = styled.div`
  min-height: calc(100vh - 120px);
  background: ${colors.background.primary};
  color: ${colors.text.primary};
`;

export const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${colors.background.secondary} 0%,
    ${colors.background.primary} 100%
  );
  padding: ${spacing.xxxl} ${spacing.xl};
  text-align: center;
  border-bottom: 1px solid ${colors.border.primary};

  ${mediaQueries.down.md} {
    padding: ${spacing.xxxl} ${spacing.md};
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    color: ${colors.text.primary};
    margin-bottom: ${spacing.lg};
    font-size: ${fontSize["5xl"]};
    font-weight: 700;

    ${mediaQueries.down.md} {
      font-size: ${fontSize["4xl"]};
    }
  }

  p {
    color: ${colors.text.secondary};
    font-size: ${fontSize.xl};
    line-height: 1.6;
  }
`;

export const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xxxl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xxxl} ${spacing.xl};

  ${mediaQueries.down.lg} {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }

  ${mediaQueries.down.md} {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormContainer = styled.div`
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.xl};
  width: 100%;
  max-width: 500px;
  box-shadow: ${shadows.md};

  ${mediaQueries.down.md} {
    padding: ${spacing.lg};
  }
`;

export const FormHeader = styled.div`
  margin-bottom: ${spacing.xl};
  text-align: center;

  h3 {
    margin-bottom: ${spacing.sm};
  }
`;

export const FormPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.lg};
  padding: ${spacing.xxxl} ${spacing.xl};
  text-align: center;
  background: ${colors.background.tertiary};
  border: 2px dashed ${colors.border.secondary};
  border-radius: ${borderRadius.md};
`;

export const PlaceholderIcon = styled.div`
  font-size: ${fontSize["4xl"]};
  margin-bottom: ${spacing.md};
`;

export const PlaceholderActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  width: 100%;
  max-width: 300px;

  ${mediaQueries.up.sm} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const BenefitsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: ${spacing.xl};
  }
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  margin-bottom: ${spacing.xxxl};
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: ${spacing.md};
  padding: ${spacing.lg};
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.md};
  transition: ${transitions.normal};

  &:hover {
    border-color: ${colors.primary.main};
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }
`;

export const FeatureIcon = styled.div`
  font-size: ${fontSize.xxl};
  flex-shrink: 0;
`;

export const FeatureContent = styled.div`
  flex: 1;

  h5 {
    margin-bottom: ${spacing.xs};
  }
`;

export const BenefitsList = styled.div`
  h4 {
    margin-bottom: ${spacing.lg};
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.md};
`;

export const BenefitIcon = styled.div`
  color: ${colors.status.success};
  font-weight: bold;
  font-size: ${fontSize.lg};
  flex-shrink: 0;
`;

export const CTASection = styled.section`
  background: ${colors.background.secondary};
  border-top: 1px solid ${colors.border.primary};
  padding: ${spacing.xxxl} ${spacing.xl};

  ${mediaQueries.down.md} {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

export const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h3 {
    margin-bottom: ${spacing.sm};
  }

  p {
    margin-bottom: ${spacing.xl};
  }
`;

export const CTAActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.lg};

  ${mediaQueries.down.sm} {
    flex-direction: column;
    align-items: center;
    gap: ${spacing.md};
  }
`;
