import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: calc(100vh - 120px);
  background: #0d1117;
  color: white;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  padding: 4rem 2rem;
  text-align: center;
  border-bottom: 1px solid #30363d;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    color: #7d8590;
    font-size: 1.25rem;
    line-height: 1.6;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const MissionSection = styled.section`
  padding: 4rem 0;
  background: #0d1117;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
  }

  p {
    color: #e6edf3;
    font-size: 1.125rem;
    line-height: 1.7;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: #161b22;

  h2 {
    color: #f0f6fc;
    margin-bottom: 3rem;
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FeatureCard = styled.div`
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #58a6ff;
  }

  h3 {
    color: #58a6ff;
    margin: 1rem 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: #e6edf3;
    line-height: 1.6;
    margin: 0;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const BenefitsSection = styled.section`
  padding: 4rem 0;
  background: #0d1117;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const BenefitsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
  }

  p {
    color: #7d8590;
    font-size: 1.125rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    h2 {
      font-size: 2rem;
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
  gap: 1rem;
  padding: 0.75rem 0;
  color: #e6edf3;
  font-size: 1.125rem;

  span {
    color: #58a6ff;
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

export const TechnologySection = styled.section`
  padding: 4rem 0;
  background: #161b22;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
  }

  p {
    color: #7d8590;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    h2 {
      font-size: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #58a6ff;
  }

  span {
    color: #e6edf3;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const CTASection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
  text-align: center;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
  }

  p {
    color: #7d8590;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    h2 {
      font-size: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
