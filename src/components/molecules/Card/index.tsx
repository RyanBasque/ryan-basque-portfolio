import React from 'react';

import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

import * as S from './styles';
import { CardProps } from './types';

const Card = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps): React.JSX.Element => {
  return (
    <S.CardContainer>
      <S.CardContent>
        <Heading level={3} color="primary" align="left">
          {title}
        </Heading>
        <Text variant="body" color="secondary">
          {description}
        </Text>
      </S.CardContent>
      {buttonText && onButtonClick && (
        <S.CardActions>
          <Button variant="primary" size="medium" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </S.CardActions>
      )}
    </S.CardContainer>
  );
};

export default Card;
