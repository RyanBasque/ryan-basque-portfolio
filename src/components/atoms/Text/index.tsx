import React from 'react';
import { StyledText } from './styles';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'caption' | 'subtitle';
  color?: 'primary' | 'secondary' | 'muted';
  weight?: 'normal' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  className = '',
}) => {
  return (
    <StyledText
      $variant={variant}
      $color={color}
      $weight={weight}
      $align={align}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Text;
