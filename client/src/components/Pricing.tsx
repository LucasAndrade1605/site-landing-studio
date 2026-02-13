import { useState } from "react";
import { MessageSquare, Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceItem {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax: number;
  features: string[];
  isBase?: boolean; 
}

interface PredefinedPlan {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax: number;
  maxTotalValue: number; // The sum of individual items
  features: string[];
  includedItems: string[];
  discountColor: string;
}

export function Pricing() {
  const [selectedMode, setSelectedMode] = useState<"custom" | "plan">("plan");
  const [selectedItems, setSelectedItems] = useState<string[]>(["landing-page"]);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>("plan-essencial");

  const items: PriceItem[] = [
    {
      id: "landing-page",
      title: "Landing Page Simples",
      description: "Estrutura + Design + Responsivo",
      priceMin: 850,
      priceMax: 1500,
      features: ["Design exclusivo", "Responsivo (Mobile-first)", "Até 5 seções"],
      isBase: true,
    },
    {
      id: "copywriting",
      title: "Copywriting Completo",
      description: "Textos persuasivos focados em venda",
      priceMin: 250,
      priceMax: 550,
      features: ["Estrutura de oferta", "Headlines magnéticas", "Gatilhos mentais"],
    },
    {
      id: "integracoes",
      title: "Integrações Essenciais",
      description: "WhatsApp, formulário, e-mail",
      priceMin: 300,
      priceMax: 600,
      features: ["Botão WhatsApp", "Formulário de contato", "Disparo de e-mail"],
    },
    {
      id: "dominio",
      title: "Domínio e Hospedagem",
      description: "Configuração completa",
      priceMin: 200,
      priceMax: 400,
      features: ["Configuração de domínio", "SSL (Site seguro)", "Hospedagem rápida"],
    },
  ];

  const plans: PredefinedPlan[] = [
    {
      id: "plan-essencial",
      title: "Plano Essencial",
      description: "Para começar com o pé direito",
      priceMin: 1200,
      priceMax: 1700,
      maxTotalValue: 2450,
      features: ["Landing Page Simples", "Copywriting Completo", "Domínio e Hospedagem"],
      includedItems: ["landing-page", "copywriting", "dominio"],
      discountColor: "bg-emerald-500",
    },
    {
      id: "plan-profissional",
      title: "Plano Profissional",
      description: "Para quem quer vender com estratégia",
      priceMin: 1400,
      priceMax: 2200,
      maxTotalValue: 3050,
      features: ["Landing Page Simples", "Copywriting Completo", "Integrações", "Domínio e Hospedagem"],
      includedItems: ["landing-page", "copywriting", "integracoes", "dominio"],
      discountColor: "bg-purple-500",
    },
  ];

  const toggleItem = (id: string) => {
    if (selectedMode === "plan") {
      setSelectedMode("custom");
      setSelectedPlanId(null);
      const newSelection = ["landing-page"];
      if (id !== "landing-page") newSelection.push(id);
      setSelectedItems(newSelection);
      return;
    }

    if (id === "landing-page") {
      if (!selectedItems.includes("landing-page")) {
         setSelectedItems([...selectedItems, "landing-page"]);
      }
      return; 
    }

    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const selectPlan = (planId: string) => {
    setSelectedMode("plan");
    setSelectedPlanId(planId);
    setSelectedItems([]); 
  };

  let totalMin = 0;
  let totalMax = 0;
  let currentSelectionTitle = "";
  let currentSelectionItems: string[] = [];
  let savings = 0;

  if (selectedMode === "plan" && selectedPlanId) {
    const plan = plans.find(p => p.id === selectedPlanId);
    if (plan) {
      totalMin = plan.priceMin;
      totalMax = plan.priceMax;
      currentSelectionTitle = plan.title;
      currentSelectionItems = plan.features;
      savings = Math.round(((plan.maxTotalValue - plan.priceMax) / plan.maxTotalValue) * 100);
    }
  } else {
    currentSelectionTitle = "Personalizado";
    selectedItems.forEach(itemId => {
      const item = items.find(i => i.id === itemId);
      if (item) {
        totalMin += item.priceMin;
        totalMax += item.priceMax;
        currentSelectionItems.push(item.title);
      }
    });
  }

  const handleWhatsAppClick = () => {
    let message = "";
    
    if (selectedMode === "plan" && selectedPlanId) {
        const plan = plans.find(p => p.id === selectedPlanId);
        message = `Olá! Gostaria de um orçamento para o *${plan?.title}*.\n\nItens inclusos:\n${plan?.features.map(f => `• ${f}`).join('\n')}\n\nFaixa de valor estimada: R$ ${totalMin.toLocaleString("pt-BR")} a R$ ${totalMax.toLocaleString("pt-BR")}`;
    } else {
        const selectedNames = items.filter(i => selectedItems.includes(i.id)).map(i => i.title).join(", ");
        message = `Olá! Montei meu pacote personalizado de landing page:\n\nItens:\n${items.filter(i => selectedItems.includes(i.id)).map(i => `• ${i.title}`).join('\n')}\n\nFaixa de valor estimada: R$ ${totalMin.toLocaleString("pt-BR")} a R$ ${totalMax.toLocaleString("pt-BR")}`;
    }

    window.open(`https://wa.me/5567993498440?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-[#050608] relative overflow-hidden text-white">
      {/* Background Gradients similar to Features section */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Escolha o plano ideal para <span className="text-primary">sua estratégia</span>
          </h2>
          <p className="text-lg text-white/60">
            Pacotes fechados com desconto ou montagem personalizada conforme sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Options */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Plans Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-[#12141B] border border-white/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Planos Recomendados
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {plans.map((plan) => {
                  const discount = Math.round(((plan.maxTotalValue - plan.priceMax) / plan.maxTotalValue) * 100);
                  
                  return (
                    <button
                      key={plan.id}
                      onClick={() => selectPlan(plan.id)}
                      className={cn(
                        "text-left p-6 rounded-[2rem] border transition-all relative overflow-hidden group hover:-translate-y-1 duration-300",
                        selectedMode === "plan" && selectedPlanId === plan.id
                          ? "border-primary/50 bg-[#12141B] shadow-[0_0_30px_-10px_rgba(255,235,122,0.15)]"
                          : "border-white/5 bg-[#12141B]/50 hover:bg-[#12141B] hover:border-white/10"
                      )}
                    >
                      {/* Selection Indicator */}
                      <div className={cn(
                        "absolute top-6 right-6 w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
                        selectedMode === "plan" && selectedPlanId === plan.id
                          ? "border-primary bg-primary text-black"
                          : "border-white/20"
                      )}>
                        {selectedMode === "plan" && selectedPlanId === plan.id && <Check className="w-4 h-4" />}
                      </div>

                      {/* Discount Badge */}
                      <div className="absolute top-0 right-0">
                        <div className="bg-gradient-to-bl from-primary to-secondary text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-lg transform translate-x-[1px] -translate-y-[1px]">
                          ECONOMIZE {discount}%
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2 pr-8">{plan.title}</h4>
                      <p className="text-sm text-white/60 mb-6 min-h-[40px]">{plan.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm text-white/40 line-through mb-1">
                          de R$ {plan.maxTotalValue.toLocaleString("pt-BR")}
                        </div>
                        <div className="text-2xl font-bold text-white">
                           <span className="text-lg font-normal text-white/60">até</span> R$ {plan.priceMax.toLocaleString("pt-BR")}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-white/80 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Custom Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 mt-12">
                <span className="bg-[#12141B] border border-white/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Ou monte do seu jeito
              </h3>
              <div className="space-y-3">
                {items.map((item) => {
                   const isSelected = selectedMode === "custom" && selectedItems.includes(item.id);
                   return (
                    <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={cn(
                        "w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between group",
                        isSelected
                            ? "border-primary/50 bg-[#12141B] text-white shadow-lg"
                            : "border-white/5 bg-[#12141B]/30 hover:bg-[#12141B]/80 hover:border-white/10 text-white"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-5 h-5 rounded-md border flex items-center justify-center transition-colors flex-shrink-0",
                                isSelected ? "border-primary bg-primary text-black" : "border-white/20 bg-transparent"
                            )}>
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                                <h4 className="font-semibold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className={cn("text-sm transition-colors", isSelected ? "text-white/60" : "text-white/40")}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={cn("font-bold text-sm", isSelected ? "text-primary" : "text-white")}>
                                R$ {item.priceMin} - {item.priceMax}
                            </div>
                            {item.id === "dominio" && (
                                <div className={cn("text-[10px]", isSelected ? "text-white/60" : "text-white/30")}>
                                    + R$ 55/mês
                                </div>
                            )}
                        </div>
                    </button>
                   );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
                <div className="bg-[#12141B] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                        <Sparkles className="w-32 h-32" />
                    </div>

                    <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Resumo do Pedido</h3>
                    <div className="text-2xl font-bold mb-6 text-white">{currentSelectionTitle}</div>

                    <div className="space-y-4 mb-8">
                        {currentSelectionItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-8">
                        <div className="flex justify-between items-end mb-2">
                           <div className="text-sm text-white/60">Investimento</div>
                           {savings > 0 && (
                             <div className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                               {savings}% OFF
                             </div>
                           )}
                        </div>
                        <div className="text-3xl font-bold text-white">
                            <span className="text-lg text-white/40 font-normal">até</span> R$ {totalMax.toLocaleString("pt-BR")}
                        </div>
                        <div className="text-sm text-white/40 mt-1">
                            de R$ {totalMin.toLocaleString("pt-BR")}
                        </div>
                        {selectedItems.includes("dominio") && (
                            <div className="text-xs text-white/40 mt-2 flex items-center gap-1.5">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                + R$ 55,00/mês (Hospedagem)
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-primary text-black h-14 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F5D647] transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,235,122,0.25)]"
                    >
                        Solicitar Orçamento <MessageSquare className="w-5 h-5" />
                    </button>
                    <p className="text-center text-xs text-white/30 mt-4">
                        Valores estimados. O orçamento final será enviado após análise do projeto.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
