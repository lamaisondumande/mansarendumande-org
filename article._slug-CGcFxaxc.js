import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BSYGsU_L.js";
import { u as useLang } from "./router-BwBGjASB.js";
import "react";
import "lucide-react";
function NotFoundArticle() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center px-6 py-32 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-xs tracking-[0.4em] uppercase text-gold", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl text-burgundy-deep", children: t("article_not_found") }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mt-8 font-display text-xs tracking-[0.3em] uppercase bg-burgundy-deep text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors", children: t("go_home") })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  NotFoundArticle as notFoundComponent
};
