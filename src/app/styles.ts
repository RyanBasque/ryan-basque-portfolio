import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background: #0d1117;
  color: white;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkillsSection = styled.section`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1.5rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.5rem;

  h3 {
    color: #58a6ff;
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
  }

  p {
    color: #e6edf3;
    line-height: 1.5;
    margin: 0;
  }
`;

export const ContactSection = styled.section`
  background: #0d1117;
  border: 2px solid #30363d;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;

  h2 {
    color: #f0f6fc;
    margin-bottom: 1rem;
  }

  p {
    color: #7d8590;
    margin-bottom: 1.5rem;
  }
`;
