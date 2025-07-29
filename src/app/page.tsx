"use client";
import React from "react";

import { breakDescriptionParagraph } from "@/utils/breakDescriptionParagraph";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import ProfileHeader from "@/components/organisms/ProfileHeader";
import StatsGrid from "@/components/organisms/StatsGrid";

import * as S from "./styles";

const Home = () => {
  const profileData = {
    name: "Ryan Ladevig Basque",
    status: "Focusing",
    enterprise: "Trademaster",
    description: "Sou um desenvolvedor Full-Stack, especializado em React e React Native, com forte orientação a UX/UI e design centrado no usuário. Tenho experiência consolidada na indústria financeira, construindo soluções digitais robustas em ambientes de alta performance e escalabilidade.\n\nTenho experiência sólida em projetos de tecnologia financeira, contribuindo para a criação de jornadas digitais escaláveis eintuitivas. Meu background técnico combina desenvolvimento mobile,interfaces ricas e uma mentalidade centrada no usuário.\n\nTenho domínio técnico em React, React Native, TypeScript e Figma, além de estar em constante evolução com Python, Kotlin, bancos de dados e aplicações de Inteligência Artificial. Atuo com uma visão de produto focada em UX/UI estratégico, escalabilidade e entregas com alto impacto.",
    location: "São Paulo",
    website: "ryanbasque.com",
    followers: 23,
    imageUrl: "https://github.com/RyanBasque.png",
    badges: [
      "vue",
      "angular",
      "tailwind",
      "sass",
      "vite",
      "express",
      "nestjs",
      "graphql",
      "restapi",
      "postgresql",
      "mongodb",
      "mysql",
    ],
  };

  const statsData = [
    {
      icon: "🏢",
      label: "Organizações",
      count: 1,
      color: "orange",
    },
    {
      icon: "📊",
      label: "Projetos",
      count: 1,
      color: "purple",
    },
    {
      icon: "📁",
      label: "Repositórios",
      count: 44,
      color: "blue",
    },
  ];

  const skills = [
    {
      title: "Frontend Development",
      description:
        "React, TypeScript, Next.js, Styled-Components. Criando interfaces modernas e responsivas.",
    },
    {
      title: "Backend Development",
      description:
        "Node.js, Express, PostgreSQL. Desenvolvendo APIs robustas e escaláveis.",
    },
    {
      title: "Full Stack Solutions",
      description:
        "Integrando frontend e backend para soluções completas e eficientes.",
    },
  ];

  return (
    <S.HomeContainer>
      <S.HeroSection>
        <S.ProfileSection>
          <ProfileHeader {...profileData} />
          <S.MainContent>
            <StatsGrid stats={statsData} />
          </S.MainContent>
        </S.ProfileSection>

        <S.SkillsSection>
          <Heading level={2} color="primary" align="left">
            Principais Habilidades
          </Heading>
          <S.SkillsGrid>
            {skills.map((skill, index) => (
              <S.SkillCard key={index}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </S.SkillCard>
            ))}
          </S.SkillsGrid>
        </S.SkillsSection>

        <S.ContactSection>
          <Heading level={2} color="primary" align="center">
            Vamos Conversar?
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
          </Text>
          <Button variant="primary" size="large">
            Entre em Contato
          </Button>
        </S.ContactSection>
      </S.HeroSection>
    </S.HomeContainer>
  );
};

export default Home;
