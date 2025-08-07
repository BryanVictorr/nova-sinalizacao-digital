import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

// Função para criar IDs para URL
const createSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

interface ServicesSectionProps {
  variant?: 'simple' | 'full';
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ variant = 'full' }) => {
  const services = [
    {
      icon: <StopCircle className="w-8 h-8" />,
      title: "Sinalização Horizontal",
      description: "Pintura de solo em vias urbanas e rodoviárias com tintas de alta durabilidade (acrílica, termoplástica ou cold plastic).",
      execution: "Aplicação com equipamentos de última geração, garantindo alinhamento perfeito e excelente refletividade noturna.",
      value: "Melhora a organização do tráfego e reduz o risco de acidentes.",
      benefits: ["Mais segurança e fluidez no trânsito", "Organização do fluxo viário", "Redução de acidentes", "Materiais de longa durabilidade"]
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Sinalização Vertical",
      description: "Fabricação e instalação de placas regulamentares, de advertência, indicativas e educativas.",
      execution: "Produção com materiais homologados (alumínio, chapa galvanizada), pintura retrorrefletiva e instalação em postes galvanizados",
      value: " Garante conformidade com o CTB, orienta e regula o fluxo de veículos, reduzindo infrações e aumentando a eficiência viária",
      benefits: ["Placas que orientam, educam e salvam vidas", "Conformidade com o CTB", "Alta visibilidade diurna e noturna", "Estruturas resistentes às intempéries"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Viária",
      description: " Instalação de equipamentos de proteção como guard-rails, barreiras New Jersey, tachões e amortecedores de impacto",
      execution: "Fixação com tecnologia que assegura resistência a impactos, conforme normas do CONTRAN",
      value: "Protege vidas em áreas críticas, reduz danos em acidentes e contribui para um trânsito mais seguro.       ",
      benefits: ["Tecnologia que protege vidas em pontos críticos das estradas", "Guard-rails e barreiras que minimizam danos", "Amortecedores de impacto certificados", "Soluções para áreas urbanas e rodovias"]
    },
    {
      icon: <TrafficCone className="w-8 h-8" />,
      title: "Sinalização Semafórica",
      description: "Implantação de sistemas semafóricos convencionais e inteligentes com sensores e botoeiras.",
      execution: "Programação e instalação de semáforos LED de alta visibilidade, painéis de mensagens variáveis (PMV) e integração com CFTV.",
      value: "Otimiza o fluxo de veículos e pedestres, reduz congestionamentos e amplia a eficiência do trânsito.",
      benefits: ["Sistemas para um trânsito mais seguro", "Semáforos LED de alta performance", "Integração com sensores e painéis dinâmicos", "Redução de congestionamentos"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Projetos e Consultoria",
      description: " Desenvolvimento de Planos de Sinalização Viária (PSV) e assessoria para adequação às normas de trânsito.",
      execution: "Elaboração de estudos técnicos por engenheiros especializados e uso de softwares de mobilidade urbana.",
      value: "Garante que o município ou empresa esteja em conformidade com a legislação, evitando multas e melhorando a mobilidade.",
      benefits: [" Planejamento estratégico para cidades seguras", "Planos de Sinalização Viária (PSV) completos", "Assessoria para órgãos públicos e privados", "Garantia de conformidade com normas técnicas"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção e Reforço",
      description: "Serviços de revitalização e substituição de sinalizações horizontais, verticais e dispositivos danificados.",
      execution: "Inspeção periódica e aplicação de novas camadas de pintura ou troca de placas e dispositivos.",
      value: " Mantém a eficiência e visibilidade da sinalização, prolonga a vida útil e garante segurança contínua.",
      benefits: ["Sinalizações sempre visíveis e eficientes", " Revitalização de pinturas e placas", "Substituição rápida de dispositivos danificados", " Inspeções periódicas com garantia de qualidade"]
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Serviços Especiais e Personalizados",
        description: "Sinalização para áreas específicas como obras, eventos, áreas industriais, turísticas e condomínios.",
        execution: "Desenvolvimento sob medida com adaptações conforme as necessidades do cliente.",
        value: "Soluções personalizadas que elevam a organização e segurança em espaços privados e públicos, agregando valor estético e funcional.",
        benefits: [ "Soluções sob medida para cada necessidade, de obras a eventos", "Sinalização para áreas privadas, turísticas e industriais", "Projetos personalizados com agilidade e eficiência", "Atendimento exclusivo para demandas específicas" ]
    }
  ];

  const ViewServicesButton = () => (
    <div className="text-center mt-12">
      <Link to="/servicos">
        <Button variant="default" size="lg">
          Ver Todos os Serviços
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
    </div>
  );

  if (variant === 'simple') {
    return (
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-russo text-4xl md:text-5xl text-brand-dark mb-6">Nossas Soluções</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-uni-neue">
              Oferecemos serviços completos em sinalização viária com tecnologia de ponta e equipe especializada para garantir segurança e eficiência em suas vias.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                to={`/servicos#${createSlug(service.title)}`}
                key={index} 
                className="bg-brand-dark rounded-xl p-6 flex items-center h-full group transition-all hover:bg-primary/90 hover:-translate-y-2">
                <div className="p-3 bg-primary/20 rounded-full text-primary mr-4 group-hover:bg-brand-dark group-hover:text-primary transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-russo text-xl text-white flex-grow">{service.title}</h3>
              </Link>
            ))}
          </div>
          <ViewServicesButton />
        </div>
      </section>
    );
  }

  // Versão 'full' (padrão)
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-russo text-4xl md:text-5xl text-brand-dark mb-6">Nossas Soluções</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-uni-neue">
            Oferecemos serviços completos em sinalização viária com tecnologia de ponta e equipe especializada para garantir segurança e eficiência em suas vias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-dark rounded-xl overflow-hidden p-8 text-white flex flex-col">
              <h3 className="font-russo text-2xl text-primary mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-full text-primary">{service.icon}</div>
                {service.title}
              </h3>
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">O que é:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">{service.description}</p>
                </div>
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">Como é realizada:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">{service.execution}</p>
                </div>
                <div>
                  <h4 className="font-uni-neue font-bold text-lg mb-2">Valor agregado:</h4>
                  <p className="font-uni-neue text-sm text-gray-300">{service.value}</p>
                </div>
              </div>
              <div className="bg-primary p-4 rounded-lg mt-auto">
                <h4 className="font-uni-neue font-bold text-brand-dark mb-3">Vantagens</h4>
                <ul className="space-y-1 text-sm text-brand-dark font-uni-neue">
                  {service.benefits.map((benefit, idx) => (<li key={idx}>• {benefit}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <ViewServicesButton />
      </div>
    </section>
  );
};

export default ServicesSection;