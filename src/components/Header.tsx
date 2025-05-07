import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './shared/Button';
import Container from './shared/Container';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <a
            href="/"
            className={`text-2xl font-bold ${
              isScrolled ? 'text-indigo-700' : 'text-white'
            }`}
          >
            <img src="/images/seupsico_transparent.png" alt="Logo SeuPsico" width="150" height="100" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#como-funciona"
              className={`hover:text-indigo-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              onClick={handleNavClick}
            >
              Como Funciona
            </a>
            <a
              href="#beneficios"
              className={`hover:text-indigo-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              onClick={handleNavClick}
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className={`hover:text-indigo-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              onClick={handleNavClick}
            >
              Depoimentos
            </a>
            {/* <a
              href="#precos"
              className={`hover:text-indigo-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'
              }`}
              onClick={handleNavClick}
            >
              Preços
            </a> */}
           <Button
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              href="https://app.seupsico.com.br/login"
              className={
                !isScrolled ? 'text-white border-white hover:bg-white/10' : ''
              }
            >
              Criar Minha Página
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-5 pb-2 absolute top-full left-0 right-0 bg-white shadow-md">
            <nav className="flex flex-col space-y-4 px-6">
              <a
                href="#como-funciona"
                className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
                onClick={handleNavClick}
              >
                Como Funciona
              </a>
              <a
                href="#beneficios"
                className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
                onClick={handleNavClick}
              >
                Benefícios
              </a>
              <a
                href="#depoimentos"
                className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
                onClick={handleNavClick}
              >
                Depoimentos
              </a>
              {/* <a
                href="#precos"
                className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
                onClick={handleNavClick}
              >
                Preços
              </a> */}
              <Button
                variant="primary"
                size="sm"
                href="app.seupsico.com.br/login"
                className="w-full justify-center"
              >
                Criar Minha Página
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
