import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';

  const variantClasses = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg',
    outline:
      'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;