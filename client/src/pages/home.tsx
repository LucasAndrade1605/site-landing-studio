import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyLucas } from "@/components/WhyLucas";
import { PortfolioInteractive } from "@/components/PortfolioInteractive";
import { AboutQuality } from "@/components/AboutQuality";
import { WhyLandingPage } from "@/components/WhyLandingPage";
import { ServiceBuilder } from "@/components/ServiceBuilder";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand-dark selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <WhyLucas />
        <PortfolioInteractive />
        <div id="about">
          <AboutQuality />
        </div>
        <WhyLandingPage />
        <div id="services">
          <ServiceBuilder />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
