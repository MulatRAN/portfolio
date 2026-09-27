import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export function LinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: LinkButtonProps) {
  const baseStyles = 'font-medium rounded transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

  const variantStyles = {
    primary: `
      bg-amber-500 text-white
      hover:bg-amber-600 hover:shadow-sm
      active:bg-amber-700 active:translate-y-0.5
      focus:ring-amber-500
    `,
    secondary: `
      bg-transparent text-slate-700 border border-slate-300
      hover:bg-slate-100 hover:border-slate-400
      active:bg-slate-200
      focus:ring-slate-300
    `,
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
