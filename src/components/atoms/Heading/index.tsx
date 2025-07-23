import React from 'react';

import * as S from './styles';
import { HeadingProps, HeadingTag } from './types';

const Heading = ({
  children,
  level = 1,
  color = 'primary',
  weight = 'bold',
  align = 'left',
  className = '',
}: HeadingProps): React.JSX.Element => {
  const tag = `h${level}` as HeadingTag;
  
  return (
    <S.StyledHeading
      as={tag}
      $level={level}
      $color={color}
      $weight={weight}
      $align={align}
      className={className}
    >
      {children}
    </S.StyledHeading>
  );
};

export default Heading;
