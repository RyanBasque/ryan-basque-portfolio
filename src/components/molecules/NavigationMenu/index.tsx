import React from "react";
import * as S from "./styles";
import { NavigationMenuProps } from "./types";

const NavigationMenu = ({
  isOpen,
  onClose,
}: NavigationMenuProps): React.JSX.Element => {
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
            <S.MobileLoginButton onClick={onClose}>Login</S.MobileLoginButton>
            <S.MobileSignUpButton onClick={onClose}>
              Criar Conta
            </S.MobileSignUpButton>
          </S.MobileAuthButtons>
        </S.MobileMenuContent>
      </S.MobileMenu>
    </>
  );
};

export default NavigationMenu;
