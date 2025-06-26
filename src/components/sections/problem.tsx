import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="container py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Challenge for Local Entrepreneurs</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            In the heart of the Amazon, entrepreneurs face unique financial hurdles. From inconsistent cash flow and difficulty accessing credit to a lack of financial literacy tailored to our reality, managing a small business can feel overwhelming.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Informal Economy</h4>
                <p className="text-muted-foreground text-sm">Many operate informally, making it hard to separate personal and business finances.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Logistical Barriers</h4>
                <p className="text-muted-foreground text-sm">Connectivity issues and geographic distances complicate daily financial operations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-3 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Lack of Simple Tools</h4>
                <p className="text-muted-foreground text-sm">Existing solutions are often too complex, expensive, or not designed for the local context.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Amazonian entrepreneur working" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="local business"
            className="transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
