"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavigationMenu from "@/components/molecules/NavigationMenu";

import { HeaderProps } from "./types";
import * as S from "./styles";

const Header = ({
  showMenu = true,
  user = null,
}: HeaderProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getInitials = (name?: string) => {
    if (!name) return "Não Definido";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
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
          <S.LogoText>Dev Portal</S.LogoText>
        </S.Logo>

        {!user && (
          <S.AuthButtons $isMenuOpen={isMenuOpen}>
            <S.LoginButton>Login</S.LoginButton>
            <Link href="/register">
              <S.SignUpButton>Criar Conta</S.SignUpButton>
            </Link>
          </S.AuthButtons>
        )}

        {user && (
          <S.UserInfo $isMenuOpen={isMenuOpen}>
            <S.UserAvatar>
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={32}
                  height={32}
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                getInitials(user.name)
              )}
            </S.UserAvatar>
            <S.UserDetails>
              <S.UserName>{user.name}</S.UserName>
              {user.email && <S.UserEmail>{user.email}</S.UserEmail>}
            </S.UserDetails>
          </S.UserInfo>
        )}
      </S.HeaderContent>

      {showMenu && <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu} />}
    </S.HeaderContainer>
  );
};

export default Header;
