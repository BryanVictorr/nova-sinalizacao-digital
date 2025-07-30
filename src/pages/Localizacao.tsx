import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Navigation as NavigationIcon, 
  Car,
  Train,
  Bus,
  MessageCircle
} from 'lucide-react';

const Localizacao = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber como chegar até a Nova Sinalização.', '_blank');
  };

  const handleMapsDirection = () => {
    window.open('https://maps.google.com/?q=Rua+da+Sinalização,+123+Vila+Industrial+São+Paulo+SP', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-russo text-4xl md:text-6xl text-brand-dark mb-6">
              Nossa Localização
            </h1>
            <p className="text-xl text-muted-foreground font-uni-neue">
              Estamos estrategicamente localizados para melhor atender toda a região metropolitana
            </p>
          </div>
        </div>
      </section>

      {/* Map and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="space-y-6">
              <Card className="border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-96 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6426489841894!2d-46.65814968538273!3d-23.543089967657474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583831cb2677%3A0x8af8f7b8a95a1c47!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt!2sbr!4v1635959884707!5m2!1spt!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={handleMapsDirection}
              >
                <NavigationIcon className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </Button>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-russo text-2xl text-brand-dark mb-4">
                        Endereço Completo
                      </h3>
                      <div className="space-y-2 font-uni-neue text-muted-foreground">
                        <p className="text-lg font-semibold text-brand-dark">Nova Sinalização</p>
                        <p>Rua da Sinalização, 123</p>
                        <p>Vila Industrial</p>
                        <p>São Paulo - SP</p>
                        <p>CEP: 01234-567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-uni-neue font-semibold text-brand-dark mb-4">
                      Pontos de Referência:
                    </h4>
                    <ul className="space-y-2 font-uni-neue text-muted-foreground">
                      <li>• Próximo ao Shopping Industrial</li>
                      <li>• Atrás do posto de combustível Petrobras</li>
                      <li>• A 2 quarteirões da Estação Vila Industrial</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Transport Options */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-russo text-xl text-brand-dark mb-6">
                    Como Chegar
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Car className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="font-uni-neue">
                        <h4 className="font-semibold text-brand-dark mb-1">De Carro</h4>
                        <p className="text-muted-foreground text-sm">
                          Estacionamento gratuito disponível. Fácil acesso pela Marginal Tietê e Radial Leste.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Train className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="font-uni-neue">
                        <h4 className="font-semibold text-brand-dark mb-1">Metrô/Trem</h4>
                        <p className="text-muted-foreground text-sm">
                          Estação Vila Industrial (Linha 11-Coral) - 5 minutos a pé
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Bus className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="font-uni-neue">
                        <h4 className="font-semibold text-brand-dark mb-1">Ônibus</h4>
                        <p className="text-muted-foreground text-sm">
                          Linhas 123, 456 e 789 - Ponto na Rua da Sinalização
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-russo text-xl text-brand-dark mb-2">
                    Precisa de Ajuda para Chegar?
                  </h3>
                  <p className="text-muted-foreground font-uni-neue mb-4">
                    Entre em contato conosco pelo WhatsApp para orientações detalhadas
                  </p>
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-russo text-3xl md:text-4xl text-brand-dark mb-6">
              Área de Atendimento
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-uni-neue">
              Atendemos toda a região metropolitana de São Paulo e interior
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-uni-neue font-semibold text-brand-dark mb-1">Grande SP</h3>
                <p className="text-sm text-muted-foreground">Todas as regiões</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-uni-neue font-semibold text-brand-dark mb-1">ABC Paulista</h3>
                <p className="text-sm text-muted-foreground">Completo</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-uni-neue font-semibold text-brand-dark mb-1">Interior SP</h3>
                <p className="text-sm text-muted-foreground">Principais cidades</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-uni-neue font-semibold text-brand-dark mb-1">Outros Estados</h3>
                <p className="text-sm text-muted-foreground">Sob consulta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Localizacao;