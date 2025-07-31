import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Aeroporto = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para sinalização aeroportuária.', '_blank');
  };

  const features = [
    "Sinalização de pista com materiais homologados pela ANAC",
    "Sistemas de iluminação LED de alta intensidade",
    "Demarcação de áreas de circulação de veículos de apoio",
    "Sinalização de emergência e evacuação",
    "Conformidade com normas internacionais de aviação"
  ];

  const projectDetails = [
    {
      title: "Aeroporto de Guarulhos - Terminal 3",
      description: "Sistema completo de sinalização para área de circulação",
      image: project1
    },
    {
      title: "Aeroporto Regional de Campinas",
      description: "Modernização da sinalização de pista e pátio de aeronaves",
      image: project2
    },
    {
      title: "Base Aérea de Santos Dumont",
      description: "Sinalização especializada para operações militares e civis",
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
            alt="Sinalização Aeroportuária" 
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
              Sinalização Aeroportuária
            </h1>
            <p className="text-xl font-uni-neue mb-8 opacity-90">
              Soluções especializadas para aeroportos, seguindo rigorosamente as normas da ANAC e padrões internacionais de segurança.
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
                Expertise em Aviação
              </h2>
              <p className="text-lg text-muted-foreground font-uni-neue mb-6">
                A sinalização aeroportuária exige precisão absoluta e conformidade com rígidas normas de segurança. 
                A Nova Sinalização possui certificação especializada para atuar em complexos aeroportuários, 
                garantindo operações seguras para aeronaves e veículos de apoio.
              </p>
              <p className="text-lg text-muted-foreground font-uni-neue mb-8">
                Nossos projetos contemplam desde pequenos aeródromos até grandes complexos aeroportuários, 
                sempre priorizando a máxima visibilidade e durabilidade dos materiais aplicados.
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
                alt="Projeto Aeroportuário" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-russo text-xl text-brand-dark mb-3">Certificações e Credenciais</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-russo text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground font-uni-neue">Aeroportos Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-russo text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground font-uni-neue">Conformidade ANAC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Gallery */}
          <div className="mb-20">
            <h2 className="font-russo text-3xl text-brand-dark text-center mb-12">
              Principais Projetos Aeroportuários
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
              Precisa de Sinalização Aeroportuária?
            </h2>
            <p className="text-lg text-muted-foreground font-uni-neue mb-8 max-w-2xl mx-auto">
              Conte com nossa expertise em projetos aeroportuários. Atendemos desde pequenos aeródromos até grandes complexos.
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

export default Aeroporto;