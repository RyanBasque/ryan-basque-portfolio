import React from 'react';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { CardContainer, CardContent, CardActions } from './styles';

export interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <CardContainer className={className}>
      <CardContent>
        <Heading level={3} color="primary" align="left">
          {title}
        </Heading>
        <Text variant="body" color="secondary">
          {description}
        </Text>
      </CardContent>
      {buttonText && onButtonClick && (
        <CardActions>
          <Button variant="primary" size="medium" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </CardActions>
      )}
    </CardContainer>
  );
};

export default Card;
