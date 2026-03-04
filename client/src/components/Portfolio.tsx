import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePortfolioProjects } from "@/hooks/use-portfolio-projects";

export function Portfolio() {
  const { projects, loading, error } = usePortfolioProjects();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = Array.isArray(projects)
  ? projects.find((p) => p.id === selectedId) ?? projects[0] ?? null
  : null;

  if (loading) {
    return (
      <section id="projects" className="py-32 bg-[#050608]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="h-64 flex items-center justify-center">
            <span className="text-white/30 text-sm">
              Carregando projetos...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return null; // Não exibe a seção se não há projetos
  }

  return (
    <section id="projects" className="py-32 bg-[#050608]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Explore</span>,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              na prática
            </span>
            , as landing pages que desenvolvemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              sob medida
            </span>{" "}
            para nossos clientes.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Project Display */}
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-white/50 text-sm uppercase tracking-widest block mb-2">
                    Navegue pelos projetos
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <span className="text-white/70 text-sm">
                  {selectedProject.category}
                </span>
              </div>

              <div className="hidden md:block relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#12141B] border border-white/10 mb-6">
                <iframe
                  src={selectedProject.url}
                  className="w-full h-full"
                  title={selectedProject.title}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-3 items-start">
                  {selectedProject.tags.slice(0, 9).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {selectedProject.tags.length > 9 && (
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
                      +{selectedProject.tags.length - 9}
                    </span>
                  )}
                </div>

                <Button
                  asChild
                  className="rounded-full bg-primary hover:bg-primary/90 text-black px-6 gap-2"
                >
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir site
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Project List */}
          <div className="max-h-[800px] overflow-y-auto space-y-4 scrollbar-hide">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedId(project.id)}
                className={`
                  group cursor-pointer rounded-2xl p-4 transition-all duration-300
                  ${
                    selectedProject?.id === project.id
                      ? "bg-white/10 border-2 border-primary"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }
                `}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#12141B]">
                    <img
                      src={project.thumbnail_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      {project.title}
                    </h4>
                    <span className="text-white/50 text-sm">
                      {project.category}
                    </span>
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
