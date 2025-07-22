import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const HeroSection = styled.section`
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;

  > * {
    margin-bottom: 1rem;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const NavigationSection = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
