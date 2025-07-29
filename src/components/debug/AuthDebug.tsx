"use client";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "next-auth/react";
import styled from "styled-components";
import { colors, spacing, borderRadius, fontSize } from "@/assets/styles";

const DebugContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${colors.background.paper};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  max-width: 300px;
  font-size: ${fontSize.sm};
  z-index: 1000;
  color: ${colors.text.primary};
`;

const LogoutButton = styled.button`
  background: ${colors.status.error};
  color: white;
  border: none;
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  margin-top: ${spacing.sm};
  width: 100%;
`;

export default function AuthDebug() {
  const { auth, clearAuth } = useAuth();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    clearAuth();
  };

  return (
    <DebugContainer>
      <h4>🔐 Auth Debug</h4>
      <p>
        <strong>Autenticado:</strong>{" "}
        {auth.isAuthenticated ? "✅ Sim" : "❌ Não"}
      </p>
      <p>
        <strong>Loading:</strong> {auth.isLoading ? "⏳ Sim" : "✅ Não"}
      </p>

      {auth.user && (
        <>
          <p>
            <strong>Nome:</strong> {auth.user.name}
          </p>
          <p>
            <strong>Email:</strong> {auth.user.email}
          </p>
          <p>
            <strong>GitHub ID:</strong> {auth.user.githubId || "N/A"}
          </p>
          {auth.user.image && (
            <img
              src={auth.user.image}
              alt="Avatar"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          )}
        </>
      )}

      {auth.sessionExpires && (
        <p>
          <strong>Expira:</strong>{" "}
          {new Date(auth.sessionExpires).toLocaleString()}
        </p>
      )}

      {auth.isAuthenticated && (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      )}
    </DebugContainer>
  );
}
