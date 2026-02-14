import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/videos/hero-animation.mp4";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor - Animado */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
              LANDING PAGES DE QUALIDADE PREMIUM
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
              Design que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                vende
              </span>{" "}
              sua visão.
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-white/60 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transformamos visitantes em clientes com landing pages
            cinematográficas, estratégicas e desenvolvidas para performance
            máxima.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="h-14 px-8 rounded-full cursor-pointer bg-primary text-black hover:bg-primary/90 text-base font-semibold shadow-[0_0_20px_rgba(255,235,122,0.3)] hover:shadow-[0_0_30px_rgba(255,235,122,0.5)] transition-all"
            >
              Iniciar Projeto <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            className="pt-8 flex items-center gap-8 text-white/40 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>TRUSTED BY 50+ BRANDS</span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>

        <motion.div
          className="relative lg:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full flex items-center justify-center">
            {/* Main Video Animation */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 mix-blend-overlay pointer-events-none z-10" />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Elemento decorativo rotativo de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] -z-10">
              <div className="w-full h-full border border-dashed border-primary/20 rounded-full animate-rotate-slow" />
            </div>

            {/* Floating Badge 1 - Taxa de Conversão */}
            <motion.div
              className="absolute top-[15%] right-[-5%] lg:right-[-20px] bg-[#12141B]/90 backdrop-blur-xl p-4 rounded-2xl border border-primary/20 shadow-2xl flex items-center gap-3 z-20"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                %
              </div>
              <div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wide">
                  Conversão
                </div>
                <div className="text-lg font-bold text-white">+124%</div>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Satisfação */}
            <motion.div
              className="absolute bottom-[15%] left-[-5%] lg:left-[-20px] bg-[#12141B]/90 backdrop-blur-xl p-4 rounded-2xl border border-primary/20 shadow-2xl flex items-center gap-3 z-20"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl border border-secondary/20">
                ★
              </div>
              <div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wide">
                  Satisfação
                </div>
                <div className="text-lg font-bold text-white">5.0</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
