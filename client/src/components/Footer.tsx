import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#020304] pt-24 pb-12 border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-6">
            <a
              href="/"
              className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              <span className="text-primary">Landing</span>Studio
            </a>
            <p className="text-white/60 max-w-md text-lg">
              Especialistas em criar landing pages que não apenas impressionam,
              mas convertem visitantes em clientes fiéis.
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-semibold">Empresa</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex justify-center items-center gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Landing Pages Studio. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
