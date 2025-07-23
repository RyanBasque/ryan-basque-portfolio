import React from 'react';

import { TextProps } from './types';
import * as S from './styles';

const Text = ({
  children,
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  className = '',
}: TextProps): React.JSX.Element => {
  return (
    <S.StyledText
      $variant={variant}
      $color={color}
      $weight={weight}
      $align={align}
      className={className}
    >
      {children}
    </S.StyledText>
  );
};

export default Text;
