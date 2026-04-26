import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BSYGsU_L.js";
import { G as GoldRule } from "./Ornament-DYI3V4MA.js";
import { u as useLang, g as getByCategory, P as PageHero, p as pick } from "./router-BwBGjASB.js";
import "react";
import "lucide-react";
function CommunicationPage() {
  const {
    lang,
    t
  } = useLang();
  const press = getByCategory("communication");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: t("chancery"), title: t("communication_press"), subtitle: t("official_releases") }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx("ol", { className: "relative border-l border-gold/40 ml-3", children: press.map((p) => /* @__PURE__ */ jsxs("li", { className: "mb-12 pl-8 relative", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gold ring-4 ring-ivory" }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold", children: pick(lang, p.date) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl text-burgundy-deep", children: pick(lang, p.title) }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule my-3 w-12" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-[1rem] leading-relaxed", children: pick(lang, p.excerpt) }),
        /* @__PURE__ */ jsxs(Link, { to: "/article/$slug", params: {
          slug: p.slug
        }, className: "inline-block mt-4 font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors", children: [
          t("read_more"),
          " →"
        ] })
      ] }, p.slug)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsx(GoldRule, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif italic text-foreground/80", children: t("press_request") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  CommunicationPage as component
};
