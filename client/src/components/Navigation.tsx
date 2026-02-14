import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Sobre", href: "#about" },
    { name: "Investimento", href: "#pricing" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#050608]/80 backdrop-blur-xl border-white/5 py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-primary">Landing</span>Studio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050608] border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-2xl">
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
          <Button className="w-full rounded-full bg-primary text-black hover:bg-primary/90 font-medium mt-4">
            Começar Projeto
          </Button>
        </div>
      )}
    </nav>
  );
}
