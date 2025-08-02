import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import fleetImage from '@/assets/fleet-image.jpg';
import { Target, Eye, Gem, ShieldCheck, Users, Award, Clock } from 'lucide-react';
import ValueCard from '@/components/ValueCard';
import ValuesListCard from '@/components/ValuesListCard';

const Sobre = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer melhor a Nova Sinalização.', '_blank');
  };

  const valoresItems = [
    { title: "Compromisso com a segurança", text: "Nosso foco é salvar vidas por meio de sinalizações eficientes e visíveis." },
    { title: "Excelência técnica", text: "Buscamos a mais alta qualidade em todos os serviços e materiais utilizados." },
    { title: "Inovação", text: "Investimos constantemente em novas tecnologias e processos inteligentes." },
    { title: "Sustentabilidade", text: "Adotamos práticas que respeitam o meio ambiente e promovem o uso responsável de recursos." },
    { title: "Ética e transparência", text: "Atuamos com integridade em todos os relacionamentos e contratos." },
    { title: "Valorização das pessoas", text: "Incentivamos o crescimento profissional e pessoal da nossa equipe." }
  ];

  // Dados para o novo card de Diferenciais
  const diferenciaisItems = [
    { title: "Equipe técnica com engenheiros", text: "e especialistas certificados." },
    { title: "Materiais e tecnologias homologados", text: "pelos órgãos competentes (ABNT, CONTRAN, DENATRAN)." },
    { title: "Soluções sob medida para obras", text: "públicas, condomínios, áreas industriais e comerciais." },
    { title: "Atuação ágil com foco em", text: "resultados e cumprimento de prazos." }
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
                  A Nova Sinalização é uma empresa referência no setor de engenharia de tráfego, e soluções em segurança viária comprometida com a qualidade, inovação e sustentabilidade.
                  Com atuação em projetos públicos e privados, entregamos soluções completas e personalizadas que promovem mobilidade eficiente e proteção para todos os usuários das vias.
                </p>
                <p>
                  Com uma equipe técnica altamente qualificada, tecnologia de ponta e materiais homologados, somos 
                  especialistas em Sinalização Horizontal, Vertical, Dispositivos de Segurança, Sinalização Semafórica e Inteligente, 
                  Projetos e Consultoria Técnica, Manutenção e Serviços Especiais.
                </p>
                <p>
                  Nosso propósito é transformar vias urbanas e rodovias em espaços mais seguros e organizados, contribuindo 
                  para a redução de acidentes e a valorização da infraestrutura viária.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ValueCard
              icon={<Target />}
              title="Missão"
              description="Proporcionar soluções completas em sinalização viária, com inovação, qualidade e eficiência, garantindo segurança no trânsito e contribuindo para o desenvolvimento urbano sustentável."
            />
            <ValueCard
              icon={<Eye />}
              title="Visão"
              description="Ser reconhecida como a principal referência em sinalização viária no Brasil, destacando-se pela excelência técnica, inovação contínua e impacto positivo na mobilidade urbana e rodoviária."
            />
          </div>
          <ValuesListCard
            icon={<Gem />}
            title="Valores"
            items={valoresItems}
          />
          <ValuesListCard
            icon={<ShieldCheck />}
            title="Diferenciais da Nova Sinalização"
            items={diferenciaisItems}
          />
        </div>
      </section>
    <Footer />
  </div>
  );
};

export default Sobre;