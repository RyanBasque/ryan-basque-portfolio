"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

import * as S from "./styles";

const Register = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleBackHomeClick = () => {
    router.push("/");
  };

  const features = [
    {
      icon: "🚀",
      title: "Portfolio Profissional",
      description:
        "Crie um portfolio moderno e atrativo que destaca suas habilidades e projetos de forma profissional.",
    },
    {
      icon: "🔗",
      title: "Integração com GitHub",
      description:
        "Conecte automaticamente com seus repositórios e mantenha seu portfolio sempre atualizado.",
    },
    {
      icon: "�",
      title: "Analytics Avançados",
      description:
        "Acompanhe visualizações, engajamento e performance dos seus projetos com métricas detalhadas.",
    },
    {
      icon: "🌟",
      title: "Destaque no Mercado",
      description:
        "Aumente sua visibilidade profissional e seja descoberto por recrutadores e empresas.",
    },
  ];

  const benefits = [
    "Portfolio profissional em minutos",
    "Sincronização automática com GitHub",
    "Templates modernos e responsivos",
    "Analytics detalhados dos projetos",
    "Compartilhamento simplificado",
    "Visibilidade aumentada no mercado",
    "Networking com outros desenvolvedores",
    "Oportunidades de carreira",
  ];

  return (
    <S.RegisterContainer>
      <S.HeroSection>
        <S.HeroContent>
          <Heading level={1} color="primary" align="center">
            Crie Sua Conta
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Junte-se a centenas de desenvolvedores que já estão showcaseando
            seus projetos
          </Text>
        </S.HeroContent>
      </S.HeroSection>

      <S.ContentSection>
        <S.FormSection>
          <S.FormContainer>
            <S.FormHeader>
              <Heading level={3} color="primary" align="center">
                Criar Nova Conta
              </Heading>
              <Text variant="caption" color="secondary" align="center">
                Preencha os dados abaixo para começar
              </Text>
            </S.FormHeader>

            <S.FormPlaceholder>
              <S.PlaceholderIcon>📝</S.PlaceholderIcon>
              <Heading level={4} color="secondary" align="center">
                Formulário em Desenvolvimento
              </Heading>
              <Text variant="body" color="secondary" align="center">
                Em breve você poderá se registrar e criar seu portfolio
                incrível!
              </Text>
              <S.PlaceholderActions>
                <Button variant="primary" size="large">
                  Notificar quando estiver pronto
                </Button>
                <Button
                  variant="outline"
                  size="large"
                  onClick={handleBackHomeClick}
                >
                  Voltar ao início
                </Button>
              </S.PlaceholderActions>
            </S.FormPlaceholder>
          </S.FormContainer>
        </S.FormSection>

        <S.BenefitsSection>
          <S.BenefitsContainer>
            <Heading level={3} color="primary">
              Por que usar a plataforma?
            </Heading>

            <S.FeaturesList>
              {features.map((feature, index) => (
                <S.FeatureItem key={index}>
                  <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                  <S.FeatureContent>
                    <Heading level={5} color="primary">
                      {feature.title}
                    </Heading>
                    <Text variant="caption" color="secondary">
                      {feature.description}
                    </Text>
                  </S.FeatureContent>
                </S.FeatureItem>
              ))}
            </S.FeaturesList>

            <S.BenefitsList>
              <Heading level={4} color="primary">
                Principais benefícios:
              </Heading>
              {benefits.map((benefit, index) => (
                <S.BenefitItem key={index}>
                  <S.BenefitIcon>✓</S.BenefitIcon>
                  <Text variant="body" color="secondary">
                    {benefit}
                  </Text>
                </S.BenefitItem>
              ))}
            </S.BenefitsList>
          </S.BenefitsContainer>
        </S.BenefitsSection>
      </S.ContentSection>

      <S.CTASection>
        <S.CTAContent>
          <Heading level={3} color="primary" align="center">
            Já tem uma conta?
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Faça login e continue de onde parou
          </Text>
          <S.CTAActions>
            <Button variant="outline" size="large" onClick={handleLoginClick}>
              Fazer Login
            </Button>
          </S.CTAActions>
        </S.CTAContent>
      </S.CTASection>
    </S.RegisterContainer>
  );
};

export default Register;
