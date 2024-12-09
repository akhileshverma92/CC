import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  active?: boolean;
}

export function NavLink({ href, children, mobile = false, active = false }: NavLinkProps) {
  const baseStyles = "transition-colors";
  const activeStyles = active ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600";
  const mobileStyles = mobile ? "block px-2 py-1" : "";

  return (
    <Link
      to={href}
      className={`${baseStyles} ${activeStyles} ${mobileStyles}`}
    >
      {children}
    </Link>
  );
}