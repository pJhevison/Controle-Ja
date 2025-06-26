import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Map, MessageSquareText, WifiOff } from 'lucide-react';

const differentiators = [
  {
    icon: Map,
    title: 'Customização Regional',
    description: 'Desenvolvido na Amazônia, para a Amazônia. Entendemos as nuances do mercado local e os desafios que você enfrenta.',
  },
  {
    icon: WifiOff,
    title: 'Suporte Offline',
    description: "Sem internet? Sem problemas. Nosso aplicativo funciona offline, sincronizando seus dados sempre que você estiver online novamente.",
  },
  {
    icon: MessageSquareText,
    title: 'Linguagem Fácil',
    description: 'Falamos a sua língua. Sem jargões financeiros complicados, apenas orientações claras e simples.',
  },
  {
    icon: Heart,
    title: 'Impacto Social',
    description: 'Ao usar o Controle Já, você apoia um negócio local comprometido em fomentar o empreendedorismo em nossa região.',
  },
];

export default function Differentiators() {
  return (
    <section id="why-us" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Por Que Somos Diferentes</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          Somos mais do que uma ferramenta. Somos seu parceiro no crescimento, com recursos projetados para a nossa realidade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {differentiators.map((item) => (
          <Card key={item.title} className="border-0 shadow-none bg-transparent">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
