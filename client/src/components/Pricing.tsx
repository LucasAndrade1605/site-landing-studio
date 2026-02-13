import { useState } from "react";
import { MessageSquare, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceItem {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax: number;
  features: string[];
  isBase?: boolean; // If true, this is the base item that must be selected in custom mode
}

interface PredefinedPlan {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax: number;
  features: string[];
  includedItems: string[]; // IDs of items included in this plan
}

export function Pricing() {
  const [selectedMode, setSelectedMode] = useState<"custom" | "plan">("custom");
  const [selectedItems, setSelectedItems] = useState<string[]>(["landing-page"]);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

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
      features: ["Landing Page Simples", "Copywriting Completo", "Domínio e Hospedagem"],
      includedItems: ["landing-page", "copywriting", "dominio"],
    },
    {
      id: "plan-profissional",
      title: "Plano Profissional",
      description: "Para quem quer vender com estratégia",
      priceMin: 1400,
      priceMax: 2200,
      features: ["Landing Page Simples", "Copywriting Completo", "Integrações", "Domínio e Hospedagem"],
      includedItems: ["landing-page", "copywriting", "integracoes", "dominio"],
    },
  ];

  const toggleItem = (id: string) => {
    // Switch to custom mode if not already
    if (selectedMode === "plan") {
      setSelectedMode("custom");
      setSelectedPlanId(null);
      // Reset to base + clicked item
      const newSelection = ["landing-page"];
      if (id !== "landing-page") newSelection.push(id);
      setSelectedItems(newSelection);
      return;
    }

    // Handle base item logic
    if (id === "landing-page") {
      // Cannot deselect base item in custom mode if it's the only thing, 
      // but actually the prompt says "must always remain checked".
      // So we just ensure it stays there.
      if (!selectedItems.includes("landing-page")) {
         setSelectedItems([...selectedItems, "landing-page"]);
      }
      return; 
    }

    // Toggle other items
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const selectPlan = (planId: string) => {
    setSelectedMode("plan");
    setSelectedPlanId(planId);
    setSelectedItems([]); // Clear custom items visually
  };

  // Calculate Totals
  let totalMin = 0;
  let totalMax = 0;
  let currentSelectionTitle = "";
  let currentSelectionItems: string[] = [];

  if (selectedMode === "plan" && selectedPlanId) {
    const plan = plans.find(p => p.id === selectedPlanId);
    if (plan) {
      totalMin = plan.priceMin;
      totalMax = plan.priceMax;
      currentSelectionTitle = plan.title;
      currentSelectionItems = plan.features;
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
    // Add monthly fee note if domain is selected
    if (selectedItems.includes("dominio")) {
        // We handle the +55/mo in the text display, not the sum for now, or append it textually.
    }
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
    <section id="pricing" className="py-24 bg-[#1C3F3A] relative overflow-hidden text-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Investimento
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Escolha um pacote fechado ou monte sua landing page conforme a necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Options */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Plans Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="bg-[#EBE8D8] text-[#1C3F3A] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                Planos Recomendados
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => selectPlan(plan.id)}
                    className={cn(
                      "text-left p-6 rounded-[2rem] border-2 transition-all relative overflow-hidden group",
                      selectedMode === "plan" && selectedPlanId === plan.id
                        ? "border-[#EBE8D8] bg-[#244A44] shadow-lg"
                        : "border-white/10 bg-[#1C3F3A] hover:bg-[#244A44]/50"
                    )}
                  >
                    {selectedMode === "plan" && selectedPlanId === plan.id && (
                        <div className="absolute top-4 right-4 text-[#EBE8D8]">
                            <Check className="w-6 h-6" />
                        </div>
                    )}
                    <h4 className="text-xl font-bold text-white mb-2">{plan.title}</h4>
                    <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                    <div className="text-lg font-bold text-[#EBE8D8] mb-4">
                      R$ {plan.priceMin} - R$ {plan.priceMax}
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-white/60 flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-[#EBE8D8]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Custom Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="bg-[#EBE8D8] text-[#1C3F3A] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
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
                        "w-full text-left p-5 rounded-[1.25rem] border transition-all flex items-center justify-between group",
                        isSelected
                            ? "border-[#EBE8D8] bg-[#244A44] text-white shadow-md"
                            : "border-white/10 bg-[#1C3F3A] hover:bg-[#244A44]/50 text-white"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                                isSelected ? "border-[#EBE8D8] bg-[#EBE8D8] text-[#1C3F3A]" : "border-white/20 bg-transparent"
                            )}>
                                {isSelected && <Check className="w-3 h-3" />}
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className={cn("text-sm", isSelected ? "text-white/70" : "text-white/40")}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={cn("font-bold text-sm", isSelected ? "text-[#EBE8D8]" : "text-white")}>
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
            <div className="sticky top-24">
                <div className="bg-[#244A44] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                        <MessageSquare className="w-24 h-24" />
                    </div>

                    <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">Resumo do Pedido</h3>
                    <div className="text-2xl font-bold mb-6 text-white">{currentSelectionTitle}</div>

                    <div className="space-y-3 mb-8">
                        {currentSelectionItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                                <div className="w-5 h-5 rounded-full bg-[#EBE8D8]/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-[#EBE8D8]" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-8">
                        <div className="text-sm text-white/60 mb-1">Investimento Estimado</div>
                        <div className="text-3xl font-bold text-[#EBE8D8]">
                            R$ {totalMin.toLocaleString("pt-BR")} <span className="text-lg text-white/60 font-normal">a</span> R$ {totalMax.toLocaleString("pt-BR")}
                        </div>
                        {selectedItems.includes("dominio") && (
                            <div className="text-xs text-white/40 mt-1">
                                + R$ 55,00/mês (Hospedagem)
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-[#EBE8D8] text-[#1C3F3A] h-14 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(235,232,216,0.15)]"
                    >
                        Solicitar Orçamento <ArrowRight className="w-5 h-5" />
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
