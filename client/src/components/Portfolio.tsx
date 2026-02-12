import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Veja na prática algumas landing pages que já desenvolvi
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Card - Left Side (8 cols) */}
          <div className="lg:col-span-8 order-1 lg:order-none">
            <motion.div 
              layoutId="main-card"
              className="bg-[#244A44] rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden shadow-xl border border-white/5"
            >
              {/* Header inside card */}
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1.5 font-heading">
                     NAVEGUE PELOS PROJETOS
                   </p>
                   <h3 className="text-3xl font-bold text-white tracking-tight">
                     {activeProject.title}
                   </h3>
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-[#1C3F3A]/50 border border-white/10 text-xs font-medium text-white/90 backdrop-blur-sm h-fit">
                   {activeProject.category}
                 </div>
              </div>

              {/* Browser Window / Image Container */}
              <div className="flex-1 bg-[#1C3F3A] rounded-2xl overflow-hidden relative group min-h-[300px] md:min-h-[420px] shadow-inner border border-white/5">
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
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                  <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white">
                    Preview do Projeto
                  </div>
                </div>
              </div>

              {/* Footer Actions inside card */}
              <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#1C3F3A]/60 text-xs font-medium text-white/60 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                   <button className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                     Ver detalhes
                   </button>
                   <Button className="h-10 px-5 rounded-lg bg-[#EBE8D8] text-[#1C3F3A] hover:bg-white font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(235,232,216,0.2)]">
                     Abrir site <ArrowUpRight className="w-4 h-4" />
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thumbnails Sidebar - Right Side (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-none">
            {portfolioItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveProject(item)}
                className={`w-full p-3 rounded-[1.25rem] cursor-pointer transition-all border text-left group relative flex items-center gap-4 ${
                  activeProject.id === item.id 
                    ? "bg-[#244A44] border-white/10 shadow-lg scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-[#244A44]/30"
                }`}
              >
                <div className="w-16 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-white/5 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  {activeProject.id === item.id && (
                    <div className="absolute inset-0 bg-[#1C3F3A]/20" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0 py-1">
                  <h4 className={`text-sm font-bold truncate transition-colors ${activeProject.id === item.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs mt-1 truncate transition-colors ${activeProject.id === item.id ? 'text-white/60' : 'text-white/40'}`}>
                    {item.category}
                  </p>
                </div>
                
                {/* Active indicator dot similar to reference, but simplified */}
                {activeProject.id === item.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EBE8D8] mr-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
