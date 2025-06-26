import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const freeFeatures = [
  'Cash Flow Management',
  'Basic Reports',
  'Spending Alerts (3 per month)',
];

const premiumFeatures = [
  'All Freemium features',
  'Unlimited Graphs and Reports',
  'Unlimited Spending Alerts',
  'Personalized Financial Tips',
  'Priority WhatsApp Support',
  'Offline Mode',
];

export default function Plans() {
  return (
    <section id="plans" className="container py-12 md:py-24 bg-muted/50 rounded-lg">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          Start for free and upgrade when you need more power. Simple and transparent pricing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Perfect for getting started and organizing your basic finances.</CardDescription>
            <div className="text-4xl font-bold mt-4">R$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {freeFeatures.map(feature => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get Started for Free</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border-2 border-primary shadow-lg relative">
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>Unlock powerful features to accelerate your business growth.</CardDescription>
            <div className="text-4xl font-bold mt-4">R$29,90<span className="text-lg font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {premiumFeatures.map(feature => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Upgrade to Premium</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
