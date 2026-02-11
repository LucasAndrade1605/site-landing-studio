import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "copy",
    title: "Copywriting estratégico",
    price: 600,
    features: ["Títulos e subtítulos persuasivos", "Foco em conversão", "Tom de voz alinhado"]
  },
  {
    id: "design",
    title: "Design profissional (UI/UX)",
    price: 800,
    features: ["Layout responsivo", "Identidade visual", "Hierarquia visual"]
  },
  {
    id: "dev",
    title: "Desenvolvimento / Implementação",
    price: 900,
    features: ["Plataforma escolhida", "Performance otimizada", "SEO básico"]
  },
  {
    id: "integrations",
    title: "Integrações essenciais",
    price: 300,
    features: ["WhatsApp e Formulários", "Pixel (Meta/Google)", "E-mail marketing"]
  },
  {
    id: "hosting",
    title: "Configuração de domínio/hospedagem",
    price: 250,
    features: ["Conexão de domínio", "Configuração SSL", "Setup inicial"]
  },
  {
    id: "support",
    title: "Suporte e ajustes pós-lançamento",
    price: 200,
    features: ["15 dias de suporte", "Ajustes de texto/layout", "Correções pontuais"]
  }
];

export function ServiceBuilder() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const total = services
    .filter(s => selectedServices.includes(s.id))
    .reduce((acc, curr) => acc + curr.price, 0);

  const handleWhatsAppClick = () => {
    const selectedNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(", ");
    
    const message = `Olá, Lucas! Montei meu pacote de landing page com estes serviços: ${selectedNames}. Valor estimado total: R$ ${total},00. Gostaria de um orçamento certeiro.`;
    
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-brand-light py-24" id="calculator">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Monte sua landing page e veja o valor estimado
          </h2>
          <p className="text-gray-600">
            Selecione abaixo os serviços que você precisa. O valor total será atualizado automaticamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:items-start">
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={cn(
                  "p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md",
                  selectedServices.includes(service.id)
                    ? "border-brand-dark bg-white shadow-md"
                    : "border-transparent bg-white shadow-sm hover:border-brand-dark/20"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-brand-dark">{service.title}</h3>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                    selectedServices.includes(service.id)
                      ? "bg-brand-dark border-brand-dark text-white"
                      : "border-gray-300 bg-white"
                  )}>
                    {selectedServices.includes(service.id) && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <div className="text-2xl font-bold text-brand-dark mb-4">
                  R$ {service.price},00
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Seu pacote de landing page</h3>
              
              <div className="space-y-3 mb-8 min-h-[100px]">
                {selectedServices.length === 0 ? (
                  <p className="text-white/40 text-sm italic">Nenhum serviço selecionado</p>
                ) : (
                  services
                    .filter(s => selectedServices.includes(s.id))
                    .map(s => (
                      <div key={s.id} className="flex justify-between text-sm">
                        <span className="text-white/80">{s.title}</span>
                        <span className="font-mono text-white/60">R$ {s.price}</span>
                      </div>
                    ))
                )}
              </div>

              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-white/60">Total estimado</span>
                  <span className="text-3xl font-bold text-brand-beige">R$ {total},00</span>
                </div>
                <p className="text-xs text-white/40 mt-2">
                  *Valor médio estimado. Sujeito a análise do projeto.
                </p>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                disabled={selectedServices.length === 0}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar para o WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
