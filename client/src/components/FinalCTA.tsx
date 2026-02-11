import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Pronto para ter uma landing page que realmente vende?
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12 text-lg text-brand-beige/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Foco 100% em conversão
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Processo simples e rápido
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Orçamento transparente
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            className="h-16 px-10 rounded-full bg-brand-beige text-brand-dark hover:bg-white text-xl font-bold shadow-xl transition-transform hover:scale-105"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Montar agora minha landing page
          </Button>
          <p className="text-white/40 text-sm">
            Sem compromisso: você monta o pacote e fala comigo direto no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
