import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'small' | 'medium' | 'large';
}

const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: white;
    border: 2px solid #007bff;
    
    &:hover:not(:disabled) {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border: 2px solid #6c757d;
    
    &:hover:not(:disabled) {
      background-color: #545b62;
      border-color: #545b62;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    
    &:hover:not(:disabled) {
      background-color: #007bff;
      color: white;
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
  `,
  large: css`
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 0.5rem;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: inherit;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-in-out;
  
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
  
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
