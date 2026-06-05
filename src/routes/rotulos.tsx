import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/rotulos")({
  head: () => ({
    meta: [
      { title: "Nossos Rótulos — Grappa Cantelli" },
      {
        name: "description",
        content: "Conheça os nossos rótulos de grappas, vinhos, espumantes e licores produzidos com rigor e tradição.",
      },
    ],
  }),
  component: RotulosPage,
});

const categories = [
  {
    id: "grappas",
    name: "Grappas",
    description:
      "Produzidas com rigor e tradição na Serra Gaúcha, nossas grappas carregam a essência da família Cantelli.",
    products: [
      { name: "Grappa de Cabernet Sauvignon", desc: "Destilada de bagaço de Cabernet Sauvignon (50, 275, 500, 750 ml)", image: "/produtos/DSCF1844_Tradicional_Todas.jpg" },
      { name: "Grappa de Cabernet com Infusão", desc: "Com infusão de uva tinta (50, 275, 500, 750 ml)", image: "/produtos/DSCF1875_Uva_Todas.jpg" },
      { name: "Grappa de Moscato", desc: "Destilada de bagaço de uva Moscato (275, 500 e 750 ml)", image: "/produtos/DSCF1857_Moscato_Todas.jpg" },
      { name: "Grappa de Moscato com Infusão", desc: "Com infusão de uva (50, 275, 500 e 750 ml)", image: "/produtos/DSCF1885_Moscato.jpg" },
      { name: "Grappa Orgânica", desc: "(275 e 500 ml)", image: "/produtos/DSCF1960_Grappas.jpg" },
      { name: "Grappa Envelhecida", desc: "Envelhecida em barricas de Carvalho francês (500 ml)", image: "/produtos/DSCF1968_Grappas.jpg" },
      { name: "Grappa de Funcho", desc: "Com sabor funcho (275, 500 e 750 ml)", image: "/produtos/DSCF1826_Funcho.jpg" },
    ],
  },
  {
    id: "vinhos",
    name: "Vinhos",
    description:
      "Vinhos finos elaborados com uvas selecionadas e néctares integrais que preservam o sabor natural da fruta.",
    products: [
      { name: "Vinho Tinto Fino", desc: "Cabernet Sauvignon", image: "/produtos/DSCF1930_Carbernet Sauvignon.jpg" },
      { name: "Vinho Branco Fino", desc: "Chardonnay", image: "/produtos/DSCF1913_Chardonnay.jpg" },
      { name: "Néctar de Uva Tinto", desc: "(300 ml)", image: "/produtos/DSCF1935_Vinhos Tintos.jpg" },
      { name: "Néctar de Uva Branca", desc: "(300 ml)", image: "/produtos/DSCF1915_Vinhos Brancos.jpg" },
    ],
  },
  {
    id: "espumantes",
    name: "Espumantes",
    description: "Borbulhas finas e refrescantes, perfeitas para celebrar os melhores momentos da vida.",
    products: [
      { name: "Espumante Brut", desc: "Método Tradicional", image: "/produtos/DSCF1909_Brut.jpg" },
      { name: "Espumante Moscatel", desc: "Suave e aromático", image: "/produtos/DSCF1906_Moscatel.jpg" },
      { name: "Espumante Rosé", desc: "Fresco e frutado", image: "/produtos/DSCF1945_Espumantes.jpg" },
    ],
  },
  {
    id: "licores",
    name: "Licores",
    description:
      "Uma doce e intensa expressão dos sabores da Serra Gaúcha, ideais para digestivos.",
    products: [
      { name: "Licor de Figo", desc: "(275, 500 ml)", image: "/produtos/DSCF1819_Licor de Figo_Todas.jpg" },
      { name: "Néctar de Mirtilo", desc: "(300 ml)", image: "/produtos/DSCF1955_Grappas.jpg" },
    ],
  },
];

function RotulosPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-wood-dark text-cream relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <Reveal>
            <div className="eyebrow !text-gold-soft">A Tradição Engarrafada</div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-wide text-cream">
              Nossos Rótulos
            </h1>
            <div className="mt-8 mx-auto h-px w-24 bg-gold" />
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <main className="flex-1">
        {categories.map((category, index) => (
          <section
            key={category.id}
            className={`py-20 md:py-28 ${
              index % 2 === 0 ? "bg-background" : "bg-cream/5"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <Reveal className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-display text-3xl md:text-5xl text-charcoal">
                  {category.name}
                </h2>
                <div className="mt-6 mx-auto h-px w-16 bg-gold/50" />
                <p className="mt-6 font-serif text-lg md:text-xl text-charcoal/70 leading-relaxed">
                  {category.description}
                </p>
              </Reveal>

              <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                {category.products.map((product, pIndex) => (
                  <Reveal
                    key={`${product.name}-${pIndex}`}
                    delay={pIndex * 50}
                    className="group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.666rem)] lg:w-[calc(25%-1.875rem)]"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden border border-gold/20 bg-wood-dark/5 transition-colors duration-500 hover:border-gold/60">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-lg tracking-wider text-cream">
                          {product.name}
                        </h3>
                        {product.desc && (
                          <p className="mt-2 font-serif text-sm text-cream/80">
                            {product.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
