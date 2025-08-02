import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Navigation as NavigationIcon, 
  MessageCircle,
  Car, // Ícone para Carro
  Building2 // Ícone genérico para Pontos de Referência
} from 'lucide-react';

const Localizacao = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5589981440908?text=Olá! Gostaria de saber como chegar até a Nova Sinalização.', '_blank');
  };

  const handleMapsDirection = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Av.+Deputado+Raimundo+de+Sá+Urtiga,+Bomba,+Picos-PI', '_blank');
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
              Estamos localizados em Picos-PI, prontos para atender toda a região.
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
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQkFGOLvE4Wvuo8gYjiTc_vXOuWvIlpJ4&q=Av.+Deputado+Raimundo+de+Sá+Urtiga,+Bomba,+Picos-PI"
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
              {/* Card de Endereço */}
              <div className="bg-brand-dark text-white rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-russo text-2xl text-primary mb-4">
                      Endereço Completo
                    </h3>
                    <div className="space-y-2 font-uni-neue text-gray-300">
                      <p className="text-lg font-semibold text-white">Nova Sinalização</p>
                      <p>Av. Deputado Raimundo de Sá Urtiga</p>
                      <p>Bomba, Picos - PI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Como Chegar */}
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
                          Fácil acesso pela BR-316 e BR-407. Utilize o Google Maps para a rota mais rápida.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="font-uni-neue">
                        <h4 className="font-semibold text-brand-dark mb-1">Pontos de Referência</h4>
                        <p className="text-muted-foreground text-sm">
                          Estamos localizados próximos a importantes vias da cidade, facilitando o acesso de qualquer região.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-russo text-xl text-brand-dark mb-2">
                    Precisa de Ajuda para Chegar?
                  </h3>
                  <p className="text-muted-foreground font-uni-neue mb-4">
                    Entre em contato conosco pelo WhatsApp para orientações detalhadas.
                  </p>
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
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