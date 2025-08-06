import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Construction, 
  StopCircle, 
  Shield, 
  TrafficCone, 
  Ruler, 
  Wrench, 
  Sparkles, // Ícone para o novo serviço
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

const Servicos = () => {
  const handleServiceContact = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${serviceName}.`;
    window.open(`https://wa.me/5589981440908?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- CONTEÚDO ATUALIZADO AQUI ---
  const services = [
    {
      icon: <StopCircle className="w-12 h-12" />,
      title: "Sinalização Horizontal",
      description: "Pintura de solo em vias urbanas e rodoviárias com tintas de alta durabilidade (acrílica, termoplástica ou cold plastic).",
      howItWorks: "Aplicação com equipamentos de última geração, garantindo alinhamento perfeito e excelente refletividade noturna.",
      value: "Melhora a organização do tráfego, aumenta a segurança de pedestres e motoristas e reduz o risco de acidentes.",
      impact: "Mais segurança e fluidez no trânsito com marcas viárias de alta performance.",
      benefits: [
        "Organização do fluxo viário",
        "Redução de acidentes",
        "Materiais de longa durabilidade para menor manutenção"
      ]
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Sinalização Vertical",
      description: "Fabricação e instalação de placas regulamentares, de advertência, indicativas e educativas.",
      howItWorks: "Produção com materiais homologados (alumínio, chapa galvanizada), pintura retrorrefletiva e instalação em postes galvanizados.",
      value: "Garante conformidade com o CTB, orienta e regula o fluxo de veículos, reduzindo infrações e aumentando a eficiência viária.",
      impact: "Placas que orientam, educam e salvam vidas nas vias urbanas e rodoviárias.",
      benefits: [
        "Conformidade com o CTB",
        "Alta visibilidade diurna e noturna",
        "Estruturas resistentes às intempéries"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Dispositivos de Segurança Viária",
      description: "Instalação de equipamentos de proteção como guard-rails, barreiras New Jersey, tachões e amortecedores de impacto.",
      howItWorks: "Fixação com tecnologia que assegura resistência a impactos, conforme normas do CONTRAN.",
      value: "Protege vidas em áreas críticas, reduz danos em acidentes e contribui para um trânsito mais seguro.",
      impact: "Tecnologia que protege vidas em pontos críticos das estradas.",
      benefits: [
        "Amortecedores de impacto certificados",
        "Guard-rails e barreiras que minimizam danos em colisões",
        "Soluções para áreas urbanas e rodovias"
      ]
    },
    {
      icon: <TrafficCone className="w-12 h-12" />,
      title: "Sinalização Semafórica e Inteligente",
      description: "Implantação de sistemas semafóricos convencionais e inteligentes com sensores e botoeiras.",
      howItWorks: "Programação e instalação de semáforos LED de alta visibilidade, painéis de mensagens variáveis (PMV) e integração com CFTV.",
      value: "Otimiza o fluxo de veículos e pedestres, reduz congestionamentos e amplia a eficiência do trânsito.",
      impact: "Sistemas inteligentes para um trânsito mais seguro e eficiente.",
      benefits: [
        "Semáforos LED de alta performance",
        "Integração com sensores e painéis dinâmicos",
        "Redução de congestionamentos e aumento da segurança"
      ]
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Projetos e Consultoria Técnica",
      description: "Desenvolvimento de Planos de Sinalização Viária (PSV) e assessoria para adequação às normas de trânsito.",
      howItWorks: "Elaboração de estudos técnicos por engenheiros especializados e uso de softwares de mobilidade urbana.",
      value: "Garante que o município ou empresa esteja em conformidade com a legislação, evitando multas e melhorando a mobilidade.",
      impact: "Planejamento estratégico para cidades mais seguras e organizadas.",
      benefits: [
        "Planos de Sinalização Viária (PSV) completos",
        "Assessoria para órgãos públicos e privados",
        "Garantia de conformidade com normas técnicas"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Manutenção e Reforço de Sinalização",
      description: "Serviços de revitalização e substituição de sinalizações horizontais, verticais e dispositivos danificados.",
      howItWorks: "Inspeção periódica e aplicação de novas camadas de pintura ou troca de placas e dispositivos.",
      value: "Mantém a eficiência e visibilidade da sinalização, prolonga a vida útil e garante segurança contínua.",
      impact: "Sinalizações sempre visíveis e eficientes para proteger vidas.",
      benefits: [
        "Revitalização de pinturas e placas",
        "Substituição rápida de dispositivos danificados",
        "Inspeções periódicas com garantia de qualidade"
      ]
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Serviços Especiais e Personalizados",
      description: "Sinalização para áreas específicas como obras, eventos, áreas industriais, turísticas e condomínios.",
      howItWorks: "Desenvolvimento sob medida com adaptações conforme as necessidades do cliente.",
      value: "Soluções personalizadas que elevam a organização e segurança em espaços privados e públicos, agregando valor estético e funcional.",
      impact: "Soluções sob medida para cada necessidade, de obras a eventos.",
      benefits: [
        "Sinalização para áreas privadas, turísticas e industriais",
        "Projetos personalizados com agilidade e eficiência",
        "Atendimento exclusivo para demandas específicas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-russo text-4xl md:text-6xl text-brand-dark mb-6">
              Soluções Completas para Sinalização Viária
            </h1>
            <p className="text-xl text-muted-foreground font-uni-neue">
              Conheça todos os nossos serviços especializados em engenharia de tráfego e sinalização viária
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} bg-brand-dark text-white rounded-2xl p-8 h-full flex flex-col`}>
                  <div className="text-center mb-6">
                    <div className="mx-auto mb-6 p-4 bg-primary/20 rounded-full text-primary inline-block">
                      {service.icon}
                    </div>
                    <h2 className="font-russo text-2xl text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="font-uni-neue font-bold text-lg text-white mb-2">O que é:</h4>
                      <p className="font-uni-neue text-gray-300">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-uni-neue font-bold text-lg text-white mb-2">Como é realizada:</h4>
                      <p className="font-uni-neue text-gray-300">
                        {service.howItWorks}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-uni-neue font-bold text-lg text-white mb-2">Valor agregado:</h4>
                      <p className="font-uni-neue text-gray-300">
                        {service.value}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                      <h3 className="font-russo text-xl text-brand-dark mb-4">
                        {service.impact}
                      </h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-uni-neue text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="default" 
                      size="lg"
                      className="w-full"
                      onClick={() => handleServiceContact(service.title)}
                    >
                      Saiba Mais e Peça um Orçamento
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-russo text-3xl md:text-4xl text-brand-dark mb-6">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-uni-neue">
              Nossa equipe está pronta para desenvolver o projeto ideal para suas necessidades específicas.
            </p>
            <Button 
              variant="default" 
              size="xl"
              onClick={() => handleServiceContact('projeto personalizado')}
            >
              Solicitar Orçamento Personalizado
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;