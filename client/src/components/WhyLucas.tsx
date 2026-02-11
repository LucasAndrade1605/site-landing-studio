import { Monitor, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Monitor,
    title: "Design focado em conversão, não só em “ficar bonito”",
    description: "Eu não entrego só uma página bonita: cada seção é pensada para guiar o visitante até a ação que importa para você (clicar no botão, preencher o formulário, chamar no WhatsApp). Estrutura, hierarquia visual, provas sociais e gatilhos são aplicados de forma estratégica."
  },
  {
    icon: Zap,
    title: "Entrega rápida e processo simples",
    description: "Você me passa as informações principais do seu negócio, define os serviços que precisa e eu cuido do resto. Em poucos dias sua landing page está pronta para receber tráfego de anúncios, com revisões pontuais para ajustar os detalhes finais."
  },
  {
    icon: Code,
    title: "Tecnologia leve, integrada e fácil de escalar",
    description: "Landing pages rápidas, responsivas e integradas com ferramentas como WhatsApp, e-mail marketing, formulários, pixel de anúncios e muito mais. Código limpo, boas práticas de performance e uma estrutura preparada para crescer junto com seu negócio."
  }
];

export function WhyLucas() {
  return (
    <section className="bg-white py-24 border-t border-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Por que criar sua landing page comigo?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6 text-brand-dark">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 min-h-[56px]">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
