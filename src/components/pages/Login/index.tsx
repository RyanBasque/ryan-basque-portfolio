"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

import { useAuth } from "@/contexts/AuthContext";

import * as S from "./styles";
import Image from "next/image";

const Login = (): React.JSX.Element => {
  const { gitHubLogin, googleLogin, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !isLoading) {
      router.push("/feed");
    }
  }, [user, isLoading, router]);

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.Header>
          <Heading level={2} color="primary" align="center">
            🚀 Entrar
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Acesse sua conta e continue criando projetos incríveis
          </Text>
        </S.Header>

        <S.GitHubSection>
          <S.GitHubButton onClick={gitHubLogin} disabled={isLoading}>
            <Image src="/git.svg" alt="Github Logo" width={24} height={24} />
            {isLoading ? "Conectando..." : "Continuar com GitHub"}
          </S.GitHubButton>
        </S.GitHubSection>

        <S.GoogleSection>
          <S.GoogleButton onClick={googleLogin} disabled={isLoading}>
            <Image src="/google.svg" alt="Google Logo" width={24} height={24} />
            {isLoading ? "Conectando..." : "Continuar com Google"}
          </S.GoogleButton>
        </S.GoogleSection>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
