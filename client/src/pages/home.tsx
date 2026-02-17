import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <About />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
