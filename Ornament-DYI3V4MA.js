import { jsx } from "react/jsx-runtime";
const divider = "/assets/divider-D9Iea-UV.png";
function Ornament({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `flex justify-center ${className}`, children: /* @__PURE__ */ jsx("img", { src: divider, alt: "", className: "h-56 md:h-80 w-auto object-contain opacity-90 mx-auto", width: 854, height: 1022, loading: "lazy" }) });
}
function GoldRule({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `mx-auto h-px w-32 bg-gold/70 ${className}` });
}
export {
  GoldRule as G,
  Ornament as O
};
