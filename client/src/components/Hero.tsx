import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const carouselItems = [
  {
    id: 1,
    title: "Clínica Vida Plena – Captação de Pacientes",
    description: "Landing page focada em agendamentos via WhatsApp.",
    image: "/images/mockup-clinic.png",
    link: "#"
  },
  {
    id: 2,
    title: "LaunchMaster - Venda de Curso",
    description: "Página de alta conversão para lançamentos de infoprodutos.",
    image: "/images/mockup-course.png",
    link: "#"
  },
  {
    id: 3,
    title: "Elite Estates - Imóveis de Luxo",
    description: "Design premium para captação de leads qualificados.",
    image: "/images/mockup-realestate.png",
    link: "#"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Column 1: Text Content */}
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark mb-6">
              Landing pages sob medida para transformar cliques em clientes
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Da estratégia ao design e integrações, eu construo landing pages totalmente focadas em conversão, com entrega rápida e prontas para anunciar hoje mesmo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <Button 
              className="h-14 px-8 rounded-full bg-brand-dark text-white hover:bg-brand-medium text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Quero minha landing page vendedora
            </Button>
            <p className="text-sm text-gray-500 max-w-md">
              Sem burocracia: você escolhe o que precisa, vê o valor na hora e recebe um orçamento certeiro pelo WhatsApp.
            </p>
          </motion.div>
        </div>

        {/* Column 2: Carousel Component */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative bg-gray-50 rounded-[2rem] p-4 shadow-2xl border border-gray-100">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={carouselItems[currentIndex].image} 
                    alt={carouselItems[currentIndex].title}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Card Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-brand-dark">{carouselItems[currentIndex].title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{carouselItems[currentIndex].description}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full hover:bg-gray-100">
                      <ExternalLink className="w-5 h-5 text-brand-dark" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 px-2">
               <div className="flex gap-2">
                 {carouselItems.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => setCurrentIndex(idx)}
                     className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-brand-dark' : 'bg-gray-300'}`}
                   />
                 ))}
               </div>
               <div className="flex gap-2">
                 <Button onClick={prevSlide} size="icon" variant="outline" className="rounded-full w-10 h-10 border-gray-200">
                   <ChevronLeft className="w-5 h-5" />
                 </Button>
                 <Button onClick={nextSlide} size="icon" variant="outline" className="rounded-full w-10 h-10 border-gray-200">
                   <ChevronRight className="w-5 h-5" />
                 </Button>
               </div>
            </div>
            
            <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
               <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"/>
               Arraste ou use as setas para navegar
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full rounded-[2.5rem] bg-brand-beige/50" />
        </motion.div>
      </div>
    </section>
  );
}
