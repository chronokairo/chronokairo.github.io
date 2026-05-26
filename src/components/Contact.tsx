import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: data.message,
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Erro",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@chronokairo.com.br",
      link: "mailto:contato@chronokairo.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (92) 98124-4044",
      link: "tel:+5592981244044",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Manaus, AM - Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
            Vamos <span className="font-normal italic">conversar</span>
          </h2>
          <p className="text-foreground/80 text-sm">
            Pronto para transformar suas ideias em realidade? Entre em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="border border-border rounded-lg p-8 bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 text-foreground/80">Nome</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                      className="bg-background border-border h-11 rounded hover:border-foreground/30 focus:border-foreground/50 transition-colors text-foreground text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 text-foreground/80">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      className="bg-background border-border h-11 rounded hover:border-foreground/30 focus:border-foreground/50 transition-colors text-foreground text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2 text-foreground/80">Telefone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(92) 99999-9999"
                    required
                    className="bg-background border-border h-11 rounded hover:border-foreground/30 focus:border-foreground/50 transition-colors text-foreground text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2 text-foreground/80">Mensagem</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                    className="bg-background border-border min-h-[140px] resize-none rounded hover:border-foreground/30 focus:border-foreground/50 transition-colors text-foreground text-sm"
                  />
                </div>
                <Button type="submit" className="w-full h-11 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 border-0 transition-colors cursor-pointer" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-serif font-bold mb-6 text-foreground">Informações</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors text-foreground">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{info.title}</div>
                      <div className="font-serif font-bold text-foreground group-hover:underline transition-all">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4 text-foreground">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-serif font-bold">Horário</h3>
              </div>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Segunda - Sexta</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Sábado</span>
                  <span>9h - 13h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
