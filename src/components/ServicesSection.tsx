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
      description: "Pintura de solo em vias urbanas e rodoviárias com tintas de alta durabilidade.",
      execution: "Aplicação com equipamentos de última geração, garantindo alinhamento perfeito.",
      value: "Melhora a organização do tráfego e reduz o risco de acidentes.",
      benefits: ["Mais segurança e fluidez no trânsito", "Organização do fluxo viário", "Materiais de longa durabilidade"]
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Sinalização Vertical",
      description: "Placas de trânsito, regulamentação e advertência com padrões técnicos rigorosos.",
      execution: "Instalação de placas com materiais de alta qualidade e postes galvanizados.",
      value: "Proporciona informações essenciais garantindo comunicação clara e eficaz.",
      benefits: ["Informação clara e objetiva", "Conformidade com normas técnicas", "Durabilidade contra intempéries"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sinalização de Segurança",
      description: "Equipamentos e dispositivos para proteção em obras e áreas de risco.",
      execution: "Implantação de cones, barreiras e dispositivos seguindo protocolos rigorosos.",
      value: "Garante proteção máxima para trabalhadores e usuários durante intervenções.",
      benefits: ["Segurança máxima para trabalhadores", "Proteção de usuários da via", "Conformidade com normas"]
    },
    {
      icon: <TrafficCone className="w-8 h-8" />,
      title: "Sinalização Semafórica",
      description: "Sistemas de controle de tráfego com semáforos e controladores inteligentes.",
      execution: "Instalação com tecnologia LED e controladores programáveis com monitoramento remoto.",
      value: "Controle inteligente otimizando tempos e reduzindo congestionamentos.",
      benefits: ["Redução de congestionamentos", "Economia de energia com LED", "Controle remoto e monitoramento"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Projeto de Sinalização",
      description: "Desenvolvimento de projetos técnicos personalizados para cada necessidade.",
      execution: "Elaboração através de análise técnica detalhada e estudos de tráfego.",
      value: "Soluções customizadas que atendem necessidades específicas de cada via.",
      benefits: ["Análise técnica especializada", "Soluções personalizadas", "Otimização de recursos"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção e Conservação",
      description: "Serviços de manutenção preventiva e corretiva para prolongar vida útil.",
      execution: "Cronogramas de manutenção preventiva e intervenções com materiais de qualidade.",
      value: "Preserva investimentos mantendo eficiência operacional e aparência adequada.",
      benefits: ["Prolongamento da vida útil", "Redução de custos operacionais", "Manutenção da qualidade visual"]
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
            <div key={index} className="bg-brand-dark rounded-xl overflow-hidden p-8 text-white">
              <h3 className="font-russo text-2xl text-primary mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-full text-primary">
                  {service.icon}
                </div>
                {service.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">O que é:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">Como é realizada:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">
                    {service.execution}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">Valor agregado:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">
                    {service.value}
                  </p>
                </div>
              </div>
              
              {/* Caixa de vantagens */}
              <div className="bg-primary p-4 rounded-lg">
                <h4 className="font-uni-neue font-bold text-brand-dark mb-3">Vantagens</h4>
                <ul className="space-y-1 text-sm text-brand-dark font-uni-neue">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
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