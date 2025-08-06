// src/components/Navigation.tsx

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Localização', href: '/localizacao' },
    { name: 'Contato', href: '/contato' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5589981440908?text=Olá! Gostaria de solicitar um orçamento para sinalização viária.', '_blank');
  };

  // ----- Lógica de Estilo Dinâmico -----
  const headerClasses = isScrolled || !isHomePage
    ? "bg-background/95 backdrop-blur-sm shadow-md"
    : "bg-transparent";

  const linkColor = isScrolled || !isHomePage
    ? "text-foreground hover:text-primary"
    : "text-white hover:text-primary";

  const buttonVariant = isScrolled || !isHomePage
    ? "default" 
    : "outline";
  
  const buttonColor = isScrolled || !isHomePage
    ? ""
    : "border-white text-white hover:bg-white hover:text-brand-dark";
  
  // 1. Lógica para trocar a imagem do logo
  const logoSrc = isScrolled || !isHomePage
    ? "/logo.png" // Logo padrão para fundo sólido
    : "/logo_branca.png"; // Logo branca para fundo transparente

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* 2. Usamos a variável 'logoSrc' para definir a imagem dinamicamente */}
            <img 
              src={logoSrc} 
              alt="Logo Nova Sinalização" 
              className="h-18 w-48 transition-all duration-300" // Largura foi definida explicitamente
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${linkColor} transition-colors font-uni-neue font-semibold`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button variant={buttonVariant} onClick={handleWhatsApp} className={buttonColor}>
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className={`w-6 h-6 ${linkColor}`} /> : <Menu className={`w-6 h-6 ${linkColor}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-background border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-uni-neue font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="whatsapp" onClick={handleWhatsApp} className="mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;