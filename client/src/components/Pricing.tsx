import { useState } from "react";
import { MessageSquare, Check, Sparkles, Star, Lock } from "lucide-react";
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
      yearlyBadge: "2 Meses Isentos",
      yearlyText: "Plano anual: pague 10 de 12 mensalidades.",
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
        "Integrações Essenciais",
        "Domínio e Hospedagem",
      ],
      yearlyBadge: "Melhor Custo-Benefício",
      yearlyText: "Plano anual com 2 primeiros meses sem mensalidade.",
    },
    {
      id: "painel",
      title: "Profissional + Painel",
      setupFee: 600,
      monthlyFee: 189.9,
      highlightFeature: "Painel Admin: Edite textos, imagens e valores",
      features: [
        "Landing Page Premium",
        "Copywriting Completo",
        "Integrações Essenciais",
        "Domínio e Hospedagem",
      ],
      yearlyBadge: "2 Meses Grátis",
      yearlyText: "Plano anual com 2 primeiros meses sem mensalidade.",
    },
  ];

  const serviceDetails = [
    {
      title: "Landing Page Simples",
      description: "Estrutura + Design + Responsivo",
      mandatory: true,
    },
    {
      title: "Copywriting Completo",
      description: "Textos persuasivos focados em venda",
    },
    {
      title: "Integrações Essenciais",
      description: "WhatsApp, formulário, e-mail",
    },
    {
      title: "Domínio e Hospedagem",
      description: "Configuração completa",
    },
    {
      title: "Painel Administrativo",
      description: "Gerenciamento autônomo de imagens, cards e textos da página",
      special: true,
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

    const url = `https://wa.me/5567993498440?text=${encodeURIComponent(message)}`;

    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-[#050608] relative overflow-hidden text-white font-sans"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Planos de alto nível para o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              seu projeto
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            Selecione a estrutura ideal para a sua página. Transparência nos custos de implantação e manutenção.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-[#0B0D12] p-1.5 rounded-full border border-white/10 flex relative w-80 shadow-xl">
              <div
                className={cn(
                  "absolute inset-y-1.5 w-[calc(50%-6px)] rounded-full bg-primary transition-transform duration-500 ease-in-out z-0",
                  billingCycle === "monthly"
                    ? "translate-x-0 left-1.5"
                    : "translate-x-full left-[2px]"
                )}
              />
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "py-3 rounded-full text-sm font-semibold transition-all relative z-10 flex-1",
                  billingCycle === "monthly" ? "text-black" : "text-white/60 hover:text-white"
                )}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "py-3 rounded-full text-sm font-semibold transition-all relative z-10 flex-1",
                  billingCycle === "yearly" ? "text-black" : "text-white/60 hover:text-white"
                )}
              >
                Anual
                <span className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[10px] px-2.5 py-1 rounded-full border border-green-300/50 font-bold whitespace-nowrap shadow-[0_0_15px_rgba(34,197,94,0.4)] animate-bounce">
                  2 MESES OFF
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Planos + Legenda */}
          <div className="xl:col-span-8 flex flex-col gap-16">
            {/* CARDS DE PLANOS REFINADOS */}
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                const isYearly = billingCycle === "yearly";

                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={cn(
                      "relative flex flex-col text-left transition-all duration-300 outline-none w-full group rounded-[24px]",
                      isSelected ? "z-10 scale-[1.03]" : "z-0 hover:-translate-y-1"
                    )}
                  >
                    <div
                      className={cn(
                        "relative flex flex-col w-full rounded-[24px] p-8 border h-full overflow-hidden transition-colors duration-300",
                        isSelected
                          ? "bg-[#10121A] border-primary shadow-[0_0_30px_-5px_rgba(255,235,122,0.2)]"
                          : "bg-[#0A0C10] border-white/5 hover:border-white/15"
                      )}
                    >
                      {/* Selo (Popular / Anual) */}
                      {((plan.popular && !isYearly) || (isYearly && plan.yearlyBadge)) && (
                        <div className="absolute top-0 inset-x-0 flex justify-center">
                          <div
                            className={cn(
                              "text-[10px] font-bold px-4 py-1.5 rounded-b-xl uppercase tracking-wider",
                              isYearly
                                ? "bg-green-500 text-white"
                                : "bg-primary text-black"
                            )}
                          >
                            {isYearly ? plan.yearlyBadge : "Recomendado"}
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="mt-4 mb-6 flex justify-between items-start">
                        <h4 className="text-xl font-bold text-white leading-tight pr-4">
                          {plan.title}
                        </h4>
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors mt-0.5",
                            isSelected
                              ? "border-primary bg-primary text-black"
                              : "border-white/20 bg-transparent"
                          )}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      {/* Preços */}
                      <div className="mb-8 space-y-4">
                        <div className="flex flex-col">
                          <span className="text-[11px] text-white/50 uppercase tracking-widest font-semibold mb-1">
                            Implantação
                          </span>
                          <span className="text-sm font-medium text-white/80">
                            a partir de <span className="font-bold text-white">R$ {plan.setupFee}</span>
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[11px] text-white/50 uppercase tracking-widest font-semibold mb-1">
                            Mensalidade
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm text-white/50">R$</span>
                            <span
                              className={cn(
                                "text-4xl font-black tracking-tight",
                                isSelected ? "text-primary" : "text-white"
                              )}
                            >
                              {Math.floor(plan.monthlyFee)}
                            </span>
                            <div className="flex flex-col justify-end">
                              <span
                                className={cn(
                                  "text-sm font-bold leading-none",
                                  isSelected ? "text-primary" : "text-white"
                                )}
                              >
                                ,{(plan.monthlyFee % 1).toFixed(2).substring(2)}
                              </span>
                            </div>
                            <span className="text-xs text-white/40 ml-1">/mês</span>
                          </div>
                        </div>

                        {isYearly && (
                          <div className="text-[11px] text-green-400 font-medium leading-relaxed bg-green-500/10 px-3 py-2 rounded-lg text-center mt-2">
                            {plan.yearlyText}
                          </div>
                        )}
                      </div>

                      {/* Linha separadora */}
                      <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

                      {/* Lista de Features */}
                      <div className="flex-1">
                        <ul className="space-y-4">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="text-[13.5px] text-white/80 flex items-start gap-3">
                              <Check
                                className={cn(
                                  "w-4 h-4 mt-0.5 flex-shrink-0",
                                  isSelected ? "text-primary" : "text-white/30"
                                )}
                              />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}

                          {plan.highlightFeature && (
                            <li className="text-[13.5px] text-primary flex items-start gap-3 mt-5 pt-5 border-t border-white/5">
                              <Star className="w-4 h-4 mt-0.5 flex-shrink-0 fill-primary" />
                              <span className="leading-snug font-medium">{plan.highlightFeature}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* LEGENDA - Recriada com base no Print */}
            <div>
              <h3 className="text-[18px] font-bold text-white mb-6">
                O que inclui em cada serviço?
              </h3>

              <div className="flex flex-col gap-3">
                {serviceDetails.map((item, idx) => {
                  const isMandatory = item.mandatory;

                  return (
                    <div
                      key={idx}
                      className={cn(
                        "w-full px-6 py-5 rounded-2xl flex items-center gap-5 transition-colors border",
                        "bg-[#0E1015] border-white/5 hover:border-white/10 hover:bg-[#13161C]"
                      )}
                    >
                      {/* Checkbox / Lock Icon */}
                      <div
                        className={cn(
                          "w-6 h-6 rounded-[6px] flex items-center justify-center flex-shrink-0 transition-all",
                          isMandatory
                            ? "border border-[#D4AF37] text-[#D4AF37]"
                            : "border border-white/20 bg-transparent text-transparent"
                        )}
                      >
                        {isMandatory ? <Lock className="w-[14px] h-[14px]" /> : null}
                      </div>

                      {/* Texts */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-[16px] text-white tracking-wide">
                            {item.title}
                          </h4>
                          {isMandatory && (
                            <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              OBRIGATÓRIO
                            </span>
                          )}
                        </div>
                        <p className="text-[14px] text-white/50 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Resumo do Pedido */}
          <div className="xl:col-span-4">
            <div className="sticky top-32 mt-8 xl:mt-0">
              <div className="bg-[#12141B] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Sparkles className="w-32 h-32" />
                </div>

                <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                  Resumo do Pedido
                </h3>
                <div className="text-2xl font-bold mb-8 text-white leading-tight">
                  {selectedPlan.title} <br />
                  <span className="text-base font-medium text-white/50">
                    ({billingCycle === "monthly" ? "Mensal" : "Anual"})
                  </span>
                </div>

                <div className="space-y-4 mb-10">
                  {selectedPlan.features.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
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

                <div className="bg-[#181B24] p-6 rounded-2xl border border-white/5 mb-8">
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-white/50">Implantação Estimada</div>
                      <div className="text-lg font-bold text-white text-right">
                        R$ {selectedPlan.setupFee.toLocaleString("pt-BR")}
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/5" />

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-white/50">Mensalidade Estimada</div>
                      <div className="text-2xl font-bold text-white flex items-baseline gap-1 text-right">
                        R$ {selectedPlan.monthlyFee.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        <span className="text-xs text-white/40 font-normal">/mês</span>
                      </div>
                    </div>
                  </div>

                  {billingCycle === "yearly" && (
                    <div className="mt-6 bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-xl text-xs font-medium leading-relaxed text-center">
                      Plano anual com 2 primeiros meses sem mensalidade (paga só 10 meses).
                    </div>
                  )}
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full cursor-pointer bg-primary text-black h-16 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-[#F5D647] transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,235,122,0.25)]"
                >
                  Solicitar Orçamento <MessageSquare className="w-6 h-6" />
                </button>
                <p className="text-center text-[11px] text-white/30 mt-4 leading-relaxed px-4">
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
