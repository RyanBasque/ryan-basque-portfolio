import React from 'react';

import Text from '@/components/atoms/Text';

import { StatsGridProps } from './types';
import * as S from './styles';

const StatsGrid = ({ stats }: StatsGridProps): React.JSX.Element => {
  return (
    <S.StatsContainer>
      {stats.map((stat, index) => (
        <S.StatItem key={index} $color={stat.color}>
          <S.StatIcon $color={stat.color}>
            {stat.icon}
          </S.StatIcon>
          <S.StatContent>
            <S.StatLabel>
              <Text variant="body" color="primary" weight="medium">
                {stat.label}
              </Text>
            </S.StatLabel>
            <S.StatCount>
              <Text variant="body" color="muted">
                {stat.count}
              </Text>
            </S.StatCount>
          </S.StatContent>
          <S.StatArrow>
            →
          </S.StatArrow>
        </S.StatItem>
      ))}
    </S.StatsContainer>
  );
};

export default StatsGrid;
