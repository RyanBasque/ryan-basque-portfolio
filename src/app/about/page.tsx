"use client";
import React from "react";
import Image from "next/image";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

import * as S from "./styles";

const About = () => {
  const features = [
    {
      icon: "🔗",
      title: "Integração com GitHub",
      description: "Conecte-se facilmente com sua conta do GitHub e importe automaticamente todos os seus repositórios públicos."
    },
    {
      icon: "📊",
      title: "Estatísticas em Tempo Real",
      description: "Visualize métricas detalhadas dos seus projetos, incluindo linguagens mais usadas, commits e contribuições."
    },
    {
      icon: "🎨",
      title: "Portfolio Personalizado",
      description: "Crie um portfolio profissional e atrativo com templates customizáveis e responsivos."
    },
    {
      icon: "🚀",
      title: "Deploy Automático",
      description: "Publique seu portfolio com um clique e mantenha-o sempre atualizado com seus projetos mais recentes."
    }
  ];

  const benefits = [
    "Visibilidade profissional aumentada",
    "Facilidade para compartilhar projetos",
    "Análise detalhada do seu trabalho",
    "Network com outros desenvolvedores",
    "Oportunidades de carreira"
  ];

  return (
    <S.AboutContainer>
      <S.HeroSection>
        <S.HeroContent>
          <Heading level={1} color="primary" align="center">
            Sobre o Ryan Basque Portfolio
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Uma plataforma moderna e intuitiva para desenvolvedores showcasearem seus projetos do GitHub
          </Text>
        </S.HeroContent>
      </S.HeroSection>

      <S.MissionSection>
        <S.ContentWrapper>
          <Heading level={2} color="primary" align="left">
            Nossa Missão
          </Heading>
          <Text variant="body" color="primary" align="left">
            Facilitar a vida dos desenvolvedores oferecendo uma maneira simples e elegante de 
            apresentar seus projetos do GitHub. Acreditamos que todo desenvolvedor merece ter 
            um portfolio profissional que reflita verdadeiramente seu talento e dedicação.
          </Text>
        </S.ContentWrapper>
      </S.MissionSection>

      <S.FeaturesSection>
        <S.ContentWrapper>
          <Heading level={2} color="primary" align="center">
            Principais Funcionalidades
          </Heading>
          <S.FeaturesGrid>
            {features.map((feature, index) => (
              <S.FeatureCard key={index}>
                <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </S.FeatureCard>
            ))}
          </S.FeaturesGrid>
        </S.ContentWrapper>
      </S.FeaturesSection>

      <S.BenefitsSection>
        <S.ContentWrapper>
          <S.BenefitsContent>
            <div>
              <Heading level={2} color="primary" align="left">
                Por que usar nossa plataforma?
              </Heading>
              <Text variant="body" color="secondary" align="left">
                Desenvolvido por desenvolvedores, para desenvolvedores. Nossa plataforma 
                entende suas necessidades e oferece ferramentas que realmente fazem a diferença.
              </Text>
            </div>
            <S.BenefitsList>
              {benefits.map((benefit, index) => (
                <S.BenefitItem key={index}>
                  <span>✓</span>
                  {benefit}
                </S.BenefitItem>
              ))}
            </S.BenefitsList>
          </S.BenefitsContent>
        </S.ContentWrapper>
      </S.BenefitsSection>

      <S.TechnologySection>
        <S.ContentWrapper>
          <Heading level={2} color="primary" align="center">
            Tecnologias Utilizadas
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Construído com as melhores tecnologias do mercado para garantir performance, 
            escalabilidade e uma experiência excepcional.
          </Text>
          <S.TechStack>
            <S.TechItem>
              <Image src="/badges/react.svg" alt="React" width={48} height={48} />
              <span>React</span>
            </S.TechItem>
            <S.TechItem>
              <Image src="/badges/typescript.svg" alt="TypeScript" width={48} height={48} />
              <span>TypeScript</span>
            </S.TechItem>
            <S.TechItem>
              <Image src="/badges/nodejs.svg" alt="Node.js" width={48} height={48} />
              <span>Node.js</span>
            </S.TechItem>
            <S.TechItem>
              <Image src="/badges/github-star.svg" alt="GitHub API" width={48} height={48} />
              <span>GitHub API</span>
            </S.TechItem>
          </S.TechStack>
        </S.ContentWrapper>
      </S.TechnologySection>

      <S.CTASection>
        <S.ContentWrapper>
          <Heading level={2} color="primary" align="center">
            Pronto para começar?
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Junte-se a centenas de desenvolvedores que já estão usando nossa plataforma 
            para impulsionar suas carreiras.
          </Text>
          <S.CTAButtons>
            <Button variant="primary" size="large">
              Conectar com GitHub
            </Button>
            <Button variant="secondary" size="large">
              Ver Demonstração
            </Button>
          </S.CTAButtons>
        </S.ContentWrapper>
      </S.CTASection>
    </S.AboutContainer>
  );
};

export default About;
