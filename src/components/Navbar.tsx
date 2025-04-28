import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold game-gradient font-game">
            GameDev Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-item text-foreground hover:text-primary">
            Главная
          </Link>
          <Link to="/games" className="nav-item text-foreground hover:text-primary">
            Игры
          </Link>
          <Link to="/about" className="nav-item text-foreground hover:text-primary">
            О нас
          </Link>
          <Link to="/careers" className="nav-item text-foreground hover:text-primary">
            Карьера
          </Link>
          <Link to="/contact">
            <Button 
              variant="default" 
              className="rounded-full px-6 shadow-md hover:shadow-xl hover:bg-primary/90 transition-all"
            >
              Связаться
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link
              to="/"
              className="py-2 px-4 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/games"
              className="py-2 px-4 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Игры
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/careers"
              className="py-2 px-4 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Карьера
            </Link>
            <Link
              to="/contact"
              className="py-2 px-4 text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button 
                variant="default" 
                className="w-full rounded-full shadow-md"
              >
                Связаться
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
