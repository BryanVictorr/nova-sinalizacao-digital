import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Construction, 
  StopCircle, 
  Shield, 
  TrafficCone, 
  Ruler, 
  Wrench, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <StopCircle className="w-8 h-8" />,
      title: "Sinalização Horizontal",
      description: "Demarcação de faixas, zebras e símbolos no pavimento com materiais de alta durabilidade e visibilidade.",
      features: ["Organização do tráfego", "Redução de acidentes", "Maior fluidez viária"]
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Sinalização Vertical",
      description: "Placas de trânsito, regulamentação e advertência com padrões técnicos rigorosos.",
      features: ["Informação clara", "Segurança garantida", "Conformidade com normas"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sinalização de Segurança",
      description: "Equipamentos e dispositivos para proteção em obras e áreas de risco.",
      features: ["Proteção total", "Equipamentos certificados", "Instalação profissional"]
    },
    {
      icon: <TrafficCone className="w-8 h-8" />,
      title: "Sinalização Semafórica",
      description: "Instalação e manutenção de semáforos com tecnologia moderna e eficiente.",
      features: ["Controle inteligente", "Tecnologia avançada", "Manutenção preventiva"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Projeto de Sinalização",
      description: "Desenvolvimento de projetos técnicos personalizados para cada necessidade.",
      features: ["Soluções customizadas", "Análise técnica", "Otimização de recursos"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção e Conservação",
      description: "Serviços de manutenção preventiva e corretiva para prolongar vida útil.",
      features: ["Durabilidade estendida", "Economia de custos", "Serviço especializado"]
    }
  ];

  const handleServiceContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de sinalização viária.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-russo text-4xl md:text-5xl text-brand-dark mb-6">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-uni-neue">
            Oferecemos serviços completos em sinalização viária com tecnologia de ponta e equipe especializada para garantir segurança e eficiência em suas vias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="font-russo text-xl text-brand-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground font-uni-neue">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="font-uni-neue">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={handleServiceContact}
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            onClick={handleServiceContact}
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;