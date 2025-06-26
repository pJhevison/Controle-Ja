import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Pedro Jhevison',
    role: 'Co-founder & CEO',
    bio: 'A passionate developer and entrepreneur, Pedro created Controle Já to solve the financial pains he saw his family and friends face while running their small businesses in Manaus.',
    image: 'https://placehold.co/200x200.png',
    aiHint: 'man portrait',
  },
  {
    name: 'Rayane Lira',
    role: 'Co-founder & Head of Product',
    bio: "With a keen eye for user experience and a deep understanding of the local market, Rayane ensures the platform is intuitive, helpful, and truly aligned with the needs of Amazonian entrepreneurs.",
    image: 'https://placehold.co/200x200.png',
    aiHint: 'woman portrait',
  },
];

export default function Team() {
  return (
    <section id="team" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Founders</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          The minds and hearts behind Controle Já.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center bg-card">
            <CardHeader className="items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={member.aiHint}
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
