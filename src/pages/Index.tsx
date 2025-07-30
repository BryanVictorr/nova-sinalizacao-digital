import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesSection />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
