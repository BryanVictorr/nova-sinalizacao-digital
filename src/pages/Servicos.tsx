import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

const Servicos = () => {
  const handleServiceContact = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${serviceName}.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: <StopCircle className="w-12 h-12" />,
      title: "SINALIZAÇÃO HORIZONTAL",
      description: "A sinalização horizontal é composta por marcas, símbolos e legendas aplicados diretamente no pavimento das vias.",
      howItWorks: "Realizada através de pintura com tinta acrílica ou aplicação de materiais termoplásticos, utilizando equipamentos especializados para garantir precisão e durabilidade.",
      value: "Oferece organização visual clara do tráfego, orientando condutores sobre faixas de rolamento, áreas de parada e direcionamento de fluxo.",
      impact: "Mais segurança e fluidez para pedestres e veículos em qualquer tipo de via.",
      benefits: [
        "Organização eficiente do tráfego",
        "Redução significativa de acidentes",
        "Maior fluidez no trânsito urbano"
      ]
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "SINALIZAÇÃO VERTICAL",
      description: "Conjunto de placas e dispositivos instalados verticalmente para informar, regular e advertir usuários das vias.",
      howItWorks: "Instalação de placas confeccionadas em materiais de alta qualidade, com postes galvanizados e fundações adequadas para cada tipo de solo e condição climática.",
      value: "Proporciona informações essenciais sobre regulamentação, advertências e orientações, garantindo comunicação clara e eficaz.",
      impact: "Comunicação visual eficiente que reduz dúvidas e aumenta a segurança viária.",
      benefits: [
        "Informação clara e objetiva",
        "Conformidade com normas técnicas",
        "Durabilidade contra intempéries"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "SINALIZAÇÃO DE SEGURANÇA",
      description: "Equipamentos e dispositivos especializados para proteção em obras, eventos e áreas de risco temporário ou permanente.",
      howItWorks: "Implantação de cones, barreiras, fitas zebradas, cavaletes e outros dispositivos de segurança, seguindo protocolos rigorosos de instalação.",
      value: "Garante proteção máxima para trabalhadores e usuários da via durante intervenções, obras ou situações de emergência.",
      impact: "Proteção total em ambientes de trabalho e situações de risco na via.",
      benefits: [
        "Segurança máxima para trabalhadores",
        "Proteção de usuários da via",
        "Conformidade com normas de segurança"
      ]
    },
    {
      icon: <TrafficCone className="w-12 h-12" />,
      title: "SINALIZAÇÃO SEMAFÓRICA",
      description: "Sistemas de controle de tráfego através de semáforos e controladores eletrônicos inteligentes.",
      howItWorks: "Instalação de equipamentos semafóricos com tecnologia LED, controladores programáveis e sistemas de monitoramento remoto para otimização do fluxo.",
      value: "Controle inteligente do tráfego em cruzamentos e vias, otimizando tempos e reduzindo congestionamentos através de tecnologia avançada.",
      impact: "Controle inteligente que otimiza fluxo e reduz tempos de espera.",
      benefits: [
        "Redução de congestionamentos",
        "Economia de energia com LED",
        "Controle remoto e monitoramento"
      ]
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "PROJETO DE SINALIZAÇÃO",
      description: "Desenvolvimento de projetos técnicos personalizados e estudos de engenharia de tráfego.",
      howItWorks: "Elaboração de projetos através de análise técnica detalhada, estudos de tráfego, levantamentos topográficos e aplicação de normas técnicas vigentes.",
      value: "Soluções customizadas que atendem necessidades específicas de cada via, otimizando recursos e maximizando eficiência operacional.",
      impact: "Projetos sob medida que maximizam eficiência e minimizam custos.",
      benefits: [
        "Análise técnica especializada",
        "Soluções personalizadas",
        "Otimização de recursos"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "MANUTENÇÃO E CONSERVAÇÃO",
      description: "Serviços especializados de manutenção preventiva e corretiva para prolongar vida útil dos sistemas de sinalização.",
      howItWorks: "Execução de cronogramas de manutenção preventiva, inspeções periódicas e intervenções corretivas utilizando materiais de qualidade e mão de obra especializada.",
      value: "Preserva investimentos em sinalização, mantendo eficiência operacional e aparência adequada através de cuidados técnicos especializados.",
      impact: "Economia a longo prazo e manutenção da eficiência operacional.",
      benefits: [
        "Prolongamento da vida útil",
        "Redução de custos operacionais",
        "Manutenção da qualidade visual"
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
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full border-border/50 hover:shadow-card transition-all">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="font-russo text-2xl text-brand-dark">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-uni-neue font-bold text-lg text-brand-dark mb-2">O que é:</h4>
                        <CardDescription className="font-uni-neue">
                          {service.description}
                        </CardDescription>
                      </div>
                      
                      <div>
                        <h4 className="font-uni-neue font-bold text-lg text-brand-dark mb-2">Como é realizada:</h4>
                        <CardDescription className="font-uni-neue">
                          {service.howItWorks}
                        </CardDescription>
                      </div>
                      
                      <div>
                        <h4 className="font-uni-neue font-bold text-lg text-brand-dark mb-2">Valor agregado:</h4>
                        <CardDescription className="font-uni-neue">
                          {service.value}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
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