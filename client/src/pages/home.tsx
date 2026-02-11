import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-[0.03]"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos aumentar suas vendas com design estratégico.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
               <button className="h-14 px-8 rounded-full bg-primary text-black hover:bg-primary/90 text-lg font-semibold shadow-[0_0_30px_rgba(255,235,122,0.3)] transition-all w-full md:w-auto">
                Agendar Consultoria Grátis
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border border-white/10 text-white hover:bg-white/5 text-lg font-medium transition-all w-full md:w-auto">
                Ver Planos e Preços
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
