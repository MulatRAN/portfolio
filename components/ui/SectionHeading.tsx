import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function SectionHeading({ children, level = 2, className = '' }: SectionHeadingProps) {
  const styles = {
    1: 'text-3xl md:text-4xl font-bold text-slate-900 mb-6',
    2: 'text-2xl md:text-3xl font-bold text-slate-900 mb-4',
    3: 'text-xl md:text-2xl font-semibold text-slate-900 mb-3',
  };

  const combinedClassName = `${styles[level]} ${className}`;

  if (level === 1) {
    return <h1 className={combinedClassName}>{children}</h1>;
  }

  if (level === 3) {
    return <h3 className={combinedClassName}>{children}</h3>;
  }

  return <h2 className={combinedClassName}>{children}</h2>;
}
