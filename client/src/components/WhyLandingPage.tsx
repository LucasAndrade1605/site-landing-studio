import { CheckCircle2 } from "lucide-react";

export function WhyLandingPage() {
  const points = [
    {
      title: "Foco total na conversão",
      desc: "Diferente de um site institucional cheio de menus e distrações, a landing page tem um único objetivo: fazer o visitante tomar uma ação específica."
    },
    {
      title: "Mais resultado com o mesmo investimento em anúncios",
      desc: "Quando o tráfego é enviado para uma página pensada estrategicamente, a taxa de conversão aumenta e o custo por lead/venda tende a cair."
    },
    {
      title: "Mensagem clara e direta para o público certo",
      desc: "A landing page fala de uma oferta específica para um público específico, com uma narrativa simples, prova social e chamadas bem posicionadas."
    },
    {
      title: "Teste, otimização e escala",
      desc: "Com uma estrutura organizada, fica muito mais fácil testar novos textos, imagens, cores e elementos sem bagunçar o site inteiro."
    },
    {
      title: "Perfeita para campanhas, lançamentos e serviços principais",
      desc: "Ideal para campanhas de tráfego pago, páginas de captura de leads, lançamento de produtos/serviços, eventos, mentorias, cursos e muito mais."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Por que sua oferta merece uma landing page própria?
          </h2>
        </div>

        <div className="space-y-6">
          {points.map((point, idx) => (
            <div key={idx} className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
