import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Rodovias = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para sinalização rodoviária.', '_blank');
  };

  const features = [
    "Sinalização horizontal com tinta refletiva de alta durabilidade",
    "Placas de sinalização vertical homologadas pelo DNIT",
    "Sistema de drenagem e proteção das sinalizações",
    "Cronograma de execução respeitando o fluxo de tráfego",
    "Certificação e garantia de todos os materiais aplicados"
  ];

  const projectDetails = [
    {
      title: "BR-101 - Trecho Santos/Rio",
      description: "Revitalização completa de 15km de sinalização horizontal e vertical",
      image: project1
    },
    {
      title: "Rodovia dos Bandeirantes",
      description: "Implementação de novo sistema de sinalização inteligente",
      image: project2
    },
    {
      title: "BR-116 - Dutra",
      description: "Modernização da sinalização em 20km de pista dupla",
      image: project1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70">
        <div className="absolute inset-0">
          <img 
            src={project1} 
            alt="Sinalização Rodoviária" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 mb-4 p-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="font-russo text-4xl md:text-6xl mb-6">
              Sinalização Rodoviária
            </h1>
            <p className="text-xl font-uni-neue mb-8 opacity-90">
              Soluções completas para rodovias federais e estaduais, garantindo máxima segurança e fluidez no tráfego de alta velocidade.
            </p>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-russo text-3xl text-brand-dark mb-6">
                Especialistas em Rodovias
              </h2>
              <p className="text-lg text-muted-foreground font-uni-neue mb-6">
                Com mais de uma década de experiência, a Nova Sinalização é referência em projetos rodoviários. 
                Trabalhamos com as principais concessionárias e órgãos públicos do país, aplicando tecnologias 
                de ponta e materiais homologados pelo DNIT.
              </p>
              <p className="text-lg text-muted-foreground font-uni-neue mb-8">
                Nossos projetos contemplam desde a sinalização básica até sistemas inteligentes de gestão de tráfego, 
                sempre priorizando a segurança dos usuários e a durabilidade das soluções implementadas.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-uni-neue">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src={project2} 
                alt="Projeto Rodoviário" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-russo text-xl text-brand-dark mb-3">Resultados Comprovados</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-russo text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground font-uni-neue">Quilômetros Sinalizados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-russo text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground font-uni-neue">Rodovias Atendidas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Gallery */}
          <div className="mb-20">
            <h2 className="font-russo text-3xl text-brand-dark text-center mb-12">
              Principais Projetos Executados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectDetails.map((project, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-russo text-lg text-brand-dark mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-uni-neue">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-2xl text-center">
            <h2 className="font-russo text-3xl text-brand-dark mb-4">
              Pronto para seu Projeto Rodoviário?
            </h2>
            <p className="text-lg text-muted-foreground font-uni-neue mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba uma proposta personalizada para seu projeto de sinalização rodoviária.
            </p>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rodovias;