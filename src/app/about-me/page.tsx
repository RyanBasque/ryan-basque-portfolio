'use client';

import React from 'react';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Card from '@/components/molecules/Card';

import { AboutMeContainer, ButtonContainer, CardsContainer } from './styles';

const AboutMePage: React.FC = () => {
  return (
    <AboutMeContainer>
      <Heading level={1} color="primary" align="center">
        About Me
      </Heading>
      
      <Text variant="subtitle" color="secondary" align="center">
        Welcome to my portfolio! I&apos;m a passionate developer with expertise in 
        modern web technologies including React, TypeScript, and Next.js. 
        I believe in creating clean, efficient, and user-friendly applications.
      </Text>
      
      <Text variant="body" color="secondary" align="center">
        My journey in software development has led me to specialize in 
        front-end development, with a strong focus on component-based 
        architecture and atomic design principles.
      </Text>

      <CardsContainer>
        <Card
          title="Frontend Development"
          description="Specialized in React, TypeScript, and modern CSS frameworks. Passionate about creating responsive and accessible user interfaces."
          buttonText="View Projects"
        />
        <Card
          title="Component Architecture"
          description="Expert in atomic design principles and component-based development. Building scalable and maintainable UI systems."
          buttonText="Learn More"
        />
        <Card
          title="Modern Tooling"
          description="Proficient with Next.js, styled-components, and modern development tools. Always staying up-to-date with industry best practices."
          buttonText="See Skills"
        />
      </CardsContainer>

      <ButtonContainer>
        <Button variant="primary" size="medium">
          Contact Me
        </Button>
        <Button variant="outline" size="medium">
          View All Projects
        </Button>
      </ButtonContainer>
    </AboutMeContainer>
  );
};

export default AboutMePage;
