import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BSYGsU_L.js";
import { u as useLang, P as PageHero } from "./router-BwBGjASB.js";
import { G as GoldRule } from "./Ornament-DYI3V4MA.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const sites = {
  fr: [{
    name: "Niani",
    sub: "Première capitale",
    text: "Berceau de Soundjata Keita et siège du pouvoir mansa."
  }, {
    name: "Kangaba",
    sub: "Berceau mythique",
    text: "Centre spirituel majeur ; abrite la Kamablon, sanctuaire restauré tous les sept ans."
  }, {
    name: "Tombouctou",
    sub: "Cité du savoir",
    text: "Foyer d'érudition islamique et carrefour transsaharien."
  }, {
    name: "Djenné",
    sub: "Joyau d'argile",
    text: "La Grande Mosquée, plus vaste édifice en terre crue au monde."
  }, {
    name: "Gao",
    sub: "Carrefour saharien",
    text: "Étape majeure des routes caravanières et pôle diplomatique."
  }, {
    name: "Ségou",
    sub: "Mémoire bambara",
    text: "Héritière des traditions du Mandé et de sa littérature orale."
  }],
  en: [{
    name: "Niani",
    sub: "First capital",
    text: "Birthplace of Sundiata Keita and seat of mansa power."
  }, {
    name: "Kangaba",
    sub: "Mythical cradle",
    text: "Major spiritual centre; home to the Kamablon shrine, restored every seven years."
  }, {
    name: "Timbuktu",
    sub: "City of knowledge",
    text: "A hub of Islamic scholarship and trans-Saharan crossroads."
  }, {
    name: "Djenné",
    sub: "Clay jewel",
    text: "The Great Mosque, the largest mud-brick building in the world."
  }, {
    name: "Gao",
    sub: "Saharan crossroads",
    text: "Major caravan stop and diplomatic centre."
  }, {
    name: "Ségou",
    sub: "Bambara memory",
    text: "Heir to the Mandé traditions and its oral literature."
  }]
};
function PatrimoinePage() {
  const {
    lang,
    t
  } = useLang();
  const list = sites[lang];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: t("heritage"), title: t("imperial_capitals"), subtitle: t("capitals_subtitle") }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: list.map((s) => /* @__PURE__ */ jsxs("article", { className: "border border-gold/30 bg-card p-10 hover:shadow-royal hover:border-gold transition-all group", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold", children: s.sub }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-3xl text-burgundy-deep group-hover:text-burgundy transition-colors", children: s.name }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule my-5 w-12" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: s.text })
      ] }, s.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(GoldRule, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif italic text-lg text-foreground/80", children: t("each_stone") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  PatrimoinePage as component
};
