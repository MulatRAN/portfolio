import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed inline-flex items-center justify-center';

  const variantStyles = {
    primary: `
      bg-amber-500 text-white
      hover:bg-amber-600 hover:shadow-sm
      active:bg-amber-700 active:translate-y-0.5
      focus:ring-amber-500
      disabled:bg-amber-300 disabled:hover:bg-amber-300 disabled:active:translate-y-0
    `,
    secondary: `
      bg-transparent text-slate-700 border border-slate-300
      hover:bg-slate-100 hover:border-slate-400
      active:bg-slate-200
      focus:ring-slate-300
      disabled:text-slate-400 disabled:border-slate-200 disabled:hover:bg-transparent
    `,
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
