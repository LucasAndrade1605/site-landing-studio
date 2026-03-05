import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quanto tempo leva para criar uma landing page?",
    answer:
      "Dependendo da complexidade do projeto e do nível de personalização desejado. Projetos mais simples podem ser entregues em até 5 dias úteis.",
  },
  {
    question: "Vocês fazem a hospedagem da página?",
    answer:
    "Sim! Nós cuidamos de tudo para você: domínio, hospedagem e certificado SSL, tudo incluso na mensalidade.",
  },
  {
    question: "Posso solicitar alterações após a entrega?",
    answer:
      "A mensalidade abrange a integridade, segurança e disponibilidade da página. Não inclui alterações de conteúdo ou layout. Qualquer ajuste, mudança de sessão, texto, imagens ou funcionalidades será cobrado à parte, de acordo com a complexidade do serviço solicitado.",
  },
  {
    question: "Qual a forma de pagamento?",
    answer:
      "Aceitamos PIX e cartão de crédito para o pagamento da taxa de implantação e de planos anuais, com possibilidade de parcelamento em até 12x, com juros. Para o pagamento da mensalidade recorrente, a forma de pagamento disponível é apenas via PIX.",
  },
  {
    question: "Os planos possuem fidelidade?",
    answer:
      "Não Nossos planos não possuem fidelidade. Você pode cancelar a qualquer momento, sem multa e sem taxa de cancelamento. A única cobrança fixa é a taxa de implantação, paga uma única vez no início do serviço.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-[#0A0B0F]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-[#12141B]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-[#12141B]/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 mt-4">
                        <p className="text-white/60 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-white/60 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <button
            onClick={() => {
              const phoneNumber = "5567993498440";
              const message = encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre os serviços da LandingStudio.");
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="px-8 py-3 cursor-pointer rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 transition-all"
          >
            Falar com especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
}
