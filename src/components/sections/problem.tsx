import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="container py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">O Desafio para Empreendedores Locais</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            No coração da Amazônia, empreendedores enfrentam obstáculos financeiros únicos. Desde fluxo de caixa inconsistente e dificuldade de acesso a crédito até a falta de educação financeira adaptada à nossa realidade, gerenciar um pequeno negócio pode ser avassalador.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Economia Informal</h4>
                <p className="text-muted-foreground text-sm">Muitos operam na informalidade, dificultando a separação das finanças pessoais e empresariais.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Barreiras Logísticas</h4>
                <p className="text-muted-foreground text-sm">Problemas de conectividade e distâncias geográficas complicam as operações financeiras diárias.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Falta de Ferramentas Simples</h4>
                <p className="text-muted-foreground text-sm">As soluções existentes são muitas vezes complexas, caras ou não foram projetadas para o contexto local.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Empreendedor amazônida trabalhando" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="local business"
            className="transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
