import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  Loader2
} from 'lucide-react';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mblkpykp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve. Obrigado!",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Erro na resposta do servidor');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar a mensagem.",
        description: "Por favor, tente novamente ou entre em contato por outro canal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/5589981440908?text=Olá! Gostaria de entrar em contato com a Nova Sinalização.', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@novasinalizacao.ind.br');
  };

  const handlePhone = () => {
    window.open('tel:5589981440908');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 pt-36 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-russo text-4xl md:text-6xl text-brand-dark mb-6">
              Fale com Nossos Especialistas
            </h1>
            <p className="text-xl text-muted-foreground font-uni-neue">
              Estamos prontos para atender suas necessidades em sinalização viária. Entre em contato conosco!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-dark text-white rounded-2xl p-6 text-center group cursor-pointer transition-all hover:-translate-y-2" onClick={handleWhatsApp}>
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"><MessageCircle className="w-8 h-8 text-primary" /></div>
              <h3 className="font-russo text-xl text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 font-uni-neue mb-2">Atendimento rápido e direto</p>
              <p className="font-uni-neue font-semibold text-primary">Clique para ser encaminhado</p>
            </div>
            <div className="bg-brand-dark text-white rounded-2xl p-6 text-center group cursor-pointer transition-all hover:-translate-y-2" onClick={handlePhone}>
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"><Phone className="w-8 h-8 text-primary" /></div>
              <h3 className="font-russo text-xl text-white mb-2">Telefone</h3>
              <p className="text-gray-300 font-uni-neue mb-2">Ligue para nós</p>
              <p className="font-uni-neue font-semibold text-primary">(89) 98144-0908</p>
            </div>
            <div className="bg-brand-dark text-white rounded-2xl p-6 text-center group cursor-pointer transition-all hover:-translate-y-2" onClick={handleEmail}>
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"><Mail className="w-8 h-8 text-primary" /></div>
              <h3 className="font-russo text-xl text-white mb-2">E-mail</h3>
              <p className="text-gray-300 font-uni-neue mb-2">Envie sua mensagem</p>
              <p className="font-uni-neue font-semibold text-primary break-all">contato@novasinalizacao.ind.br</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-russo text-2xl text-brand-dark">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-uni-neue font-semibold">Nome *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Seu nome completo" className="font-uni-neue"/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-uni-neue font-semibold">Telefone</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="(XX) 99999-9999" className="font-uni-neue"/>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-uni-neue font-semibold">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="seu@email.com" className="font-uni-neue"/>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-uni-neue font-semibold">Mensagem *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder="Descreva seu projeto ou necessidade..." rows={6} className="font-uni-neue"/>
                  </div>
                  
                  <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-russo text-2xl text-brand-dark">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        Av. Deputado Raimundo de Sá Urtiga, Bomba, Picos-PI
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">Telefone</h4>
                      <p className="text-muted-foreground">
                        (89) 98144-0908
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">E-mail</h4>
                      <p className="text-muted-foreground">
                        contato@novasinalizacao.ind.br
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-2">Horário de Atendimento</h4>
                      <div className="text-muted-foreground">
                        <p className="font-semibold text-brand-dark/90">Segunda a Sexta</p>
                        <p className="pl-2">Manhã: 08:00h às 12:00h</p>
                        <p className="pl-2">Tarde: 14:00h às 18:00h</p>
                        
                        <p className="font-semibold text-brand-dark/90 mt-2">Sábado</p>
                        <p className="pl-2">Manhã: 08:00h às 12:00h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;