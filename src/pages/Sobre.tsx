import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';
import fleetImage from '@/assets/fleet-image.jpg';

const Sobre = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer melhor a Nova Sinalização.', '_blank');
  };

  const values = [
    "Compromisso com a segurança viária",
    "Qualidade em todos os serviços prestados",
    "Inovação tecnológica constante",
    "Responsabilidade ambiental",
    "Transparência nas relações",
    "Excelência no atendimento ao cliente"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-russo text-4xl md:text-6xl text-brand-dark mb-6">
              Sobre a Nova Sinalização
            </h1>
            <p className="text-xl text-muted-foreground font-uni-neue">
              Referência em engenharia de tráfego e sinalização viária há mais de uma década
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-russo text-3xl md:text-4xl text-brand-dark mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 font-uni-neue text-muted-foreground">
                <p>
                  A Nova Sinalização é uma empresa referência no setor de engenharia de tráfego, 
                  especializada em soluções completas de sinalização viária. Fundada com o propósito 
                  de tornar as vias mais seguras e organizadas, desenvolvemos projetos inovadores 
                  que atendem tanto o setor público quanto o privado.
                </p>
                <p>
                  Nossa trajetória é marcada pela constante busca por excelência técnica e 
                  atendimento personalizado. Contamos com uma equipe altamente qualificada e 
                  equipamentos de última geração para garantir a qualidade e eficiência em 
                  todos os nossos projetos.
                </p>
                <p>
                  Ao longo dos anos, consolidamos nossa posição como uma das principais empresas 
                  do setor, sempre priorizando a segurança, a qualidade e a inovação em nossos 
                  serviços.
                </p>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="mt-8"
                onClick={handleWhatsApp}
              >
                Fale Conosco
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={fleetImage} 
                alt="Frota Nova Sinalização" 
                className="rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center p-8 border-border/50 hover:shadow-card transition-all">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-russo text-2xl text-brand-dark">Missão</h3>
                <p className="text-muted-foreground font-uni-neue">
                  Proporcionar soluções inovadoras e seguras em sinalização viária, 
                  contribuindo para a organização do tráfego e a redução de acidentes, 
                  sempre com qualidade e pontualidade.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center p-8 border-border/50 hover:shadow-card transition-all">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-russo text-2xl text-brand-dark">Visão</h3>
                <p className="text-muted-foreground font-uni-neue">
                  Ser reconhecida como a empresa líder em sinalização viária no país, 
                  referência em qualidade, inovação e responsabilidade social.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center p-8 border-border/50 hover:shadow-card transition-all">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-russo text-2xl text-brand-dark">Valores</h3>
                <div className="space-y-2">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-uni-neue text-muted-foreground text-left">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-russo text-3xl md:text-4xl text-brand-dark mb-6">
              Números que Falam por Nós
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="font-russo text-3xl text-brand-dark mb-2">500+</div>
              <div className="text-muted-foreground font-uni-neue">Projetos Realizados</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="font-russo text-3xl text-brand-dark mb-2">15+</div>
              <div className="text-muted-foreground font-uni-neue">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="font-russo text-3xl text-brand-dark mb-2">98%</div>
              <div className="text-muted-foreground font-uni-neue">Entregas no Prazo</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="font-russo text-3xl text-brand-dark mb-2">100%</div>
              <div className="text-muted-foreground font-uni-neue">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;