"use client";
import React from 'react';

import * as S from './styles';

const Footer = (): React.JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterText>
          Criado com ❤️ por{' '}
          <S.AuthorLink href="https://github.com/RyanBasque" target="_blank" rel="noopener noreferrer">
            Ryan Basque
          </S.AuthorLink>
        </S.FooterText>
        <S.Copyright>
          © {currentYear} Dev Portal. Todos os direitos reservados.
        </S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
