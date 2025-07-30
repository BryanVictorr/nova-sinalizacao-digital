import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para sinalização viária.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sinalização viária profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-white">
          <h1 className="font-russo text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Transformando Vias em Espaços 
            <span className="text-primary block">Mais Seguros</span>
            e Organizados
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-uni-neue">
            Soluções completas em sinalização viária para projetos públicos e privados com qualidade e segurança garantidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="shadow-2xl"
            >
              Solicite um Orçamento via WhatsApp
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-uni-neue font-bold text-lg">Equipe Certificada</h3>
                <p className="text-gray-300 text-sm">Profissionais técnicos qualificados</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-uni-neue font-bold text-lg">Materiais Homologados</h3>
                <p className="text-gray-300 text-sm">Tecnologias aprovadas e certificadas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-uni-neue font-bold text-lg">Pontualidade</h3>
                <p className="text-gray-300 text-sm">Cumprimento rigoroso de prazos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;