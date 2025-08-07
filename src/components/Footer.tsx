import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle 
} from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5589981440908', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@novasinalizacao.ind.br');
  };

  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="font-russo text-3xl md:text-4xl mb-4">
              Pronto para Iniciar seu Projeto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-uni-neue">
              Entre em contato conosco e receba um orçamento personalizado para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleEmail}
                className="border-white text-white hover:bg-white hover:text-brand-dark"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo_footer.png" 
                alt="Logo Nova Sinalização" 
                className="h-12 w-auto" 
              />
              <span className="font-russo text-xl">Nova Sinalização</span>
            </div>
            <p className="text-gray-300 font-uni-neue">
              Referência em sinalização viária e engenharia de tráfego, oferecendo soluções completas e inovadoras para seus projetos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nova_logisticaesinalizacao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-russo text-lg mb-6">Navegação</h3>
            <ul className="space-y-3 font-uni-neue">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="/localizacao" className="text-gray-300 hover:text-primary transition-colors">Localização</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-russo text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 font-uni-neue">
              <li><span className="text-gray-300">Sinalização Horizontal</span></li>
              <li><span className="text-gray-300">Sinalização Vertical</span></li>
              <li><span className="text-gray-300">Sinalização de Segurança</span></li>
              <li><span className="text-gray-300">Sinalização Semafórica</span></li>
              <li><span className="text-gray-300">Projetos de Sinalização</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-russo text-lg mb-6">Contato</h3>
            <div className="space-y-4 font-uni-neue">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-gray-300 hover:text-primary transition-colors"><a href="tel:89981440908">(89) 98144-0908</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-300 hover:text-primary transition-colors"><a href="mailto:contato@novasinalizacao.ind.br">contato@novasinalizacao.ind.br</a></p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-300">
                  Av. Deputado Raimundo de Sá Urtiga, Bomba, Picos-PI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-uni-neue">
              © {new Date().getFullYear()} Nova Sinalização. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;