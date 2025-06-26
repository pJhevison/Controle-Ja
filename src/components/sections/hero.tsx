import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
              Sua Bússola Financeira
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              O Controle Já é a plataforma de gestão financeira desenhada para autônomos, microempreendedores e pequenas empresas da Região Norte do Brasil.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#plans">Ver Planos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">Saiba Mais</Link>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold">Missão</h3>
              <p className="text-sm text-muted-foreground mt-2">Capacitar empreendedores amazônidas com ferramentas financeiras simples e acessíveis.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Visão</h3>
              <p className="text-sm text-muted-foreground mt-2">Ser o principal parceiro financeiro para pequenas empresas no Norte do Brasil.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Valores</h3>
              <p className="text-sm text-muted-foreground mt-2">Simplicidade, Foco Regional e Apoio ao Crescimento Local.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
