"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import NavigationMenu from "@/components/molecules/NavigationMenu";

import { HeaderProps } from "./types";
import * as S from "./styles";

const Header = ({
  showMenu = true,
  user = null,
}: HeaderProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const shouldHideSignUpButton = useMemo(() => {
    return pathname === "/register";
  }, [pathname]);

  const shouldHideLoginButton = useMemo(() => {
    return pathname === "/login";
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignUpClick = () => {
    router.push("/register");
  };

  const handleLoginClick = () => {
    router.push("/login");
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

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          {showMenu && (
            <S.HamburgerButton onClick={toggleMenu} aria-label="Menu">
              <S.HamburgerLine isOpen={isMenuOpen} index={0} />
              <S.HamburgerLine isOpen={isMenuOpen} index={1} />
              <S.HamburgerLine isOpen={isMenuOpen} index={2} />
            </S.HamburgerButton>
          )}
          <S.LogoText onClick={handleHomeClick}>Dev Portal</S.LogoText>
        </S.Logo>

        {!user && (
          <S.AuthButtons isMenuOpen={isMenuOpen}>
            {!shouldHideLoginButton && (
              <S.LoginButton onClick={handleLoginClick}>Login</S.LoginButton>
            )}
            {!shouldHideSignUpButton && (
              <S.SignUpButton onClick={handleSignUpClick}>
                Criar Conta
              </S.SignUpButton>
            )}
          </S.AuthButtons>
        )}

        {user && (
          <S.UserInfo isMenuOpen={isMenuOpen}>
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
