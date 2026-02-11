import { Check } from "lucide-react";

export function AboutQuality() {
  const benefits = [
    {
      title: "Briefing objetivo e acompanhamento próximo",
      description: "Você não precisa saber “falar em termos técnicos”. Eu te conduzo com perguntas certas e mantenho você atualizado sobre cada etapa da criação."
    },
    {
      title: "Prazos reais e compromisso com entrega",
      description: "Cronograma enxuto, datas combinadas e transparência: você sabe quando recebe a primeira versão, ajustes e entrega final."
    },
    {
      title: "Boas práticas de performance e SEO on-page",
      description: "Estrutura otimizada para carregamento rápido, tags básicas de SEO, headings organizados e versão perfeita para mobile."
    },
    {
      title: "Suporte pós-entrega e ajustes pontuais",
      description: "Após a entrega, você conta com um período de suporte para ajustes finos, correções e pequenas melhorias na landing page."
    }
  ];

  return (
    <section className="bg-brand-beige py-24">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-24">
          <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
            Processo claro, comunicação direta e foco em resultado
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-md">
            Cada landing page é tratada como um projeto estratégico: entendo seu objetivo, analiso seu mercado e estruturo uma página enxuta, clara e orientada à conversão, sem enrolação e com prazos bem definidos.
          </p>
        </div>

        <div className="grid gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-brand-dark/5 flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-beige">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
