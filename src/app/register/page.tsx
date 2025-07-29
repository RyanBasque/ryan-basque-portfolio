"use client";
import React, { useState } from "react";
import Link from "next/link";

import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

import { FormErrors, FormData } from "./types";
import * as S from "./styles";

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nome é obrigatório";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Nome deve ter pelo menos 2 caracteres";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Sobrenome é obrigatório";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Sobrenome deve ter pelo menos 2 caracteres";
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = "Senha deve ter pelo menos 8 caracteres";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGitHubLogin = () => {
    // Aqui você implementaria a lógica de login com GitHub
    // Exemplo usando NextAuth.js ou similar:
    // signIn('github', { callbackUrl: '/dashboard' })

    console.log("Iniciando login com GitHub...");
    alert("Redirecionando para GitHub... (Em desenvolvimento)");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally make an API call to register the user
      console.log("Registering user:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      // Redirect to login or dashboard
      alert("Conta criada com sucesso! Você pode fazer login agora.");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.RegisterContainer>
      <S.RegisterCard>
        <S.Header>
          <Heading level={2} color="primary" align="center">
            Criar Conta
          </Heading>
          <Text variant="body" color="secondary" align="center">
            Junte-se à nossa plataforma e comece a showcasear seus projetos
          </Text>
        </S.Header>

        <S.GitHubSection>
          <S.GitHubButton onClick={handleGitHubLogin}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Continuar com GitHub
          </S.GitHubButton>
        </S.GitHubSection>

        <S.Divider>
          <span>ou</span>
        </S.Divider>

        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              label="Nome"
              placeholder="Seu nome"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              error={!!errors.firstName}
              errorMessage={errors.firstName}
              fullWidth
            />
            <Input
              type="text"
              name="lastName"
              id="lastName"
              label="Sobrenome"
              placeholder="Seu sobrenome"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              error={!!errors.lastName}
              errorMessage={errors.lastName}
              fullWidth
            />
          </S.FormGroup>

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

          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
            fullWidth
          />

          <S.SubmitButton>
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isLoading}
            >
              {isLoading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </S.SubmitButton>

          <S.TermsText>
            Ao criar uma conta, você concorda com nossos{" "}
            <Link href="/terms">Termos de Uso</Link> e{" "}
            <Link href="/privacy">Política de Privacidade</Link>.
          </S.TermsText>
        </S.Form>

        <S.LoginLink>
          <S.LinkText>
            Já tem uma conta? <Link href="/login">Faça login</Link>
          </S.LinkText>
        </S.LoginLink>
      </S.RegisterCard>
    </S.RegisterContainer>
  );
};

export default Register;
