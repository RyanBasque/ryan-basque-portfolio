"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { useAuth } from "@/contexts/AuthContext";

import { useCurrentRoute } from "@/hooks/useCurrentRoute";

import NavigationMenu from "@/components/molecules/NavigationMenu";
import UserProfile from "@/components/atoms/UserProfile";
import ThemeToggle from "@/components/atoms/ThemeToggle";

import { HeaderProps } from "./types";
import * as S from "./styles";

const Header = ({ showMenu = true }: HeaderProps): React.JSX.Element => {
  const { user } = useAuth();
  const { shouldShowLogin, isLoginPage } = useCurrentRoute();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          {showMenu && (
            <S.HamburgerButton onClick={toggleMenu} aria-label="Menu">
              <S.HamburgerLine $isOpen={isMenuOpen} $index={0} />
              <S.HamburgerLine $isOpen={isMenuOpen} $index={1} />
              <S.HamburgerLine $isOpen={isMenuOpen} $index={2} />
            </S.HamburgerButton>
          )}
          <Link href="/" style={{ textDecoration: "none" }}>
            <S.LogoText>Dev Portal</S.LogoText>
          </Link>
        </S.Logo>

        <S.ThemeAndLoginWrapper>
          {!user && shouldShowLogin && !isLoginPage && (
            <S.AuthButtons $isMenuOpen={isMenuOpen}>
              <Link href="/login">
                <S.LoginButton>Entrar</S.LoginButton>
              </Link>
            </S.AuthButtons>
          )}

          <S.AccountAndTheameWrapper>
            <ThemeToggle />
            <S.FexContainer>
              {user && (
                <S.UserInfo $isMenuOpen={isMenuOpen}>
                  <UserProfile
                    user={user}
                    onLogout={handleLogout}
                    variant="default"
                    size="medium"
                  />
                </S.UserInfo>
              )}
            </S.FexContainer>
          </S.AccountAndTheameWrapper>
        </S.ThemeAndLoginWrapper>
      </S.HeaderContent>

      {showMenu && <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu} />}
    </S.HeaderContainer>
  );
};

export default Header;
