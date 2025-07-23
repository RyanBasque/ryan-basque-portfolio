"use client";
import React from "react";
import Link from "next/link";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import ProfileHeader from "@/components/organisms/ProfileHeader";
import StatsGrid from "@/components/organisms/StatsGrid";

import * as S from "./styles";

const Home = () => {
  const profileData = {
    name: "Ryan Basque",
    handle: "RyanBasque",
    pronouns: "he/him",
    status: "Focusing",
    description:
      "Dev Fullstack | Do front ao back com React, Node.js & PostgreSQL. Transformo código em experiências reais, com performance, escalabilidade e propósito.",
    location: "São Paulo",
    website: "ryanbasque.com",
    followers: 23,
    imageUrl: "https://github.com/RyanBasque.png",
    badges: ["React", "Node.js"],
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
