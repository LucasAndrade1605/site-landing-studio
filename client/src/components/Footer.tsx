import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-bold tracking-tighter text-white block mb-6">
                Lucas<span className="text-brand-beige">Dev</span>
              </a>
            </Link>
            <p className="text-white/60 max-w-xs">
              Especialista em landing pages de alta conversão. Transformando visitantes em clientes com design estratégico e tecnologia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-brand-beige transition-colors">Início</a></li>
              <li><a href="#projects" className="hover:text-brand-beige transition-colors">Portfólio</a></li>
              <li><a href="#services" className="hover:text-brand-beige transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-brand-beige transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-brand-beige transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Lucas Dev Landing Pages. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
