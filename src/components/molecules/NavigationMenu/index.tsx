import React, { useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import * as S from "./styles";
import { NavigationMenuProps } from "./types";

const NavigationMenu = ({
  isOpen,
  onClose,
}: NavigationMenuProps): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const shouldHideSignUpButton = useMemo(() => {
    return pathname === "/register";
  }, [pathname]);

  const shouldHideLoginButton = useMemo(() => {
    return pathname === "/login";
  }, [pathname]);

  const handleSignUpClick = () => {
    router.push("/register");
    onClose();
  };

  const handleLoginClick = () => {
    router.push("/login");
    onClose();
  };

  return (
    <>
      <S.MenuOverlay isOpen={isOpen} onClick={onClose} />
      <S.MobileMenu isOpen={isOpen}>
        <S.MobileMenuHeader>
          <S.MobileMenuTitle>Dev Portal</S.MobileMenuTitle>
          <S.CloseButton onClick={onClose} aria-label="Fechar menu">
            ✕
          </S.CloseButton>
        </S.MobileMenuHeader>

        <S.MobileMenuContent>
          <S.MobileNavigation>
            <S.MobileNavLink href="/perfil" onClick={onClose}>
              Feed
            </S.MobileNavLink>
            <S.MobileNavLink href="/" onClick={onClose}>
              Sobre o Projeto
            </S.MobileNavLink>
            <S.MobileNavLink href="/contato" onClick={onClose}>
              Sobre o Criador
            </S.MobileNavLink>
          </S.MobileNavigation>

          <S.MobileAuthButtons>
            {!shouldHideLoginButton && (
              <S.MobileLoginButton onClick={handleLoginClick}>
                Login
              </S.MobileLoginButton>
            )}
            {!shouldHideSignUpButton && (
              <S.MobileSignUpButton onClick={handleSignUpClick}>
                Criar Conta
              </S.MobileSignUpButton>
            )}
          </S.MobileAuthButtons>
        </S.MobileMenuContent>
      </S.MobileMenu>
    </>
  );
};

export default NavigationMenu;
