import { Button } from "@/components/ui/button";
import { Code2, Cpu, Award, Zap } from "lucide-react";
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
                  Nós programamos performance.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Com mais de <strong className="text-white">5 anos de experiência</strong> no mercado digital, 
                nossa empresa nasceu para elevar o padrão de desenvolvimento web.
              </p>
              <p>
                Diferente de agências que usam construtores visuais genéricos (que deixam o site lento e limitado), 
                nós somos <strong className="text-white">especialistas em programação real</strong>. 
                Cada linha de código é escrita para garantir que sua landing page seja extremamente rápida, 
                segura e escalável.
              </p>
              <p>
                Não entregamos apenas um layout bonito; entregamos uma infraestrutura de vendas 
                sólida, desenvolvida com as tecnologias mais modernas do mercado (React, Next.js).
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">100% Code</h4>
                  <p className="text-sm text-white/50">Sem "arrasta e solta". Controle total do código.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Performance Real</h4>
                  <p className="text-sm text-white/50">Sites que carregam instantaneamente.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="h-12 px-8 rounded-full bg-primary text-black hover:bg-primary/90 font-bold transition-all">
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
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#12141B] relative shadow-2xl">
              {/* Code Editor Mockup Look */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#12141B] to-[#0A0C10] p-8 flex flex-col">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                
                <div className="font-mono text-sm space-y-3 text-white/40 overflow-hidden">
                  <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400">LucasDev</span> = {'{'}</div>
                  <div className="flex pl-4"><span className="text-blue-400">experience</span>: <span className="text-orange-400">"5+ Years"</span>,</div>
                  <div className="flex pl-4"><span className="text-blue-400">specialty</span>: <span className="text-green-400">"High Performance Code"</span>,</div>
                  <div className="flex pl-4"><span className="text-blue-400">stack</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Tailwind'</span>],</div>
                  <div className="flex pl-4"><span className="text-blue-400">methodology</span>: <span className="text-green-400">"Hand-coded Perfection"</span></div>
                  <div>{'}'};</div>
                  <br />
                  <div className="flex"><span className="text-purple-400 mr-2">async function</span> <span className="text-yellow-400">boostSales</span>(client) {'{'}</div>
                  <div className="flex pl-4"><span className="text-white/30">// Optimizing conversion rates...</span></div>
                  <div className="flex pl-4"><span className="text-purple-400">await</span> client.<span className="text-blue-400">deploy</span>(<span className="text-orange-400">LucasDev.solution</span>);</div>
                  <div className="flex pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Success 🚀"</span>;</div>
                  <div>{'}'}</div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
                
                <div className="absolute bottom-8 right-8 bg-[#1B1E26]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-bold text-sm block">Expertise</span>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider">Comprovada</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Código limpo e estruturado para quem não aceita o básico.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background grid */}
            <div className="absolute -z-10 inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
