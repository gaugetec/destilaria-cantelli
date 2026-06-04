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
      { name: "Grappa Tradicional", image: "/produtos/DSCF1844_Tradicional_Todas.jpg" },
      { name: "Grappa Tradicional", image: "/produtos/DSCF1851_Tradicional_Todas.jpg" },
      { name: "Grappa Tradicional", image: "/produtos/DSCF1861_Tradicional_Todas.jpg" },
      { name: "Grappa Tradicional", image: "/produtos/DSCF1864_Tradicional_Todas.jpg" },
      { name: "Grappa Tradicional", image: "/produtos/DSCF1865_Tradicional_Todas.jpg" },
      { name: "Grappa Tradicional (750ml)", image: "/produtos/DSCF1870_Tradicional_750.jpg" },
      { name: "Grappa Tradicional (750ml)", image: "/produtos/DSCF1871_Tradicional_750.jpg" },
      { name: "Grappas Sortidas", image: "/produtos/DSCF1953_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1955_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1957_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1959_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1960_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1961_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1964_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1966_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1968_Grappas.jpg" },
      { name: "Grappas", image: "/produtos/DSCF1970_Grappas.jpg" },
    ],
  },
  {
    id: "vinhos",
    name: "Vinhos",
    description:
      "Vinhos finos elaborados com uvas selecionadas, resultando em aromas complexos e paladares inesquecíveis.",
    products: [
      { name: "Uva Moscato", image: "/produtos/DSCF1830_Uva Moscato.jpg" },
      { name: "Vinho de Uva", image: "/produtos/DSCF1839_Uva.jpg" },
      { name: "Moscato", image: "/produtos/DSCF1857_Moscato_Todas.jpg" },
      { name: "Vinho de Uva", image: "/produtos/DSCF1875_Uva_Todas.jpg" },
      { name: "Vinho de Uva (500ml)", image: "/produtos/DSCF1880_Uva_500.jpg" },
      { name: "Moscato", image: "/produtos/DSCF1885_Moscato.jpg" },
      { name: "Moscato", image: "/produtos/DSCF1903_Moscato.jpg" },
      { name: "Moscatel", image: "/produtos/DSCF1906_Moscatel.jpg" },
      { name: "Chardonnay", image: "/produtos/DSCF1913_Chardonnay.jpg" },
      { name: "Vinhos Brancos", image: "/produtos/DSCF1915_Vinhos Brancos.jpg" },
      { name: "Riesling", image: "/produtos/DSCF1920_Riesling.jpg" },
      { name: "Merlot", image: "/produtos/DSCF1922_Merlot.jpg" },
      { name: "Vinhos Tintos", image: "/produtos/DSCF1928_Vinhos Tintos.jpg" },
      { name: "Cabernet Sauvignon", image: "/produtos/DSCF1930_Carbernet Sauvignon.jpg" },
      { name: "Tannat", image: "/produtos/DSCF1932_Tannat.jpg" },
      { name: "Vinhos Tintos", image: "/produtos/DSCF1933_Vinhos Tintos.jpg" },
      { name: "Vinhos Tintos", image: "/produtos/DSCF1935_Vinhos Tintos.jpg" },
      { name: "Vinhos", image: "/produtos/DSCF1940_Vinhos.jpg" },
      { name: "Vinhos", image: "/produtos/DSCF1943_Vinhos.jpg" },
    ],
  },
  {
    id: "espumantes",
    name: "Espumantes",
    description: "Borbulhas finas e refrescantes, perfeitas para celebrar os melhores momentos da vida.",
    products: [
      { name: "Brut", image: "/produtos/DSCF1909_Brut.jpg" },
      { name: "Espumantes", image: "/produtos/DSCF1945_Espumantes.jpg" },
      { name: "Espumantes", image: "/produtos/DSCF1947_Espumantes.jpg" },
      { name: "Espumantes", image: "/produtos/DSCF1949_Espumantes.jpg" },
    ],
  },
  {
    id: "licores",
    name: "Licores",
    description:
      "Uma doce e intensa expressão dos sabores da Serra Gaúcha, ideais para digestivos e momentos de descontração.",
    products: [
      { name: "Licor de Figo", image: "/produtos/DSCF1819_Licor de Figo_Todas.jpg" },
      { name: "Funcho", image: "/produtos/DSCF1826_Funcho.jpg" },
      { name: "Licor de Figo", image: "/produtos/DSCF1891_Licor de Figo_Todas.jpg" },
      { name: "Licor de Figo (500ml)", image: "/produtos/DSCF1894_Licor de Figo_500.jpg" },
      { name: "Funcho", image: "/produtos/DSCF1899_Funcho.jpg" },
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                {category.products.map((product, pIndex) => (
                  <Reveal
                    key={`${product.name}-${pIndex}`}
                    delay={pIndex * 50}
                    className="group"
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
