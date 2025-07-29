import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #161b22;
  border-top: 1px solid #30363d;
  padding: 2rem 0;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FooterText = styled.p`
  color: #e6edf3;
  font-size: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AuthorLink = styled.a`
  color: #58a6ff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #79c0ff;
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  color: #7d8590;
  font-size: 0.875rem;
  margin: 0;
`;
