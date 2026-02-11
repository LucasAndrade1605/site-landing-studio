import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Clínica Vida Plena – Captação de Pacientes",
    category: "Saúde",
    image: "/images/mockup-clinic.png",
    description: "Landing page focada em conversão para agendamentos via WhatsApp e formulário.",
    stack: ["React", "Tailwind", "WhatsApp API"]
  },
  {
    id: 2,
    title: "LaunchMaster - Venda de Curso",
    category: "Infoproduto",
    image: "/images/mockup-course.png",
    description: "Página de vendas para lançamento de curso online com integração de checkout.",
    stack: ["Next.js", "Stripe", "Framer Motion"]
  },
  {
    id: 3,
    title: "Elite Estates - Imóveis de Luxo",
    category: "Imobiliária",
    image: "/images/mockup-realestate.png",
    description: "Vitrine de imóveis de alto padrão com galeria interativa e tour virtual.",
    stack: ["React", "Leaflet", "Gallery API"]
  },
  {
    id: 4,
    title: "SaaS Analytics Pro",
    category: "Software B2B",
    image: "/images/mockup-saas.png",
    description: "Landing page para software B2B com demonstração interativa e tabela de preços.",
    stack: ["Vue", "Chart.js", "HubSpot"]
  }
];

export function PortfolioInteractive() {
  const [activeProject, setActiveProject] = useState(portfolioItems[0]);

  return (
    <section className="bg-brand-dark py-24 text-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            Veja na prática algumas landing pages que já desenvolvi
          </h2>
        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <motion.div 
              layoutId="main-card"
              className="bg-[#244A44] rounded-[2rem] p-6 h-full flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                 <div>
                   <p className="text-brand-beige/60 text-sm font-medium uppercase tracking-wider mb-1">
                     Navegue pelos projetos
                   </p>
                   <h3 className="text-2xl font-bold text-white">
                     {activeProject.title}
                   </h3>
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-brand-dark border border-white/10 text-sm font-medium text-brand-beige">
                   {activeProject.category}
                 </div>
              </div>

              {/* Preview Window */}
              <div className="flex-1 bg-white rounded-xl overflow-hidden relative group min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeProject.id}
                    src={activeProject.image}
                    alt={activeProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                </AnimatePresence>
                
                {/* Scroll Indicator Overlay */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Role para ver mais
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-xs text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                   <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                     Ver detalhes
                   </Button>
                   <Button className="bg-brand-beige text-brand-dark hover:bg-white">
                     Abrir site <ArrowUpRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveProject(item)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeProject.id === item.id 
                    ? "bg-[#244A44] border-brand-beige/30 shadow-lg scale-[1.02]" 
                    : "bg-white/5 border-transparent hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-12 rounded-lg object-cover bg-brand-dark"
                  />
                  <div>
                    <h4 className={`text-sm font-bold ${activeProject.id === item.id ? 'text-white' : 'text-white/70'}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-beige/60 mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
