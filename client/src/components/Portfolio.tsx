import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "SaaS Analytics Pro",
    category: "Software B2B",
    image: "/images/mockup-saas.png",
    description: "Landing page para software B2B com demonstração interativa e tabela de preços.",
    stack: ["Vue", "Chart.js", "HubSpot"]
  },
  {
    id: 2,
    title: "Clínica Vida Plena – Captação de Pacientes",
    category: "Saúde",
    image: "/images/mockup-clinic.png",
    description: "Landing page focada em conversão para agendamentos via WhatsApp e formulário.",
    stack: ["React", "Tailwind", "WhatsApp API"]
  },
  {
    id: 3,
    title: "LaunchMaster - Venda de Curso",
    category: "Infoproduto",
    image: "/images/mockup-course.png",
    description: "Página de vendas para lançamento de curso online com integração de checkout.",
    stack: ["Next.js", "Stripe", "Framer Motion"]
  },
  {
    id: 4,
    title: "Elite Estates - Imóveis de Luxo",
    category: "Imobiliária",
    image: "/images/mockup-realestate.png",
    description: "Vitrine de imóveis de alto padrão com galeria interativa e tour virtual.",
    stack: ["React", "Leaflet", "Gallery API"]
  }
];

export function Portfolio() {
  const [activeProject, setActiveProject] = useState(portfolioItems[0]);

  return (
    <section id="projects" className="py-24 bg-[#1C3F3A] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Veja na prática algumas landing pages que já desenvolvi
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Card */}
          <div className="lg:col-span-8">
            <motion.div 
              layoutId="main-card"
              className="bg-[#244A44] rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                     NAVEGUE PELOS PROJETOS
                   </p>
                   <h3 className="text-3xl font-bold text-white">
                     {activeProject.title}
                   </h3>
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-[#1C3F3A] border border-white/10 text-xs font-medium text-white/80">
                   {activeProject.category}
                 </div>
              </div>

              {/* Browser/Image Container */}
              <div className="flex-1 bg-white rounded-xl overflow-hidden relative group min-h-[400px] border-4 border-white/5 shadow-inner">
                 {/* Browser Dots */}
                 <div className="absolute top-4 left-4 z-10 flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                 </div>

                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeProject.id}
                    src={activeProject.image}
                    alt={activeProject.title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                </AnimatePresence>
                
                {/* Scroll hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm bg-black/20">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-lg bg-[#1C3F3A] text-xs font-medium text-white/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                   <button className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
                     Ver detalhes
                   </button>
                   <Button className="h-10 px-6 rounded-lg bg-[#EBE8D8] text-[#1C3F3A] hover:bg-white font-semibold flex items-center gap-2 transition-all hover:scale-105">
                     Abrir site <ArrowUpRight className="w-4 h-4" />
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {portfolioItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveProject(item)}
                className={`w-full p-4 rounded-2xl cursor-pointer transition-all border text-left group relative overflow-hidden ${
                  activeProject.id === item.id 
                    ? "bg-[#244A44] border-white/10 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-[#244A44]/50"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-white/5">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-bold truncate ${activeProject.id === item.id ? 'text-white' : 'text-white/80'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs mt-1 truncate ${activeProject.id === item.id ? 'text-white/60' : 'text-white/40'}`}>
                      {item.category}
                    </p>
                  </div>
                  {activeProject.id === item.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EBE8D8]" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
