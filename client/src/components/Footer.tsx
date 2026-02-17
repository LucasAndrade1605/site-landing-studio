import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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
              href="#hero"
              className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Landing
              </span>{" "}
              Studio
            </a>
            <p className="text-white/60 max-w-md text-lg">
              Especialistas em criar landing pages que não apenas impressionam,
              mas convertem visitantes em clientes fiéis.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-semibold">Contato</h4>
            <a
              href="https://wa.me/5567993498440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (67) 9 9349-8440
            </a>
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
