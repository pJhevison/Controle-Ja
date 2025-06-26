import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Pedro Jhevison',
    role: 'Cofundador e CEO',
    bio: 'Desenvolvedor e empreendedor apaixonado, Pedro criou o Controle Já para resolver as dores financeiras que via sua família e amigos enfrentarem ao administrar seus pequenos negócios em Manaus.',
    image: '/pedro.jpg',
  },
  {
    name: 'Rayane Lira',
    role: 'Cofundadora e Chefe de Produto',
    bio: "Com um olhar atento para a experiência do usuário e um profundo conhecimento do mercado local, Rayane garante que a plataforma seja intuitiva, útil e verdadeiramente alinhada com as necessidades dos empreendedores amazônidas.",
    image: 'https://placehold.co/200x200.png',
    aiHint: 'woman portrait',
  },
];

export default function Team() {
  return (
    <section id="team" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Fundadores</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          As mentes e os corações por trás do Controle Já.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center bg-card">
            <CardHeader className="items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={(member as any).aiHint}
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
              <p className="text-muted-foreground mt-4">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
