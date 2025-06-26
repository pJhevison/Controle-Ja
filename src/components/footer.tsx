import { Instagram, MessageCircle } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Controle Já</span>
            </div>
            <p className="text-sm text-muted-foreground">A bússola financeira para o empreendedor amazônida.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link href="#plans" className="hover:text-primary transition-colors">Planos</Link></li>
              <li><Link href="#team" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Conecte-se Conosco</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
             <p className="text-sm text-muted-foreground mt-4">
              Manaus, Amazonas, Brasil
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bússola Amazônia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
