
import { Phone, Mail} from "lucide-react";
import logoReduzida from "@/assets/logo_completa.png";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#020304] pt-8 pb-4 border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-[-40px]">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              <img
                src={logoReduzida}
                alt="Landing Studio"
                className="h-44 w-auto ml-[-35px] mb-[-15px]"
              />
            </a>
            <p className="text-white/60 max-w-md text-lg">
              Especialistas em criar landing pages que não apenas impressionam,
              mas convertem visitantes em clientes fiéis.
            </p>
          </div>

          <div className="md:col-span-3 mt-8 space-y-6">
            <h4 className="text-white font-semibold">Contato</h4>
            <a
              href="https://wa.me/5567981377755"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (67) 9 8137-7755
            </a>
            <a
              href="mailto:contato@landingpage.com.br"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              contato@landingstudio.com.br
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
