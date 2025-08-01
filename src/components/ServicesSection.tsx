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

        {/* Card Especial - Sinalização Horizontal */}
        <div className="mb-12">
          <div className="bg-brand-dark rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Conteúdo de texto */}
              <div className="p-8 lg:p-12 text-white">
                <h3 className="font-russo text-2xl lg:text-3xl text-primary mb-6">
                  Sinalização Horizontal
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-uni-neue font-bold text-lg mb-2">O que é:</h4>
                    <p className="font-uni-neue text-sm text-gray-300">
                      Pintura de solo em vias urbanas e rodoviárias com tintas de alta durabilidade.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-uni-neue font-bold text-lg mb-2">Como é realizada:</h4>
                    <p className="font-uni-neue text-sm text-gray-300">
                      Aplicação com equipamentos de última geração, garantindo alinhamento perfeito.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-uni-neue font-bold text-lg mb-2">Valor agregado:</h4>
                    <p className="font-uni-neue text-sm text-gray-300">
                      Melhora a organização do tráfego e reduz o risco de acidentes.
                    </p>
                  </div>
                </div>
                
                {/* Caixa de vantagens */}
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="font-uni-neue font-bold text-brand-dark mb-3">Vantagens</h4>
                  <ul className="space-y-1 text-sm text-brand-dark font-uni-neue">
                    <li>• Mais segurança e fluidez no trânsito</li>
                    <li>• Organização do fluxo viário</li>
                    <li>• Materiais de longa durabilidade</li>
                  </ul>
                </div>
              </div>
              
              {/* Imagem */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src="/lovable-uploads/f877734c-a565-428f-9733-1b39f5419ee6.png" 
                  alt="Sinalização Horizontal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards dos outros serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(1).map((service, index) => (
            <Card key={index + 1} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
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