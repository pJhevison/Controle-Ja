import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BellRing, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";

const featuresList = [
  {
    icon: TrendingUp,
    title: "Gestão de Fluxo de Caixa",
    description: "Uma ferramenta simples e visual para registrar receitas e despesas, ajudando você a ver para onde seu dinheiro vai.",
    imageSrc: "https://placehold.co/400x250.png",
    dataAiHint: "cash flow",
  },
  {
    icon: BellRing,
    title: "Alertas de Gastos",
    description: "Receba notificações inteligentes sobre pagamentos a vencer e quando estiver perto de ultrapassar seu orçamento.",
    imageSrc: "https://placehold.co/400x250.png",
    dataAiHint: "notification alert",
  },
  {
    icon: Lightbulb,
    title: "Dicas Financeiras",
    description: "Receba orientações e insights contextualizados para ajudar a melhorar seu planejamento financeiro e tomada de decisão.",
    imageSrc: "https://placehold.co/400x250.png",
    dataAiHint: "idea lightbulb",
  },
  {
    icon: BarChart,
    title: "Gráficos e Relatórios",
    description: "Visualize sua saúde financeira com gráficos e relatórios fáceis de entender, disponíveis rapidamente.",
    imageSrc: "https://placehold.co/400x250.png",
    dataAiHint: "charts analytics",
  },
  {
    icon: MessageCircle,
    title: "Suporte Personalizado",
    description: "Nossa equipe está pronta para ajudá-lo via WhatsApp e redes sociais, oferecendo um atendimento personalizado.",
    imageSrc: "https://placehold.co/400x250.png",
    dataAiHint: "customer support",
  }
];

export default function Features() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos Principais</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          Tudo o que você precisa para assumir o controle das finanças do seu negócio, simplificado para você.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuresList.map((feature) => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
            <CardHeader>
              <div className="bg-primary/10 rounded-full p-4 w-fit mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
               <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden">
                    <Image
                        src={feature.imageSrc}
                        alt={`Imagem ilustrativa para ${feature.title}`}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={feature.dataAiHint}
                    />
                </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
