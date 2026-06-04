import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import legacyImg from "@/assets/family-legacy.jpg";
import parallaxImg from "@/assets/parallax-vineyards.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grappa Cantelli — Uma tradição preservada desde 1898" },
      {
        name: "description",
        content:
          "Mais de um século de história, autenticidade e tradição. A Grappa Cantelli preserva o legado familiar iniciado por Gioachino Cantelli nos Caminhos de Pedra, Serra Gaúcha.",
      },
      { property: "og:title", content: "Grappa Cantelli — Uma tradição preservada desde 1898" },
      {
        property: "og:description",
        content:
          "Mais de um século de história, autenticidade e tradição transmitidas através das gerações.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Vinhedos dos Caminhos de Pedra ao amanhecer"
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-[heroZoom_18s_ease-out_forwards]"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
        <div className="absolute inset-0 vignette" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <Reveal delay={200}>
            <div className="eyebrow !text-gold-soft">Dal 1898 · Caminhos de Pedra</div>
          </Reveal>
          <Reveal delay={400}>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl tracking-[0.15em] font-medium">
              GRAPPA
              <span className="block mt-2 text-gold">CANTELLI</span>
            </h1>
          </Reveal>
          <Reveal delay={700}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="font-serif italic text-xl md:text-2xl text-cream/90">
                Uma tradição preservada desde 1898
              </span>
              <span className="h-px w-12 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={1000}>
            <p className="mt-8 max-w-xl font-serif text-lg md:text-xl text-cream/80 leading-relaxed">
              Mais de um século de história, autenticidade e tradição transmitidas
              através das gerações.
            </p>
          </Reveal>
          <Reveal delay={1300}>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link
                to="/historia"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-4 border border-gold/60 px-8 py-4 font-display text-[0.72rem] tracking-[0.4em] uppercase text-cream hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Conheça Nossa História
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/rotulos"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-4 border border-gold/60 bg-gold/5 px-8 py-4 font-display text-[0.72rem] tracking-[0.4em] uppercase text-cream hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Conheça Nossos Rótulos
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="h-12 w-px bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* UM LEGADO FAMILIAR */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid gap-16 md:grid-cols-2 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-3 border border-gold/40 z-10 pointer-events-none" />
              <img
                src={legacyImg}
                alt="Família italiana histórica em frente à casa de pedra"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block font-display text-[7rem] leading-none text-gold/15 select-none">
              1898
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="eyebrow">Capitolo I</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-charcoal">
              Um legado que atravessa gerações
            </h2>
            <span className="gold-rule mt-8" />
            <p className="mt-8 font-serif text-xl text-charcoal/80 leading-[1.8]">
              A Grappa Cantelli representa muito mais do que uma bebida. Ela carrega a
              memória, os costumes e o trabalho de gerações que preservaram uma tradição
              iniciada por <em className="text-wood-dark">Gioachino Cantelli</em> no final do
              século XIX.
            </p>
            <p className="mt-6 font-serif text-xl text-charcoal/70 leading-[1.8]">
              Cada garrafa é resultado de uma história construída com dedicação, respeito
              às origens e paixão pela cultura italiana.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRADIÇÃO ARTESANAL */}
      <section className="py-24 md:py-32 bg-wood-dark text-cream relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="text-center">
            <div className="eyebrow">L'arte della grappa</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl text-cream">
              Tradição Artesanal
            </h2>
            <div className="mt-6 mx-auto h-px w-24 bg-gold" />
          </Reveal>

          <div className="mt-20 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                roman: "I",
                title: "Origem",
                text: "Matéria-prima selecionada da tradição vitivinícola da Serra Gaúcha.",
              },
              {
                roman: "II",
                title: "Destilação",
                text: "Processo artesanal inspirado nos métodos tradicionais italianos.",
              },
              {
                roman: "III",
                title: "Maturação",
                text: "Tempo e cuidado para preservar aromas e características únicas.",
              },
              {
                roman: "IV",
                title: "Legado",
                text: "Mais de um século de conhecimento transmitido entre gerações.",
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 120}
                className="group bg-wood-dark p-10 lg:p-12 transition-colors duration-500 hover:bg-charcoal"
              >
                <div className="font-display text-5xl text-gold/70 group-hover:text-gold transition-colors">
                  {card.roman}
                </div>
                <div className="mt-8 h-px w-10 bg-gold/60" />
                <h3 className="mt-6 font-display text-xl tracking-[0.2em] uppercase text-cream">
                  {card.title}
                </h3>
                <p className="mt-4 font-serif text-lg text-cream/70 leading-relaxed">
                  {card.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX HIGHLIGHT */}
      <section
        className="relative h-[70vh] min-h-[480px] parallax flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${parallaxImg})` }}
      >
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 px-6 max-w-4xl">
          <Reveal>
            <span className="font-display text-gold text-xs tracking-[0.5em] uppercase">
              MCMXCVIII
            </span>
            <blockquote className="mt-8 font-serif italic text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.3]">
              "Desde 1898 preservando uma
              <br />
              herança familiar única."
            </blockquote>
            <div className="mt-10 mx-auto h-px w-24 bg-gold" />
          </Reveal>
        </div>
      </section>

      {/* A ESSÊNCIA DA GRAPPA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <Reveal>
            <div className="eyebrow">L'essenza</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-charcoal">
              Uma tradição italiana preservada
              <br className="hidden md:block" />
              na Serra Gaúcha
            </h2>
            <div className="mt-8 mx-auto h-px w-24 bg-gold" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-12 font-serif text-xl md:text-2xl text-charcoal/80 leading-[1.8]">
              Originária da Itália, a grappa nasceu do aproveitamento do bagaço da uva e
              tornou-se símbolo da cultura vitivinícola italiana.
            </p>
            <p className="mt-6 font-serif text-xl md:text-2xl text-charcoal/70 leading-[1.8]">
              Na família Cantelli, essa tradição atravessou gerações e continua sendo
              preservada com orgulho, mantendo viva uma herança que começou há mais de cem
              anos.
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.12); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
