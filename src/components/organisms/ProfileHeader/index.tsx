import React from "react";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import BadgeWithTooltip from "@/components/atoms/BadgeTooltip";

import { ProfileHeaderProps } from "./types";
import * as S from "./styles";

const ProfileHeader = ({
  name,
  status,
  description,
  enterprise,
  location,
  website,
  imageUrl,
  badges = [],
}: ProfileHeaderProps): React.JSX.Element => {
  return (
    <S.ProfileHeaderContainer>
      <S.ProfileHeaderWrapper>
        <S.ProfileImageContainer>
          <S.ProfileImage src={imageUrl} alt={`${name} profile picture`} />
        </S.ProfileImageContainer>
        <S.ProfileHeaderNameContainer>
          <S.ProfileName>
            <Heading level={1} color="primary" align="left">
              {name}
            </Heading>
          </S.ProfileName>

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
        </S.ProfileHeaderNameContainer>
      </S.ProfileHeaderWrapper>

      <S.ProfileInfo>
        <S.DescriptionSection>
          <Text variant="body" color="secondary" align="left">
            {description}
          </Text>
        </S.DescriptionSection>

        <S.LocationSection>
          <Text variant="body" color="muted" align="left">
            {enterprise ? `🏢 ${enterprise}` : "📚 Em estudos"} · 📍 {location}{" "}
            · 🏡 Remoto
          </Text>
        </S.LocationSection>

        {website && (
          <S.WebsiteSection>
            <Text variant="body" color="secondary" align="left">
              🌐 {website}
            </Text>
          </S.WebsiteSection>
        )}

        {badges.length > 0 && (
          <S.BadgesSection>
            {badges.map((badge, index) => (
              <BadgeWithTooltip key={index} badge={badge} />
            ))}
          </S.BadgesSection>
        )}
      </S.ProfileInfo>
    </S.ProfileHeaderContainer>
  );
};

export default ProfileHeader;
