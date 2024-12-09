import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon, 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center px-8 py-3 rounded-full transition-colors';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
}