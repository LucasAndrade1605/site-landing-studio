import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020304] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <span className="text-primary">Landing</span>Studio
            </a>
            <p className="text-white/60 max-w-md text-lg">
              Especialistas em criar landing pages que não apenas impressionam, mas convertem visitantes em clientes fiéis.
            </p>
            <div className="flex gap-4 pt-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-white/60 hover:text-white">IG</div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-white/60 hover:text-white">LI</div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-white/60 hover:text-white">TW</div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-semibold">Empresa</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-semibold">Serviços</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design UI/UX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Webflow Dev</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-semibold">Newsletter</h4>
            <p className="text-white/60 text-sm">Receba dicas de conversão e design semanalmente.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm w-full focus:outline-none focus:border-primary/50"
              />
              <Button className="bg-primary text-black hover:bg-primary/90 rounded-lg px-4">
                <Check className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Landing Pages Studio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
