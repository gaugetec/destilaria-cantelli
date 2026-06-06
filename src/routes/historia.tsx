import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/destilaria/20190921_142749.jpg";
const gioachinoImg = "/destilaria/20190921_142657.jpg";
const caminhosImg = "/destilaria/20190920_094946.jpg";
const finalImg = "/destilaria/20190516_100338.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Grappa Cantelli" },
      {
        name: "description",
        content:
          "Uma jornada iniciada em 1898 por Gioachino Cantelli, imigrante italiano que trouxe de Breganze a arte de produzir grappa preservada por gerações.",
      },
      { property: "og:title", content: "Nossa História — Grappa Cantelli" },
      {
        property: "og:description",
        content: "Uma jornada iniciada em 1898 nos Caminhos de Pedra, Serra Gaúcha.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/historia" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: HistoriaPage,
});

const timeline = [
  {
    year: "1881",
    title: "A partida da Itália",
    text: "Gioachino Cantelli deixa Breganze e chega ao Brasil, trazendo consigo a tradição da produção de grappa.",
  },
  {
    year: "1889",
    title: "O legado prematuro",
    text: "Com o falecimento de Gioachino, seu filho Matteo assume aos 13 anos a responsabilidade de honrar e manter os costumes familiares.",
  },
  {
    year: "Início do Século XX",
    title: "A comunidade em São Pedro",
    text: "Matteo se casa com Maria Osmarin e consolida a comunidade dos Cantelli em Bento Gonçalves, preservando a produção artesanal.",
  },
  {
    year: "Atualidade",
    title: "Herança viva",
    text: "O legado e a receita continuam vivos através de Arduino e das novas gerações, mantendo a essência original iniciada há mais de um século.",
  },
];

function HistoriaPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Caminhos de Pedra em Bento Gonçalves"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/85" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <Reveal>
            <div className="eyebrow !text-gold-soft">La nostra storia</div>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-[0.15em] text-cream">
              Nossa História
            </h1>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="font-serif italic text-xl md:text-2xl text-cream/90">
                Uma jornada iniciada em 1898
              </span>
              <span className="h-px w-12 bg-gold" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GIOACHINO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid gap-16 md:grid-cols-5 items-center">
          <Reveal className="md:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden bg-wood-dark">
              <img
                src={gioachinoImg}
                alt="Alambique da Destilaria Cantelli"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-3 border border-gold/40" />
            </div>
            <p className="mt-4 font-serif italic text-sm text-charcoal/60 text-center">
              Alambique da Destilaria Cantelli
            </p>
          </Reveal>

          <Reveal delay={200} className="md:col-span-3">
            <div className="eyebrow">Capitolo I</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-charcoal">
              O início de uma tradição
            </h2>
            <span className="gold-rule mt-8" />
            <p className="mt-8 font-serif text-xl text-charcoal/80 leading-[1.8]">
              No final do século XIX, por volta de 1881, <em className="text-wood-dark">Gioachino Cantelli</em>{" "}
              deixou a cidade de Breganze, na Itália, trazendo ao Brasil conhecimentos, costumes e tradições que seriam preservados
              por sua família ao longo das gerações.
            </p>
            <p className="mt-6 font-serif text-xl text-charcoal/70 leading-[1.8]">
              Entre esses ensinamentos estava a arte de produzir grappa — uma bebida que se
              tornaria parte da identidade familiar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 bg-wood-dark text-cream relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
          <Reveal className="text-center">
            <div className="eyebrow">Linea del tempo</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl text-cream">
              Mais de um século
            </h2>
            <div className="mt-6 mx-auto h-px w-24 bg-gold" />
          </Reveal>

          <ol className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gold/30 -translate-x-px md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={item.year}
                delay={i * 150}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 pb-16 last:pb-0 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="font-display text-3xl md:text-4xl text-cream tracking-[0.1em]">
                    {item.year}
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                  <h3 className="font-display text-xl tracking-[0.2em] uppercase text-gold-soft">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-serif text-lg text-cream/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* node */}
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 z-10">
                  <div className="h-3 w-3 rotate-45 bg-gold border border-gold ring-4 ring-wood-dark" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CAMINHOS DE PEDRA */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src={caminhosImg}
            alt="Vista panorâmica dos Caminhos de Pedra"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        <div className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <Reveal>
              <div className="eyebrow">Caminhos de Pedra · Bento Gonçalves</div>
              <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-charcoal">
                Onde a tradição encontrou seu lar
              </h2>
              <div className="mt-8 mx-auto h-px w-24 bg-gold" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 font-serif text-xl md:text-2xl text-charcoal/80 leading-[1.8]">
                Foi na região dos Caminhos de Pedra, em Bento Gonçalves, que a família
                Cantelli consolidou sua história.
              </p>
              <p className="mt-6 font-serif text-xl md:text-2xl text-charcoal/70 leading-[1.8]">
                Entre vinhedos, casas de pedra e paisagens que remetem às origens
                italianas, a tradição da grappa continuou sendo preservada ao longo das
                gerações.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O LEGADO */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        <div className="absolute top-10 left-10 font-display text-[12rem] md:text-[18rem] leading-none text-gold/8 select-none pointer-events-none">
          II
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow">Capitolo II</div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-charcoal">
              Mais do que uma bebida
            </h2>
            <span className="gold-rule mt-8" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 font-serif text-xl md:text-2xl text-charcoal/80 leading-[1.8]">
              A Grappa Cantelli é a expressão de uma história familiar construída ao longo
              de gerações.
            </p>
            <p className="mt-6 font-serif text-xl md:text-2xl text-charcoal/70 leading-[1.8]">
              Cada garrafa carrega memórias, valores e a dedicação daqueles que mantiveram
              viva uma tradição iniciada há mais de cem anos.
            </p>
            <p className="mt-6 font-serif text-xl md:text-2xl text-charcoal/70 leading-[1.8]">
              Ela representa o encontro entre passado e presente, preservando a identidade
              cultural herdada dos imigrantes italianos que ajudaram a construir a história
              da Serra Gaúcha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative h-[85vh] min-h-[540px] overflow-hidden flex items-center justify-center text-center">
        <img
          src={finalImg}
          alt="Garrafa de grappa premium em adega artesanal"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute inset-0 vignette" />
        <div className="relative z-10 px-6 max-w-3xl text-cream">
          <Reveal>
            <span className="eyebrow !text-gold-soft">Cantelli · MDCCCLXXXI</span>
            <h2 className="mt-8 font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.25]">
              Mais de um século de tradição.
              <br />
              <span className="text-gold">Uma história que continua sendo escrita.</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/"
              className="group mt-14 inline-flex items-center gap-4 border border-gold/60 px-10 py-4 font-display text-[0.72rem] tracking-[0.4em] uppercase text-cream hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
              Voltar para Home
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
