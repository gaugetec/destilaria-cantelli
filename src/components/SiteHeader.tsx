import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "font-display text-[0.72rem] tracking-[0.35em] uppercase transition-colors";
  const isDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex flex-col leading-none">
          <span
            className={`font-display text-base md:text-lg tracking-[0.3em] ${
              isDark ? "text-cream" : "text-charcoal"
            }`}
          >
            GRAPPA
          </span>
          <span
            className={`font-display text-[0.6rem] tracking-[0.5em] mt-1 ${
              isDark ? "text-gold-soft" : "text-gold"
            }`}
          >
            CANTELLI · 1898
          </span>
        </Link>

        <nav className="flex items-center gap-8 md:gap-12">
          <Link
            to="/"
            className={`${linkBase} ${
              location.pathname === "/"
                ? isDark ? "text-gold" : "text-gold"
                : isDark ? "text-cream/80 hover:text-gold-soft" : "text-charcoal hover:text-gold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/historia"
            className={`${linkBase} ${
              location.pathname === "/historia"
                ? "text-gold"
                : isDark ? "text-cream/80 hover:text-gold-soft" : "text-charcoal hover:text-gold"
            }`}
          >
            <span className="hidden sm:inline">História da Família</span>
            <span className="sm:hidden">História</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
