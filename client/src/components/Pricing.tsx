import { useState } from "react";
import { MessageSquare } from "lucide-react";

interface PackageOption {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  selected: boolean;
}

export function Pricing() {
  const [packages, setPackages] = useState<PackageOption[]>([
    {
      id: "landing-page",
      title: "Landing Page Completa",
      description: "Design, desenvolvimento e configuração.",
      price: 1500,
      features: [
        "Design exclusivo",
        "Responsivo (Mobile-first)",
        "Até 8 seções",
        "Integração WhatsApp",
      ],
      selected: false,
    },
    {
      id: "copywriting",
      title: "Copywriting Estratégico",
      description: "Textos persuasivos focados em venda.",
      price: 600,
      features: [
        "Estrutura de oferta",
        "Headlines magnéticas",
        "Gatilhos mentais",
      ],
      selected: false,
    },
    {
      id: "integracoes",
      title: "Integrações Avançadas",
      description: "Conexão com suas ferramentas.",
      price: 400,
      features: [
        "CRM / Email Marketing",
        "Pixel do Facebook/Google",
        "Automações básicas",
      ],
      selected: false,
    },
    {
      id: "hospedagem",
      title: "Configuração de Hospedagem",
      description: "Deixe o técnico comigo.",
      price: 200,
      features: [
        "Configuração de domínio",
        "SSL (Site seguro)",
        "Hospedagem rápida",
      ],
      selected: false,
    },
  ]);

  const togglePackage = (id: string) => {
    setPackages(
      packages.map((pkg) =>
        pkg.id === id ? { ...pkg, selected: !pkg.selected } : pkg,
      ),
    );
  };

  const selectedPackages = packages.filter((pkg) => pkg.selected);
  const totalPrice = selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0);

  const handleWhatsAppClick = () => {
    const packagesList = selectedPackages
      .map((pkg) => `• ${pkg.title} - R$ ${pkg.price.toLocaleString("pt-BR")}`)
      .join("%0A");

    const message = `Olá! Gostaria de solicitar um orçamento:%0A%0A*Serviços Selecionados:*%0A${packagesList}%0A%0A*Valor Total: R$ ${totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}*`;

    const whatsappUrl = `https://wa.me/5567993498440?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-[0.01]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Monte seu pacote e receba um orçamento
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Selecione o que você precisa. O valor é atualizado na hora e você
            pode me chamar no WhatsApp com tudo pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Packages List */}
          <div className="lg:col-span-2 space-y-4">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => togglePackage(pkg.id)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                  pkg.selected
                    ? "border-primary bg-primary/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-all ${
                        pkg.selected
                          ? "border-primary bg-primary"
                          : "border-white/30"
                      }`}
                    >
                      {pkg.selected && (
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {pkg.title}
                      </h3>
                      <p className="text-white/60 mb-4">{pkg.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {pkg.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full"
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/40 mb-1">R$</div>
                    <div className="text-2xl font-bold text-white">
                      {pkg.price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Summary Card */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
                <div className="text-sm text-primary/80 font-medium mb-1">
                  INVESTIMENTO ESTIMADO
                </div>
                <div className="text-4xl font-bold text-white">
                  R${" "}
                  {totalPrice.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>

              {/* Items */}
              <div className="p-6 space-y-3">
                {selectedPackages.length > 0 ? (
                  selectedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-white/70">{pkg.title}</span>
                      <span className="text-white font-medium">
                        R$ {pkg.price.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-white/40 text-sm text-center py-4">
                    Selecione os serviços acima
                  </p>
                )}

                {selectedPackages.length > 0 && (
                  <>
                    <div className="border-t border-white/10 pt-3 mt-3">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-white">Total</span>
                        <span className="text-white text-lg">
                          R${" "}
                          {totalPrice.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <button
                  disabled={selectedPackages.length === 0}
                  onClick={handleWhatsAppClick}
                  className={`w-full h-14 rounded-full font-semibold text-lg transition-all flex items-center justify-center ${
                    selectedPackages.length > 0
                      ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(255,235,122,0.3)]"
                      : "bg-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm text-primary font-semibold">
                    ✓ Sem compromisso
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Fale diretamente comigo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
