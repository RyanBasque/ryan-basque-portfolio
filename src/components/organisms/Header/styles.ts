import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #30363d;
  padding: 1rem 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: #f0f6fc;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #58a6ff;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #e6edf3;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #58a6ff;
    background: rgba(88, 166, 255, 0.1);
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 1px solid #30363d;
  color: #e6edf3;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
  }
`;

export const SignUpButton = styled.button`
  background: #238636;
  border: 1px solid #238636;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2ea043;
    border-color: #2ea043;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
  }
`;
