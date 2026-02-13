import { Rocket, Zap, Smartphone, Globe, Wrench, Layout } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Rocket,
    title: "Alta Performance",
    description:
      "Carregamento instantâneo e otimização total para Core Web Vitals do Google.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Design pensado primeiramente para a experiência em dispositivos móveis.",
  },
  {
    icon: Zap,
    title: "Foco em Conversão",
    description:
      "Layouts estratégicos guiados por psicologia de vendas e neuromarketing.",
  },
  {
    icon: Layout,
    title: "Design Premium",
    description:
      "Estética refinada que eleva a percepção de valor da sua marca.",
  },
  {
    icon: Globe,
    title: "Copywriting Persuasivo",
    description: "Textos que conectam, engajam e conduzem o visitante à ação.",
  },
  {
    icon: Wrench,
    title: "Suporte pós-entrega",
    description: "Período de 5 dias garantido para ajustes finos e pequenos.",
  },
];

export function Features() {
  return (
    <section
      id="services"
      className="py-24 bg-[#050608] relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Nossa Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tudo que você precisa para{" "}
            <span className="text-primary">escalar</span>
          </h2>
          <p className="text-white/60 text-lg">
            Mais do que páginas bonitas, entregamos landing pages planejadas
            para aumentar suas oportunidades de venda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2rem] bg-[#12141B]/50 backdrop-blur-sm border border-white/5 hover:bg-[#1B1E26] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#20242E] flex items-center justify-center mb-6 group-hover:bg-primary text-white group-hover:text-black transition-all duration-300 shadow-inner">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
