import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BSYGsU_L.js";
import { u as useLang, P as PageHero } from "./router-BwBGjASB.js";
import { G as GoldRule } from "./Ornament-DYI3V4MA.js";
import { Crown, Mail, MapPin } from "lucide-react";
import "@tanstack/react-router";
import "react";
function ContactPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: t("correspondence"), title: t("grand_chancery"), subtitle: t("contact_subtitle") }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl grid gap-12 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xs tracking-[0.4em] uppercase text-gold", children: t("reach_us") }),
            /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl text-burgundy-deep", children: t("your_messages") }),
            /* @__PURE__ */ jsx("div", { className: "h-px w-24 bg-gold/70 mt-4" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-serif text-lg text-foreground/85 leading-relaxed", children: t("chancery_intro") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-5", children: [
            /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Crown, { size: 20 }), label: t("head_of_house"), value: "S.A.I. Le Mansaren Hashim Keita du Mandé" }),
            /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Mail, { size: 20 }), label: t("email"), value: "contact@maisondumande.org" }),
            /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(MapPin, { size: 20 }), label: t("head_office"), value: "Grande Chancellerie de la Maison du Mandé" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "bg-card border border-gold/30 p-8 md:p-10 shadow-elegant space-y-5", children: [
          /* @__PURE__ */ jsx(Field, { label: t("name"), type: "text", name: "name" }),
          /* @__PURE__ */ jsx(Field, { label: t("email"), type: "email", name: "email" }),
          /* @__PURE__ */ jsx(Field, { label: t("subject"), type: "text", name: "subject" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy-deep", children: t("message") }),
            /* @__PURE__ */ jsx("textarea", { rows: 6, className: "mt-2 w-full bg-ivory border border-border focus:border-gold outline-none px-4 py-3 font-serif text-foreground transition-colors" })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full font-display text-xs tracking-[0.3em] uppercase bg-burgundy-deep text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors", children: t("send_message") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground italic text-center", children: t("form_notice") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-16", children: /* @__PURE__ */ jsx(GoldRule, {}) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  type,
  name
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy-deep", children: label }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, className: "mt-2 w-full bg-ivory border border-border focus:border-gold outline-none px-4 py-3 font-serif text-foreground transition-colors" })
  ] });
}
function ContactRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsx("span", { className: "h-10 w-10 flex items-center justify-center bg-burgundy-deep text-gold rounded-sm shrink-0", children: icon }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold", children: label }),
      /* @__PURE__ */ jsx("p", { className: "font-serif text-foreground/85", children: value })
    ] })
  ] });
}
export {
  ContactPage as component
};
