import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const { location } = useRouterState();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const linkBase = "font-display text-[0.72rem] tracking-[0.35em] uppercase transition-colors";
  const isDark = !scrolled;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur border-b border-border py-3" : "bg-transparent py-6"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex flex-col leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-display text-base md:text-lg tracking-[0.3em] ${isDark ? "text-cream" : "text-charcoal"}`,
              children: "GRAPPA"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-display text-[0.6rem] tracking-[0.5em] mt-1 ${isDark ? "text-gold-soft" : "text-gold"}`,
              children: "CANTELLI · 1898"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-8 md:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: `${linkBase} ${location.pathname === "/" ? isDark ? "text-gold" : "text-gold" : isDark ? "text-cream/80 hover:text-gold-soft" : "text-charcoal hover:text-gold"}`,
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/historia",
              className: `${linkBase} ${location.pathname === "/historia" ? "text-gold" : isDark ? "text-cream/80 hover:text-gold-soft" : "text-charcoal hover:text-gold"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "História da Família" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "História" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/rotulos",
              className: `${linkBase} ${location.pathname === "/rotulos" ? "text-gold" : isDark ? "text-cream/80 hover:text-gold-soft" : "text-charcoal hover:text-gold"}`,
              children: "Rótulos"
            }
          )
        ] })
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-charcoal text-cream relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-3 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl tracking-[0.3em]", children: "GRAPPA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[0.65rem] tracking-[0.5em] text-gold mt-2", children: "CANTELLI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 inline-block h-px w-16 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif text-lg italic text-cream/80 leading-relaxed max-w-xs", children: "Tradição, história e autenticidade desde 1898." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:justify-self-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold-soft", children: "Navegação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 font-display text-[0.72rem] tracking-[0.3em] uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-cream/80 hover:text-gold transition-colors", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/historia", className: "text-cream/80 hover:text-gold transition-colors", children: "História da Família" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold-soft", children: "Apreciação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 font-serif text-lg italic text-cream/80 leading-relaxed", children: [
            "Ideal para ser apreciada como digestivo",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "após as refeições."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[0.65rem] tracking-[0.4em] uppercase text-cream/40", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Grappa Cantelli"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.4em] uppercase text-cream/40", children: "Caminhos de Pedra · Serra Gaúcha" })
      ] })
    ] })
  ] });
}
function Reveal({ children, className = "", delay = 0, as: As = "div" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${delay}ms`;
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(As, { ref, className: `fade-up ${className}`, children });
}
export {
  Reveal as R,
  SiteHeader as S,
  SiteFooter as a
};
