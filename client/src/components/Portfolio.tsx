import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "SaaS / B2B",
    image: "/images/project-1.png",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Luxury Watch Store",
    category: "E-commerce",
    image: "/images/project-2.png",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export function Portfolio() {
  return (
    <section id="projects" className="py-32 bg-[#050608]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos Recentes</h2>
          </div>
          <Button variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/5 px-6">
            Ver Todos os Projetos
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#12141B] border border-white/10 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">{project.category}</span>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
