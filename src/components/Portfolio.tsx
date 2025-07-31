import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "Sinalização Rodoviária BR-101",
      description: "Implementação completa de sinalização horizontal e vertical em 15km de rodovia.",
      category: "Rodovias",
      link: "/projetos/rodovias"
    },
    {
      image: project2,
      title: "Complexo Viário Urbano",
      description: "Projeto de sinalização semafórica e viária para centro urbano de grande movimento.",
      category: "Urbano",
      link: "/projetos/urbano"
    },
    {
      image: project1,
      title: "Sinalização Aeroportuária",
      description: "Sistema completo de sinalização para área de circulação de aeroporto regional.",
      category: "Aeroporto",
      link: "/projetos/aeroporto"
    },
    {
      image: project2,
      title: "Via Expressa Municipal",
      description: "Modernização da sinalização em 8km de via expressa com tecnologia LED.",
      category: "Municipal",
      link: "/projetos/municipal"
    }
  ];

  const handleContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de ver mais projetos realizados pela Nova Sinalização.', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-russo text-4xl md:text-5xl text-brand-dark mb-6">
            Projetos de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-uni-neue">
            Conheça alguns dos nossos principais projetos realizados com excelência e comprometimento com a segurança viária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-white float-right" />
                </div>
              </div>
              
              <h3 className="font-russo text-lg text-brand-dark mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-uni-neue">
                {project.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleContact}
          >
            Veja Mais Projetos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;