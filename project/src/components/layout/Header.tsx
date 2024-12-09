import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../navigation/NavLink';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Cawnporiya Coders</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink 
                key={item.path}
                href={item.path}
                active={location.pathname === item.path}
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  href={item.path}
                  mobile
                  active={location.pathname === item.path}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="primary">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}