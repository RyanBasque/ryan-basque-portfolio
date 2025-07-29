"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

import * as S from "./styles";

const Login = () => {
  const router = useRouter();

  const handleCreateAccountClick = () => {
    router.push("/register");
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
      icon: "📊",
      title: "Analytics Avançados (Em Breve)",
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

  return (
    <S.LoginContainer>
      <S.HeroSection>
        <S.HeroContent>
          <Heading level={1} color="primary" align="center">
            Bem-vindo de Volta
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Faça login e continue construindo seu portfolio profissional
          </Text>
        </S.HeroContent>
      </S.HeroSection>

      <S.ContentSection>
        <S.FormSection>
          <S.FormContainer>
            <S.FormHeader>
              <Heading level={3} color="primary" align="center">
                Entrar na Conta
              </Heading>
              <Text variant="caption" color="secondary" align="center">
                Digite suas credenciais para acessar
              </Text>
            </S.FormHeader>

            <S.FormPlaceholder>
              <S.PlaceholderIcon>🔐</S.PlaceholderIcon>
              <Heading level={4} color="secondary" align="center">
                Login em Desenvolvimento
              </Heading>
              <Text variant="body" color="secondary" align="center">
                Em breve você poderá acessar sua conta e gerenciar seu
                portfolio!
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
          </S.BenefitsContainer>
        </S.BenefitsSection>
      </S.ContentSection>

      <S.CTASection>
        <S.CTAContent>
          <Heading level={3} color="primary" align="center">
            Ainda não tem uma conta?
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Crie sua conta e comece a construir seu portfolio
          </Text>
          <S.CTAActions>
            <Button
              variant="primary"
              size="large"
              onClick={handleCreateAccountClick}
            >
              Criar Conta
            </Button>
          </S.CTAActions>
        </S.CTAContent>
      </S.CTASection>
    </S.LoginContainer>
  );
};

export default Login;
