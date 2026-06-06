import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          <div>
            <div className="font-display text-2xl tracking-[0.3em]">GRAPPA</div>
            <div className="font-display text-[0.65rem] tracking-[0.5em] text-gold mt-2">
              CANTELLI
            </div>
            <div className="mt-6 inline-block h-px w-16 bg-gold" />
            <p className="mt-6 font-serif text-lg italic text-cream/80 leading-relaxed max-w-xs">
              Tradição, história e autenticidade desde 1898.
            </p>
          </div>

          <div className="md:justify-self-center">
            <div className="eyebrow !text-gold-soft">Navegação</div>
            <ul className="mt-6 space-y-3 font-display text-[0.72rem] tracking-[0.3em] uppercase">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/historia" className="text-cream/80 hover:text-gold transition-colors">
                  História da Família
                </Link>
              </li>
              <li>
                <Link to="/rotulos" className="text-cream/80 hover:text-gold transition-colors">
                  Rótulos
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <div className="eyebrow !text-gold-soft">Apreciação</div>
            <p className="mt-6 font-serif text-lg italic text-cream/80 leading-relaxed">
              Ideal para ser apreciada como digestivo
              <br />
              após as refeições.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-[0.65rem] tracking-[0.4em] uppercase text-cream/40">
            © {new Date().getFullYear()} Grappa Cantelli
          </p>
          <p className="font-display text-[0.65rem] tracking-[0.4em] uppercase text-cream/40">
            Caminhos de Pedra · Serra Gaúcha
          </p>
        </div>
      </div>
    </footer>
  );
}
