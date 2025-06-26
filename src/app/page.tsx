import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Problem from '@/components/sections/problem';
import Features from '@/components/sections/features';
import Plans from '@/components/sections/plans';
import Differentiators from '@/components/sections/differentiators';
import Team from '@/components/sections/team';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Features />
        <Plans />
        <Differentiators />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
