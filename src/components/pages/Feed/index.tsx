"use client";
import React from "react";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";

import * as S from "./styles";

const FeedPage = (): React.JSX.Element => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ProfileSection>
          <S.ProfileImageContainer>
            <S.ProfileImage
              src="/avatar-placeholder.svg"
              alt="Ryan Basque"
              width={120}
              height={120}
            />
          </S.ProfileImageContainer>

          <S.ProfileInfo>
            <S.NameSection>
              <Heading level={1} color="primary">
                Ryan Basque
              </Heading>
              <Text variant="subtitle" color="secondary">
                RyanBasque
              </Text>
            </S.NameSection>

            <S.DescriptionSection>
              <Text variant="body" color="primary">
                Dev Fullstack | Do front ao back com React, Node.js &
                PostgreSQL. Transformo código em experiências reais, com
                performance, escalabilidade e propósito.
              </Text>
            </S.DescriptionSection>

            <S.StatsSection>
              <S.StatItem>
                <Icon name="project" size={16} />
                <Text variant="body" color="secondary">
                  44 repositórios
                </Text>
              </S.StatItem>

              <S.StatDivider>•</S.StatDivider>

              <S.StatItem>
                <Icon name="project" size={16} />
                <Text variant="body" color="secondary">
                  29 estrelas
                </Text>
              </S.StatItem>
            </S.StatsSection>
          </S.ProfileInfo>
        </S.ProfileSection>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default FeedPage;
