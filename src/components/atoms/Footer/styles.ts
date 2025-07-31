import styled from "styled-components";

import { spacing, fontSize, mediaQueries, transitions } from "@/assets/styles";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding: ${spacing.xl} 0;
  margin-top: auto;
  height: 5vh;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};
  text-align: center;

  ${mediaQueries.down.md} {
    padding: 0 ${spacing.md};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${fontSize.md};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`;

export const AuthorLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.light};
  text-decoration: none;
  font-weight: 600;
  transition: ${transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${fontSize.sm};
  margin: 0;
`;
