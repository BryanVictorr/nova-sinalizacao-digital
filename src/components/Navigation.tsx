import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  // 2. Não precisamos mais do estado 'isOpen', o Sheet controla isso sozinho
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
  
  const logoSrc = isScrolled || !isHomePage
    ? "/logo_preta.png"
    : "/logo_branca.webp";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src={logoSrc} 
              alt="Logo Nova Sinalização" 
              className="h-14 w-44 transition-all duration-300" 
            />
          </Link>

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

          <div className="hidden md:block">
            <Button variant={buttonVariant} onClick={handleWhatsApp} className={buttonColor}>
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* 3. Botão do menu mobile agora usa o SheetTrigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={`w-6 h-6 ${linkColor}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-brand-dark border-l-gray-800 text-white p-6 pt-12">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    // 4. SheetClose fecha o menu ao clicar no link
                    <SheetClose asChild key={item.name}>
                      <Link
                        to={item.href}
                        className="text-xl font-uni-neue font-semibold text-gray-200 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 border-t border-gray-700 pt-6">
                  <Button variant="whatsapp" onClick={handleWhatsApp} className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;