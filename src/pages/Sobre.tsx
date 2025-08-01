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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="relative bg-brand-dark rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-russo text-2xl text-primary mb-4">Missão:</h3>
                <p className="font-uni-neue text-white/90 leading-relaxed">
                  Proporcionar soluções completas em sinalização viária, com inovação, 
                  qualidade e eficiência, garantindo segurança no trânsito e contribuindo 
                  para o desenvolvimento urbano sustentável.
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-3xl flex items-center justify-center">
                <Target className="w-12 h-12 text-brand-dark" />
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-brand-dark rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-russo text-2xl text-primary mb-4">Visão:</h3>
                <p className="font-uni-neue text-white/90 leading-relaxed">
                  Ser reconhecida como a principal referência em sinalização viária no 
                  Brasil, destacando-se pela excelência técnica, inovação contínua e impacto 
                  positivo na mobilidade urbana e rodoviária.
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-3xl flex items-center justify-center">
                <Eye className="w-12 h-12 text-brand-dark" />
              </div>
            </div>

            {/* Values */}
            <div className="relative bg-brand-dark rounded-3xl p-8 text-white overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="relative z-10">
                <h3 className="font-russo text-2xl text-primary mb-4">Valores:</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-uni-neue font-bold text-white mb-2">• Compromisso com a segurança</h4>
                    <p className="font-uni-neue text-white/80 text-sm">
                      Nosso foco é salvar vidas por meio de sinalizações eficientes e visíveis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-uni-neue font-bold text-white mb-2">• Excelência técnica</h4>
                    <p className="font-uni-neue text-white/80 text-sm">
                      Buscamos a mais alta qualidade em todos os serviços e materiais utilizados.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-uni-neue font-bold text-white mb-2">• Inovação</h4>
                    <p className="font-uni-neue text-white/80 text-sm">
                      Investimos constantemente em novas tecnologias e processos inteligentes.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-uni-neue font-bold text-white">• Sustentabilidade</h4>
                      <p className="font-uni-neue text-white/80 text-xs">
                        Adotamos práticas que respeitam o meio ambiente e promovem o uso responsável de recursos.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-uni-neue font-bold text-white">• Ética e transparência</h4>
                      <p className="font-uni-neue text-white/80 text-xs">
                        Atuamos com integridade em todos os relacionamentos e contratos.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-uni-neue font-bold text-white">• Valorização das pessoas</h4>
                    <p className="font-uni-neue text-white/80 text-xs">
                      Incentivamos o crescimento profissional e pessoal da nossa equipe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-3xl flex items-center justify-center">
                <Heart className="w-12 h-12 text-brand-dark" />
              </div>
            </div>
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