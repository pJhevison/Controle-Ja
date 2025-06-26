import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+55 92 91234-5678',
    action: 'Chamar Agora',
    href: '#',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    detail: '@controle_ja',
    action: 'Siga-nos',
    href: '#',
  },
  {
    icon: Mail,
    title: 'Suporte por E-mail',
    detail: 'suporte@controleja.com',
    action: 'Enviar E-mail',
    href: 'mailto:suporte@controleja.com',
  },
  {
    icon: MapPin,
    title: 'Nosso Escritório',
    detail: 'Av. Djalma Batista, 1234, Manaus - AM',
    action: 'Obter Direções',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24 bg-muted/50 rounded-lg my-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          Estamos aqui para ajudá-lo a navegar em suas finanças. Entre em contato conosco por qualquer canal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {contactMethods.map((method) => (
          <Card key={method.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">{method.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{method.detail}</p>
              <Button asChild variant="outline" className="mt-4">
                <a href={method.href}>{method.action}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
