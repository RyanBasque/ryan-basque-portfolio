"use client";
import React from "react";
import Image from "next/image";

import { getInitials } from "@/utils/getInitials";

import { UserProfileProps } from "./types";
import * as S from "./styles";

const UserProfile = ({
  user,
  onLogout,
  showLogoutButton = true,
  variant = "default",
  size = "medium",
}: UserProfileProps): React.JSX.Element => {
  return (
    <S.UserProfileContainer $variant={variant}>
      <S.UserInfo>
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
          </svg>
        </S.LogoutButton>
      )}
    </S.UserProfileContainer>
  );
};

export default UserProfile;
