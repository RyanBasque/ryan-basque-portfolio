import React from 'react';

import { ButtonProps } from './types';
import * as S from './styles';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps): React.JSX.Element => {
  return (
    <S.StyledButton
      type={type}
      $variant={variant}
      $size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
