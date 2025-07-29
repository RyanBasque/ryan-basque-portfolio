"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface UserData {
  name: string;
  email: string;
  image: string;
  githubId?: string;
}

interface AuthContextData {
  user: UserData | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  sessionExpires: string | null;
}

interface AuthContextType {
  auth: AuthContextData;
  updateUser: (userData: UserData) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (session?.user) {
      const userData: UserData = {
        name: session.user.name || "",
        email: session.user.email || "",
        image: session.user.image || "",
        githubId: session.user.githubId,
      };
      // setUser(userData);

      // Salvar no localStorage para persistência
      // localStorage.setItem("auth_user", JSON.stringify(userData));

      console.log("🔐 Dados do usuário salvos no contexto:", userData);
      console.log("⏰ Sessão expira em:", session.expires);
    } else {
      setUser(null);
      localStorage.removeItem("auth_user");
    }
  }, [session]);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedUser = localStorage.getItem("auth_user");
    if (savedUser && !session) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        localStorage.removeItem("auth_user");
      }
    }
  }, [session]);

  const updateUser = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem("auth_user", JSON.stringify(userData));
  };

  const clearAuth = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  const authData: AuthContextData = {
    user,
    isLoading: status === "loading",
    isAuthenticated: !!session && !!user,
    sessionExpires: session?.expires || null,
  };

  return (
    <AuthContext.Provider
      value={{
        auth: authData,
        updateUser,
        clearAuth,
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
