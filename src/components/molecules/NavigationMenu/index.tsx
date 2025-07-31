import React from "react";
import Link from "next/link";

import { useAuth } from "@/contexts/AuthContext";
import UserProfile from "@/components/atoms/UserProfile";
import Icon from "@/components/atoms/Icon";

import { useCurrentRoute } from "@/hooks/useCurrentRoute";

import * as S from "./styles";
import { NavigationMenuProps } from "./types";

const NavigationMenu = ({
  isOpen,
  onClose,
}: NavigationMenuProps): React.JSX.Element => {
  const { user, logout } = useAuth();
  const { shouldShowLogin } = useCurrentRoute();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <>
      <S.MenuOverlay $isOpen={isOpen} onClick={onClose} />
      <S.MobileMenu $isOpen={isOpen}>
        <S.MobileMenuHeader>
          <S.MobileMenuTitle>Dev Portal</S.MobileMenuTitle>
          <S.CloseButton onClick={onClose} aria-label="Fechar menu">
            ✕
          </S.CloseButton>
        </S.MobileMenuHeader>

        <S.MobileMenuContent>
          <S.MobileNavSection>
            <S.MobileNavSectionTitle>Navegação</S.MobileNavSectionTitle>
            <S.MobileNavigation>
              <S.MobileNavLink href="/feed" onClick={onClose}>
                <S.NavLinkIcon>
                  <Icon name="feed" />
                </S.NavLinkIcon>
                Feed
              </S.MobileNavLink>
              <S.MobileNavLink href="/" onClick={onClose}>
                <S.NavLinkIcon>
                  <Icon name="project" />
                </S.NavLinkIcon>
                Sobre o Projeto
              </S.MobileNavLink>
              <S.MobileNavLink href="/perfil" onClick={onClose}>
                <S.NavLinkIcon>
                  <Icon name="user" />
                </S.NavLinkIcon>
                Sobre o Criador
              </S.MobileNavLink>
            </S.MobileNavigation>
          </S.MobileNavSection>

          <div style={{ marginTop: "auto" }}>
            {!user && shouldShowLogin && (
              <S.MobileAuthButtons>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <S.MobileLoginButton onClick={onClose}>
                    Entrar
                  </S.MobileLoginButton>
                </Link>
              </S.MobileAuthButtons>
            )}

            {user && user.email && (
              <S.UserProfileSection>
                <UserProfile
                  user={user}
                  onLogout={handleLogout}
                  variant="menu"
                  size="large"
                />
              </S.UserProfileSection>
            )}

            <S.MenuFooter>
              <S.MenuVersion>Developer Portal</S.MenuVersion>
            </S.MenuFooter>
          </div>
        </S.MobileMenuContent>
      </S.MobileMenu>
    </>
  );
};

export default NavigationMenu;
