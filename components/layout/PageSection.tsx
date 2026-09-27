import React from 'react';
import { Container } from './Container';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function PageSection({ children, className = '', id }: PageSectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
