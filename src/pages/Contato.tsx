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
  Send
} from 'lucide-react';
import { useState } from 'react';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de entrar em contato com a Nova Sinalização.', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@novasinalizacao.com.br');
  };

  const handlePhone = () => {
    window.open('tel:+551199999999');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
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

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-border/50 hover:shadow-card transition-all group cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="font-russo text-xl text-brand-dark">WhatsApp</h3>
                <p className="text-muted-foreground font-uni-neue">
                  Atendimento rápido e direto
                </p>
                <p className="font-uni-neue font-semibold text-green-500">
                  (11) 99999-9999
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border/50 hover:shadow-card transition-all group cursor-pointer" onClick={handlePhone}>
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-russo text-xl text-brand-dark">Telefone</h3>
                <p className="text-muted-foreground font-uni-neue">
                  Ligue para nós
                </p>
                <p className="font-uni-neue font-semibold text-primary">
                  (11) 3333-3333
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border/50 hover:shadow-card transition-all group cursor-pointer" onClick={handleEmail}>
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-russo text-xl text-brand-dark">E-mail</h3>
                <p className="text-muted-foreground font-uni-neue">
                  Envie sua mensagem
                </p>
                <p className="font-uni-neue font-semibold text-primary break-all">
                  contato@novasinalizacao.com.br
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="font-uni-neue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-uni-neue font-semibold">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="font-uni-neue"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-uni-neue font-semibold">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                      className="font-uni-neue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-uni-neue font-semibold">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={6}
                      className="font-uni-neue"
                    />
                  </div>
                  
                  <Button type="submit" variant="default" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
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
                        Rua da Sinalização, 123<br />
                        Vila Industrial - São Paulo/SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">Telefones</h4>
                      <p className="text-muted-foreground">
                        (11) 99999-9999 (WhatsApp)<br />
                        (11) 3333-3333 (Fixo)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">E-mail</h4>
                      <p className="text-muted-foreground">
                        contato@novasinalizacao.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="font-uni-neue">
                      <h4 className="font-semibold text-brand-dark mb-1">Horário de Atendimento</h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-russo text-xl text-brand-dark mb-2">
                    Atendimento via WhatsApp
                  </h3>
                  <p className="text-muted-foreground font-uni-neue mb-4">
                    Para um atendimento mais rápido, entre em contato pelo WhatsApp
                  </p>
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
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