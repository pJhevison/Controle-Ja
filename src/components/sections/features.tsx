import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BellRing, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";

const featuresList = [
  {
    icon: TrendingUp,
    title: "Cash Flow Management",
    description: "A simple and visual tool to record income and expenses, helping you see where your money goes.",
  },
  {
    icon: BellRing,
    title: "Spending Alerts",
    description: "Receive smart notifications for due payments and when you're close to overspending on your budget.",
  },
  {
    icon: Lightbulb,
    title: "Financial Tips",
    description: "Get contextualized guidance and insights to help you improve your financial planning and decision-making.",
  },
  {
    icon: BarChart,
    title: "Graphs and Reports",
    description: "Visualize your financial health with easy-to-understand charts and reports, available at a glance.",
  },
  {
    icon: MessageCircle,
    title: "Personalized Support",
    description: "Our team is ready to assist you via WhatsApp and social media, offering personalized customer service.",
  }
];

export default function Features() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          Everything you need to take control of your business finances, simplified for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuresList.map((feature) => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="bg-accent/10 rounded-full p-4 w-fit mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
