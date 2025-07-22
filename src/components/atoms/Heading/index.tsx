import React from 'react';
import { StyledHeading } from './styles';

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'primary' | 'secondary' | 'accent';
  weight?: 'normal' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  color = 'primary',
  weight = 'bold',
  align = 'left',
  className = '',
}) => {
  const tag = `h${level}` as HeadingTag;
  
  return (
    <StyledHeading
      as={tag}
      $level={level}
      $color={color}
      $weight={weight}
      $align={align}
      className={className}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
