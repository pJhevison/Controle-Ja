import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+55 92 91234-5678',
    action: 'Chat Now',
    href: '#',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    detail: '@controle_ja',
    action: 'Follow Us',
    href: '#',
  },
  {
    icon: Mail,
    title: 'Email Support',
    detail: 'suporte@controleja.com',
    action: 'Send Email',
    href: 'mailto:suporte@controleja.com',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    detail: 'Av. Djalma Batista, 1234, Manaus - AM',
    action: 'Get Directions',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24 bg-muted/50 rounded-lg my-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          We're here to help you navigate your finances. Reach out to us through any channel.
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
