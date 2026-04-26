import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BSYGsU_L.js";
import { O as Ornament, G as GoldRule } from "./Ornament-DYI3V4MA.js";
import { u as useLang, I as ImagePlaceholder, g as getByCategory, P as PageHero, p as pick } from "./router-BwBGjASB.js";
import "react";
import "lucide-react";
function HumanitairePage() {
  const {
    lang,
    t
  } = useLang();
  const local = getByCategory("humanitaire-local");
  const intl = getByCategory("humanitaire-international");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: t("nav_humanitaire"), title: lang === "fr" ? "Actions humanitaires" : "Humanitarian Actions", subtitle: lang === "fr" ? "Au service du Mandé, des Mandeka et des peuples frères." : "In service of Mandé, the Mandeka and brotherly peoples." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: t("heart_mande"), title: t("local_actions") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: local.map((a) => /* @__PURE__ */ jsx(ArticleCard, { slug: a.slug, date: pick(lang, a.date), title: pick(lang, a.title), excerpt: pick(lang, a.excerpt), imageLabel: a.imageLabel }, a.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx(Ornament, { className: "my-4" }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: t("diplomacy_solidarity"), title: t("intl_engagements") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: intl.map((a) => /* @__PURE__ */ jsx(ArticleCard, { slug: a.slug, date: pick(lang, a.date), title: pick(lang, a.title), excerpt: pick(lang, a.excerpt), imageLabel: a.imageLabel }, a.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function SectionTitle({
  eyebrow,
  title
}) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
    /* @__PURE__ */ jsx("p", { className: "font-display text-xs tracking-[0.4em] uppercase text-gold", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl text-burgundy-deep", children: title }),
    /* @__PURE__ */ jsx(GoldRule, { className: "mt-5" })
  ] });
}
function ArticleCard({
  slug,
  date,
  title,
  excerpt,
  imageLabel
}) {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs(Link, { to: "/article/$slug", params: {
    slug
  }, className: "group block bg-card border border-gold/30 hover:shadow-royal hover:border-gold transition-all hover-gold-frame", children: [
    /* @__PURE__ */ jsx(ImagePlaceholder, { label: imageLabel, aspect: "aspect-[4/3]" }),
    /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold", children: date }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg text-burgundy-deep leading-snug group-hover:text-burgundy transition-colors", children: title }),
      /* @__PURE__ */ jsx("div", { className: "gold-rule my-4 w-12" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-[0.95rem]", children: excerpt }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold", children: [
        t("read_more"),
        " →"
      ] })
    ] })
  ] });
}
export {
  ArticleCard,
  HumanitairePage as component
};
