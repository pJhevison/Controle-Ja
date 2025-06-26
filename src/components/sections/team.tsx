import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  {
    name: 'Pedro Jhevison',
    role: 'Fundador e CEO',
    bio: 'Desenvolvedor apaixonado por criar soluções que impactam positivamente a vida das pessoas na Amazônia. Com experiência em fintech, Pedro lidera a visão e a tecnologia por trás do Controle Já.',
    image: '/pedro.jpg',
    fallback: 'PJ',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Rayane Lira',
    role: 'Co-fundadora e Diretora de Operações',
    bio: 'Especialista em negócios com foco no desenvolvimento regional. Rayane é a força motriz por trás da estratégia de mercado e do relacionamento com os clientes, garantindo que o Controle Já atenda às necessidades reais dos empreendedores.',
    image: '/ray.jpg',
    dataAiHint: 'woman portrait',
    fallback: 'RL',
  },
];

export default function Team() {
  return (
    <section id="team" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FUNDADORES</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          As mentes e corações por trás da Bússola Amazônia, dedicados a impulsionar o seu sucesso.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.image} alt={`Foto de ${member.name}`} data-ai-hint={member.dataAiHint} />
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}