import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { u as useLang } from "./router-BwBGjASB.js";
const coatOfArms = "/assets/coat-of-arms-brkMinWs.png";
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const nav = [
    { to: "/", label: t("nav_home") },
    {
      to: "/empire",
      label: t("nav_empire"),
      hoverOnly: true,
      children: [
        { to: "/empire", label: "La Bataille de Kirina — Naissance de l'Empire" }
      ]
    },
    { to: "/patrimoine", label: t("nav_patrimoine") },
    { to: "/humanitaire", label: t("nav_humanitaire") },
    { to: "/communication", label: t("nav_communication") },
    { to: "/contact", label: t("nav_contact") }
  ];
  return /* @__PURE__ */ jsxs("header", { className: "relative z-40 bg-ivory", children: [
    /* @__PURE__ */ jsx("div", { className: "h-1 gradient-royal" }),
    /* @__PURE__ */ jsx("div", { className: "border-b border-gold/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 md:py-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-4 group", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: coatOfArms,
            alt: "Armoiries",
            className: "h-28 w-28 md:h-40 md:w-40 object-contain coat-glow transition-transform group-hover:scale-105",
            width: 1024,
            height: 1024
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-2xl md:text-[2rem] leading-none text-burgundy-deep tracking-wide", children: "La Maison du Mandé" }),
          /* @__PURE__ */ jsx("p", { className: "font-serif italic text-sm md:text-base text-muted-foreground mt-1", children: t("tagline") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(LangSwitcher, { lang, setLang }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:hidden text-burgundy-deep",
            onClick: () => setOpen((v) => !v),
            "aria-label": "Menu",
            children: open ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:block gradient-royal", children: /* @__PURE__ */ jsx("ul", { className: "mx-auto flex max-w-7xl items-center justify-center gap-2 px-6", children: nav.map((n) => /* @__PURE__ */ jsxs("li", { className: "relative group", children: [
      n.hoverOnly ? /* @__PURE__ */ jsx(
        "span",
        {
          className: "block px-5 py-4 font-display text-[0.78rem] tracking-[0.2em] uppercase text-ivory/85 group-hover:text-gold transition-colors cursor-default select-none",
          "aria-disabled": "true",
          children: n.label
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          className: "block px-5 py-4 font-display text-[0.78rem] tracking-[0.2em] uppercase text-ivory/85 hover:text-gold transition-colors",
          activeProps: { className: "text-gold" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        }
      ),
      n.children && n.children.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-full z-50 hidden group-hover:block pt-1", children: /* @__PURE__ */ jsx("ul", { className: "min-w-[20rem] bg-burgundy-deep border border-gold/40 shadow-xl", children: n.children.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          to: c.to,
          className: "block px-5 py-3 font-display text-[0.75rem] tracking-[0.18em] uppercase text-ivory/90 hover:text-gold hover:bg-burgundy-deep/70 transition-colors",
          activeProps: { className: "text-gold" },
          children: c.label
        }
      ) }, c.label)) }) })
    ] }, n.to)) }) }),
    open && /* @__PURE__ */ jsx("nav", { className: "md:hidden gradient-royal", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col px-6 py-4", children: nav.map((n) => /* @__PURE__ */ jsxs("li", { children: [
      n.hoverOnly ? /* @__PURE__ */ jsx(
        "span",
        {
          className: "block py-3 font-display text-sm tracking-[0.2em] uppercase text-ivory/85 border-b border-gold/15 cursor-default select-none",
          "aria-disabled": "true",
          children: n.label
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "block py-3 font-display text-sm tracking-[0.2em] uppercase text-ivory/85 hover:text-gold border-b border-gold/15",
          children: n.label
        }
      ),
      n.children && n.children.length > 0 && /* @__PURE__ */ jsx("ul", { className: "pl-4", children: n.children.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          to: c.to,
          onClick: () => setOpen(false),
          className: "block py-2 font-display text-xs tracking-[0.18em] uppercase text-ivory/75 hover:text-gold border-b border-gold/10",
          children: c.label
        }
      ) }, c.label)) })
    ] }, n.to)) }) })
  ] });
}
function LangSwitcher({ lang, setLang }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center border border-gold/40 rounded-sm overflow-hidden", children: ["fr", "en"].map((l) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setLang(l),
      className: `px-3 py-1.5 font-display text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${lang === l ? "bg-burgundy-deep text-gold" : "bg-ivory text-burgundy-deep hover:bg-secondary"}`,
      "aria-label": l === "fr" ? "Français" : "English",
      children: l
    },
    l
  )) });
}
function SiteFooter() {
  const { t } = useLang();
  return /* @__PURE__ */ jsxs("footer", { className: "gradient-royal text-ivory mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: coatOfArms, alt: "", className: "h-24 w-24 object-contain coat-glow", width: 96, height: 96, loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "La Maison du Mandé" }),
            /* @__PURE__ */ jsx("p", { className: "italic text-ivory/70 text-sm", children: t("tagline") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-ivory/75 leading-relaxed text-[0.95rem]", children: t("footer_about") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-gold text-sm tracking-[0.25em] uppercase mb-4", children: t("navigation") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-ivory/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/empire", className: "hover:text-gold transition-colors", children: t("nav_empire") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/patrimoine", className: "hover:text-gold transition-colors", children: t("nav_patrimoine") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/humanitaire", className: "hover:text-gold transition-colors", children: t("nav_humanitaire") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/communication", className: "hover:text-gold transition-colors", children: t("nav_communication") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-gold transition-colors", children: t("nav_contact") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-gold text-sm tracking-[0.25em] uppercase mb-4", children: t("chancery") }),
        /* @__PURE__ */ jsx("p", { className: "text-ivory/80 leading-relaxed text-[0.95rem]", children: t("address_chancery") }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "inline-block mt-4 font-display text-xs tracking-[0.25em] uppercase text-gold border border-gold/60 px-5 py-3 hover:bg-gold hover:text-burgundy-deep transition-colors",
            children: t("write_us")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gold/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/60 tracking-wider", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " La Maison du Mandé — ",
        t("rights_reserved"),
        "."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "italic font-serif", children: [
        t("living_memory_motto"),
        "."
      ] })
    ] }) })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a,
  coatOfArms as c
};
