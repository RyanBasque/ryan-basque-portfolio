"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { useAuth } from "@/contexts/AuthContext";

import { useCurrentRoute } from "@/hooks/useCurrentRoute";

import NavigationMenu from "@/components/molecules/NavigationMenu";

import { getInitials } from "@/utils/getInitials";

import { HeaderProps } from "./types";
import * as S from "./styles";

const Header = ({
  showMenu = true,
}: Omit<HeaderProps, "user" | "showLogin">): React.JSX.Element => {
  const { auth } = useAuth();
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

        {!auth.isAuthenticated && shouldShowLogin && !isLoginPage && (
          <S.AuthButtons $isMenuOpen={isMenuOpen}>
            <Link href="/login">
              <S.LoginButton>Login</S.LoginButton>
            </Link>
          </S.AuthButtons>
        )}

        {auth.isAuthenticated && auth.user && (
          <S.UserInfo $isMenuOpen={isMenuOpen}>
            <S.UserAvatar>
              {auth.user.image ? (
                <Image
                  src={auth.user.image}
                  alt={auth.user.name || "Usuário"}
                  width={32}
                  height={32}
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                getInitials(auth.user.name)
              )}
            </S.UserAvatar>
            <S.UserDetails>
              <S.UserName>{auth.user.name}</S.UserName>
              {auth.user.email && <S.UserEmail>{auth.user.email}</S.UserEmail>}
            </S.UserDetails>
            <S.LogoutButton onClick={handleLogout} title="Logout">
              <span>↗</span>
            </S.LogoutButton>
          </S.UserInfo>
        )}
      </S.HeaderContent>

      {showMenu && <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu} />}
    </S.HeaderContainer>
  );
};

export default Header;
