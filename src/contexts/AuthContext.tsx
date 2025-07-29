"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export interface User {
  name?: string;
  email?: string;
  image?: string;
  sessionExpires?: string;
}

interface AuthContextType {
  isLoading: boolean;
  user?: User;
  gitHubLogin: () => Promise<void>;
  googleLogin: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  const logout = async (): Promise<void> => {
    try {
      signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const gitHubLogin = async () => {
    try {
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
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: "/perfil",
        redirect: false,
      });

      if (result?.error) {
        console.error("Google login error:", result.error);
        alert("Erro ao fazer login com Google. Tente novamente.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Erro ao fazer login com Google. Tente novamente.");
    }
  };

  const authData: User = {
    name: session?.user?.name ?? undefined,
    email: session?.user?.email ?? undefined,
    image: session?.user?.image ?? undefined,
    sessionExpires: session?.expires || undefined,
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ? authData : undefined,
        isLoading: status === "loading",
        logout,
        gitHubLogin,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthContextProvider");
  }
  return context;
}
