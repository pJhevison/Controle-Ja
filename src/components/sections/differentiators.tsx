import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Map, MessageSquareText, WifiOff } from 'lucide-react';

const differentiators = [
  {
    icon: Map,
    title: 'Regional Customization',
    description: 'Developed in the Amazon, for the Amazon. We understand the local market nuances and challenges you face.',
  },
  {
    icon: WifiOff,
    title: 'Offline Support',
    description: "No internet? No problem. Our app works offline, syncing your data whenever you're back online.",
  },
  {
    icon: MessageSquareText,
    title: 'Easy Language',
    description: 'We speak your language. No complicated financial jargon, just clear and simple guidance.',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'By using Controle Já, you support a local business committed to fostering entrepreneurship in our region.',
  },
];

export default function Differentiators() {
  return (
    <section id="why-us" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why We're Different</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          We're more than just a tool. We're your partner in growth, with features designed for our reality.
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
