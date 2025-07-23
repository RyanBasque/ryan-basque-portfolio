import React from 'react';

import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

import { ProfileHeaderProps } from './types';
import * as S from './styles';

const ProfileHeader = ({
  name,
  handle,
  pronouns,
  status,
  description,
  location,
  website,
  followers,
  imageUrl,
  badges = []
}: ProfileHeaderProps): React.JSX.Element => {
  return (
    <S.ProfileHeaderContainer>
      <S.ProfileImageContainer>
        <S.ProfileImage src={imageUrl} alt={`${name} profile picture`} />
      </S.ProfileImageContainer>
      
      <S.ProfileInfo>
        <S.ProfileName>
          <Heading level={1} color="primary" align="left">
            {name}
          </Heading>
        </S.ProfileName>
        
        <S.ProfileHandle>
          <Text variant="body" color="muted" align="left">
            {handle} · {pronouns}
          </Text>
        </S.ProfileHandle>

        <S.StatusSection>
          <S.StatusBadge>
            <span>🎯</span>
            <S.StatusText>
              <Text variant="body" color="primary" weight="medium">
                {status}
              </Text>
            </S.StatusText>
          </S.StatusBadge>
        </S.StatusSection>

        <S.DescriptionSection>
          <Text variant="body" color="secondary" align="left">
            {description}
          </Text>
        </S.DescriptionSection>

        <S.LocationSection>
          <Text variant="body" color="muted" align="left">
            🏢 Trademaster · 📍 {location}
          </Text>
        </S.LocationSection>

        <S.WebsiteSection>
          <Text variant="body" color="secondary" align="left">
            🔗 {website}
          </Text>
        </S.WebsiteSection>

        {/* <S.FollowersSection>
          <Text variant="body" color="muted" align="left">
            👥 {followers} seguidores
          </Text>
        </S.FollowersSection> */}

        {badges.length > 0 && (
          <S.BadgesSection>
            {badges.map((badge, index) => (
              <S.Badge key={index}>
                <Text variant="caption" color="muted">
                  🏆 {badge}
                </Text>
              </S.Badge>
            ))}
          </S.BadgesSection>
        )}
      </S.ProfileInfo>
    </S.ProfileHeaderContainer>
  );
};

export default ProfileHeader;
