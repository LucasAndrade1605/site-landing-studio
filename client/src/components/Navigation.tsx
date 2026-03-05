import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoCompleta from "@/assets/logo_completa.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    // Inicializa o estado
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Sobre", href: "#about" },
    { name: "Investimento", href: "#pricing" },
    { name: "Perguntas", href: "#faq" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-[-20px] left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#050608]/80 backdrop-blur-xl border-white/5 py-1"
          : "bg-transparent py-2",
      )}
    >
      <div className="container mt-[-10px] mb-[-15px] mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src={logoCompleta}
            alt="Landing Studio"
            className="h-48 w-auto ml-[-25px] mb-[-35px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              variant="default"
              className="rounded-full cursor-pointer bg-primary text-black hover:bg-primary/90 font-medium px-6"
            >
              Começar Projeto
            </Button>
          </div>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050608] border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="w-full rounded-full bg-primary text-black hover:bg-primary/90 font-medium mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              const pricingSection = document.getElementById("pricing");
              pricingSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Começar Projeto
          </Button>
        </div>
      )}
    </nav>
  );
}
