import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BBM2GOEn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Destilaria Cantelli — Tradição preservada desde 1898" },
      {
        name: "description",
        content: "Grappa Cantelli: mais de um século de tradição familiar italiana preservada nos Caminhos de Pedra, Serra Gaúcha."
      },
      { name: "author", content: "Grappa Cantelli" },
      { property: "og:site_name", content: "Grappa Cantelli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Destilaria Cantelli — Tradição preservada desde 1898" },
      { name: "twitter:title", content: "Destilaria Cantelli — Tradição preservada desde 1898" },
      { name: "description", content: "A premium institutional website for Grappa Cantelli, preserving a family tradition since 1898." },
      { property: "og:description", content: "A premium institutional website for Grappa Cantelli, preserving a family tradition since 1898." },
      { name: "twitter:description", content: "A premium institutional website for Grappa Cantelli, preserving a family tradition since 1898." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e939fb2d-121c-4399-bab4-f4a6d81825e6/id-preview-1033f293--dd675ddc-4553-4170-bcac-314b51f3eca3.lovable.app-1780260008477.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e939fb2d-121c-4399-bab4-f4a6d81825e6/id-preview-1033f293--dd675ddc-4553-4170-bcac-314b51f3eca3.lovable.app-1780260008477.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/historia", changefreq: "monthly", priority: "0.9" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$2 = () => import("./rotulos-4FSUGsPv.mjs");
const Route$2 = createFileRoute("/rotulos")({
  head: () => ({
    meta: [{
      title: "Nossos Rótulos — Grappa Cantelli"
    }, {
      name: "description",
      content: "Conheça os nossos rótulos de grappas, vinhos, espumantes e licores produzidos com rigor e tradição."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const heroImg$1 = "/assets/hero-historia-1sPLic61.jpg";
const $$splitComponentImporter$1 = () => import("./historia-CWoJWgeN.mjs");
const Route$1 = createFileRoute("/historia")({
  head: () => ({
    meta: [{
      title: "Nossa História — Grappa Cantelli"
    }, {
      name: "description",
      content: "Uma jornada iniciada em 1898 por Gioachino Cantelli, imigrante italiano que levou aos Caminhos de Pedra a arte de produzir grappa preservada por gerações."
    }, {
      property: "og:title",
      content: "Nossa História — Grappa Cantelli"
    }, {
      property: "og:description",
      content: "Uma jornada iniciada em 1898 nos Caminhos de Pedra, Serra Gaúcha."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/historia"
    }, {
      property: "og:image",
      content: heroImg$1
    }],
    links: [{
      rel: "canonical",
      href: "/historia"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroImg = "/assets/hero-home-DIfRbc3V.jpg";
const $$splitComponentImporter = () => import("./index-URxywqJE.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Grappa Cantelli — Uma tradição preservada desde 1898"
    }, {
      name: "description",
      content: "Mais de um século de história, autenticidade e tradição. A Grappa Cantelli preserva o legado familiar iniciado por Gioachino Cantelli nos Caminhos de Pedra, Serra Gaúcha."
    }, {
      property: "og:title",
      content: "Grappa Cantelli — Uma tradição preservada desde 1898"
    }, {
      property: "og:description",
      content: "Mais de um século de história, autenticidade e tradição transmitidas através das gerações."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:image",
      content: heroImg
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$4
});
const RotulosRoute = Route$2.update({
  id: "/rotulos",
  path: "/rotulos",
  getParentRoute: () => Route$4
});
const HistoriaRoute = Route$1.update({
  id: "/historia",
  path: "/historia",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  HistoriaRoute,
  RotulosRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  heroImg as a,
  heroImg$1 as h,
  router as r
};
