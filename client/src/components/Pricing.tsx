import { useState } from "react";
import { MessageSquare, Check, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

interface Plan {
  id: string;
  title: string;
  setupFee: number;
  monthlyFee: number;
  features: string[];
  popular?: boolean;
  highlightFeature?: string;
  yearlyBadge?: string;
  yearlyText?: string;
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("profissional");

  const plans: Plan[] = [
    {
      id: "essencial",
      title: "Plano Essencial",
      setupFee: 400,
      monthlyFee: 89.9,
      features: [
        "Landing Page Premium",
        "Copywriting Completo",
        "Domínio e Hospedagem",
      ],
      yearlyBadge: "2 primeiros meses isentos",
      yearlyText:
        "Plano anual: você só paga 10 de 12 mensalidades. 2 primeiros meses sem mensalidade.",
    },
    {
      id: "profissional",
      title: "Plano Profissional",
      setupFee: 500,
      monthlyFee: 139.9,
      popular: true,
      features: [
        "Landing Page Premium",
        "Copywriting Completo",
        "Integrações",
        "Domínio e Hospedagem",
      ],
      yearlyBadge: "Melhor custo-benefício",
      yearlyText:
        "Plano anual com 2 primeiros meses sem mensalidade. Paga apenas 10 de 12 mensalidades.",
    },
    {
      id: "painel",
      title: "Profissional + Painel",
      setupFee: 600,
      monthlyFee: 189.9,
      highlightFeature:
        "Painel Administrativo: Gerenciamento de imagens, cards, valores e texto da página",
      features: [
        "Landing Page Premium",
        "Copywriting Completo",
        "Integrações",
        "Domínio e Hospedagem",
      ],
      yearlyBadge: "2 Meses Grátis",
      yearlyText:
        "Plano anual com 2 primeiros meses sem mensalidade. Paga apenas 10 de 12 mensalidades.",
    },
  ];

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const handleWhatsAppClick = () => {
    const isYearly = billingCycle === "yearly";
    const planName = `${selectedPlan.title}${isYearly ? " - Anual" : " - Mensal"}`;
    const monthlyFormatted = selectedPlan.monthlyFee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
    
    let message = `Olá! Gostaria de um orçamento para o *${planName}*.\n\n`;
    message += `*Implantação:* a partir de R$ ${selectedPlan.setupFee.toLocaleString("pt-BR")}\n`;
    message += `*Mensalidade:* a partir de R$ ${monthlyFormatted}/mês\n\n`;
    if (isYearly) {
      message += `*Condição Anual:* 2 primeiros meses isentos (paga 10 de 12)\n\n`;
    }
    
    message += `Itens inclusos:\n`;
    selectedPlan.features.forEach((f) => {
      message += `• ${f}\n`;
    });
    if (selectedPlan.highlightFeature) {
      message += `• ${selectedPlan.highlightFeature}\n`;
    }

    const url = `https://wa.me/5567993498440?text=${encodeURIComponent(
      message,
    )}`;

    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-[#050608] relative overflow-hidden text-white"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Escolha o plano ideal para{" "}
            <span className="text-primary">sua estratégia</span>
          </h2>
          
          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-[#12141B] p-1.5 rounded-full border border-white/10 inline-flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                  billingCycle === "monthly"
                    ? "bg-primary text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative",
                  billingCycle === "yearly"
                    ? "bg-primary text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Anual
                <span className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full border border-green-400 font-bold whitespace-nowrap animate-pulse">
                  2 MESES OFF
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Planos */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                const isYearly = billingCycle === "yearly";

                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={cn(
                      "text-left p-6 cursor-pointer rounded-[2rem] border transition-all relative overflow-hidden group hover:-translate-y-1 duration-300 flex flex-col h-full",
                      isSelected
                        ? "border-primary/50 bg-[#12141B] shadow-[0_0_30px_-10px_rgba(255,235,122,0.15)]"
                        : "border-white/5 bg-[#12141B]/50 hover:bg-[#12141B] hover:border-white/10"
                    )}
                  >
                    {plan.popular && !isYearly && (
                      <div className="absolute top-0 inset-x-0 flex justify-center">
                        <div className="bg-gradient-to-r from-primary to-secondary text-black text-[10px] font-bold px-4 py-1 rounded-b-xl shadow-lg uppercase tracking-wider">
                          Mais Vendido
                        </div>
                      </div>
                    )}
                    
                    {isYearly && plan.yearlyBadge && (
                      <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                        <div className="bg-green-500 text-white text-[10px] font-bold px-4 py-1 rounded-b-xl shadow-lg uppercase tracking-wider">
                          {plan.yearlyBadge}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4 mt-4">
                      <h4 className="text-lg font-bold text-white leading-tight pr-2">
                        {plan.title}
                      </h4>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center transition-colors flex-shrink-0",
                          isSelected
                            ? "border-primary bg-primary text-black"
                            : "border-white/20"
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>

                    <div className="mb-4 space-y-2 flex-grow-0">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-white/20" />
                        <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold mb-1">
                          Implantação
                        </div>
                        <div className="text-white font-medium text-sm">
                          a partir de <span className="text-primary font-bold text-lg">R$ {plan.setupFee}</span>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                        <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold mb-1">
                          Mensalidade
                        </div>
                        <div className="text-white font-medium text-sm">
                          a partir de <span className="text-primary font-bold text-lg">R$ {plan.monthlyFee.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span><span className="text-white/50 text-xs">/mês</span>
                        </div>
                      </div>
                    </div>

                    {isYearly && (
                      <div className="mb-4 text-xs text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20 font-medium leading-relaxed">
                        {plan.yearlyText}
                      </div>
                    )}

                    <div className="mt-auto">
                      <div className="h-px w-full bg-white/10 my-4" />
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-white/80 flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                        {plan.highlightFeature && (
                          <li className="text-xs text-primary flex items-start gap-2 bg-primary/5 p-2 rounded-lg border border-primary/20">
                            <Star className="w-3 h-3 mt-0.5 flex-shrink-0 fill-primary" />
                            <span className="leading-relaxed font-medium">{plan.highlightFeature}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-[#12141B] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Sparkles className="w-32 h-32" />
                </div>

                <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                  Resumo do Pedido
                </h3>
                <div className="text-xl font-bold mb-6 text-white leading-tight">
                  {selectedPlan.title} <br/>
                  <span className="text-base font-medium text-white/60">
                    {billingCycle === "monthly" ? "(Mensal)" : "(Anual)"}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {selectedPlan.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                  {selectedPlan.highlightFeature && (
                    <div className="flex items-start gap-3 text-sm text-primary font-medium">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary mt-0.5 border border-primary/30">
                        <Star className="w-3 h-3 fill-primary" />
                      </div>
                      <span className="leading-relaxed">{selectedPlan.highlightFeature}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-6 mb-8 space-y-4">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Implantação Estimada</div>
                    <div className="text-2xl font-bold text-white">
                      <span className="text-sm text-white/40 font-normal mr-1">a partir de</span>
                      R$ {selectedPlan.setupFee.toLocaleString("pt-BR")}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-white/60 mb-1">Mensalidade Estimada</div>
                    <div className="text-2xl font-bold text-white flex items-baseline gap-1">
                      <span className="text-sm text-white/40 font-normal">a partir de</span>
                      R$ {selectedPlan.monthlyFee.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      <span className="text-sm text-white/40 font-normal">/mês</span>
                    </div>
                  </div>

                  {billingCycle === "yearly" && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-xl text-xs font-medium mt-4 leading-relaxed">
                      Plano anual com 2 primeiros meses sem mensalidade (paga só 10 meses).
                    </div>
                  )}
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full cursor-pointer bg-primary text-black h-14 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F5D647] transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,235,122,0.25)]"
                >
                  Solicitar Orçamento <MessageSquare className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-white/30 mt-4 leading-relaxed">
                  Valores estimados. O orçamento final será enviado após análise
                  do projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
