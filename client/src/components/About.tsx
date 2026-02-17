import { Button } from "@/components/ui/button";
import { Code2, Cpu, Rocket, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#050608] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                Sobre Nós
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Não montamos páginas. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Nós programamos resultados.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Com mais de <strong className="text-white">5 anos de experiência</strong> no mercado digital, 
                nos especializamos em ir além do "arrasta e solta". Enquanto a maioria entrega 
                apenas templates visuais, nós desenvolvemos soluções robustas baseadas em código.
              </p>
              <p>
                Acreditamos que uma landing page de alta conversão precisa de engenharia por trás: 
                carregamento instantâneo, SEO técnico impecável e animações fluidas que retêm a atenção 
                sem pesar o site.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">100% Code</h4>
                  <p className="text-sm text-white/50">React, Next.js & Tailwind para performance máxima.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Otimização Real</h4>
                  <p className="text-sm text-white/50">Core Web Vitals verdes e carregamento instantâneo.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary/50 transition-all">
                Conheça nosso processo
              </Button>
            </div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#12141B] relative">
              {/* Code Editor Mockup Look */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#12141B] to-[#0A0C10] p-8 flex flex-col">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                
                <div className="font-mono text-sm space-y-2 text-white/30 overflow-hidden opacity-50">
                  <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400">Experience</span> = 5;</div>
                  <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-yellow-400">Stack</span> = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>];</div>
                  <div className="flex pl-4"><span className="text-blue-400">performance</span>: <span className="text-orange-400">100</span>,</div>
                  <div className="flex pl-4"><span className="text-blue-400">conversion</span>: <span className="text-orange-400">High</span></div>
                  <div>{'}'}</div>
                  <br />
                  <div className="flex"><span className="text-purple-400 mr-2">function</span> <span className="text-blue-400">createLandingPage</span>() {'{'}</div>
                  <div className="flex pl-4"><span className="text-white/50">// Custom development logic</span></div>
                  <div className="flex pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">new Success()</span>;</div>
                  <div>{'}'}</div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                
                <div className="absolute bottom-8 right-8 bg-[#1B1E26] p-4 rounded-xl border border-white/10 shadow-2xl max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-white font-bold text-sm">Expert</span>
                  </div>
                  <p className="text-xs text-white/50">Especialista em desenvolvimento front-end de alta performance.</p>
                </div>
              </div>
            </div>

            {/* Decorative background grid */}
            <div className="absolute -z-10 inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
