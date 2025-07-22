'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { HomeContainer, HeroSection, NavigationSection } from './styles';

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Heading level={1} color="primary" align="center">
          Ryan Basque Portfolio
        </Heading>
        <Text variant="subtitle" color="secondary" align="center">
          Welcome to my portfolio! I&apos;m a passionate developer creating modern web applications.
        </Text>
        <Text variant="body" color="muted" align="center">
          This project demonstrates atomic design principles with TypeScript, Next.js, and styled-components.
        </Text>
      </HeroSection>

      <NavigationSection>
        <Link href="/about-me">
          <Button variant="primary" size="large">
            About Me
          </Button>
        </Link>
        <Button variant="outline" size="large">
          View Projects
        </Button>
        <Button variant="secondary" size="large">
          Contact
        </Button>
      </NavigationSection>
    </HomeContainer>
  );
}
