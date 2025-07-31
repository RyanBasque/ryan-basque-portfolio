"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { getInitials } from "@/utils/getInitials";
import { useTheme } from "@/contexts/ThemeContext";

import { UserProfileProps } from "./types";
import * as S from "./styles";

const UserProfile = ({
  user,
  onLogout,
  showLogoutButton = true,
  variant = "default",
  size = "medium",
}: UserProfileProps): React.JSX.Element => {
  const { isDarkMode } = useTheme();
  const router = useRouter();

  const handleUserInfoClick = () => {
    router.push("/perfil");
  };

  return (
    <S.UserProfileContainer $variant={variant}>
      <S.UserInfo onClick={handleUserInfoClick}>
        <S.UserAvatar $size={size}>
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "Usuário"}
              width={size === "large" ? 48 : 32}
              height={size === "large" ? 48 : 32}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            getInitials(user.name)
          )}
        </S.UserAvatar>
        <S.UserDetails $variant={variant}>
          <S.UserName>{user.name || "Usuário"}</S.UserName>
          {user.email && <S.UserEmail>{user.email}</S.UserEmail>}
        </S.UserDetails>
      </S.UserInfo>
      {showLogoutButton && onLogout && (
        <S.LogoutButton onClick={onLogout} title="Logout" $variant={variant}>
          <Image
            src={isDarkMode ? "/logout-white.svg" : "/logout-black.svg"}
            alt="Logout"
            width={16}
            height={16}
          />
        </S.LogoutButton>
      )}
    </S.UserProfileContainer>
  );
};

export default UserProfile;
