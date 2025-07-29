"use client";
import React from 'react';

import * as S from './styles';

const Header = (): React.JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          <S.LogoText>Dev Portal</S.LogoText>
        </S.Logo>
      {/*         
        <S.Navigation>
          <S.NavLink href="/">Home</S.NavLink>
          <S.NavLink href="/about">Sobre</S.NavLink>
        </S.Navigation> */}
        
        <S.AuthButtons>
          <S.LoginButton>
            Login
          </S.LoginButton>
          <S.SignUpButton>
            Criar Conta
          </S.SignUpButton>
        </S.AuthButtons>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
