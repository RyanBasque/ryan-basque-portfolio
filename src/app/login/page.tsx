"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

import { LoginFormErrors, LoginFormData } from "./types";
import * as S from "./styles";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof LoginFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGitHubLogin = async () => {
    setIsGitHubLoading(true);

    try {
      // Usar NextAuth.js para fazer login com GitHub
      const result = await signIn("github", {
        callbackUrl: "/perfil",
        redirect: false,
      });

      if (result?.error) {
        console.error("GitHub login error:", result.error);
        alert("Erro ao fazer login com GitHub. Tente novamente.");
      }
    } catch (error) {
      console.error("GitHub login error:", error);
      alert("Erro ao fazer login com GitHub. Tente novamente.");
    } finally {
      setIsGitHubLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simular chamada para API de login
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Aqui você implementaria a lógica de login com credentials
      // Exemplo usando NextAuth.js:
      // const result = await signIn('credentials', {
      //   email: formData.email,
      //   password: formData.password,
      //   redirect: false,
      // });

      console.log("Login attempt:", {
        email: formData.email,
      });

      // Simular sucesso
      alert("Login realizado com sucesso!");
      // Redirecionar para o perfil ou dashboard
      // window.location.href = '/perfil';
    } catch (error) {
      console.error("Login error:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.Header>
          <Heading level={2} color="primary" align="center">
            Fazer Login
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Acesse sua conta e continue criando projetos incríveis
          </Text>
        </S.Header>

        <S.GitHubSection>
          <S.GitHubButton
            onClick={handleGitHubLogin}
            disabled={isGitHubLoading}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {isGitHubLoading ? "Conectando..." : "Continuar com GitHub"}
          </S.GitHubButton>
        </S.GitHubSection>

        <S.Divider>
          <span>ou</span>
        </S.Divider>

        <S.Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            label="E-mail"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            error={!!errors.email}
            errorMessage={errors.email}
            fullWidth
          />

          <Input
            type="password"
            name="password"
            id="password"
            label="Senha"
            placeholder="Sua senha"
            value={formData.password}
            onChange={handleInputChange}
            required
            error={!!errors.password}
            errorMessage={errors.password}
            fullWidth
          />

          <S.SubmitButton>
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </S.SubmitButton>

          <S.ForgotPassword>
            <S.LinkText>
              <Link href="/forgot-password">Esqueceu sua senha?</Link>
            </S.LinkText>
          </S.ForgotPassword>
        </S.Form>

        <S.RegisterLink>
          <S.LinkText>
            Não tem uma conta? <Link href="/register">Criar conta</Link>
          </S.LinkText>
        </S.RegisterLink>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
