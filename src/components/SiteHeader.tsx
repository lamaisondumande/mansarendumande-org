import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import coatOfArms from "@/assets/coat-of-arms.png";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  type NavChild = {
    to: "/empire" | "/article/$slug";
    params?: { slug: string };
    label: string;
  };
  type NavItem = {
    to: "/" | "/empire" | "/patrimoine" | "/humanitaire" | "/communication" | "/contact";
    label: string;
    hoverOnly?: boolean;
    children?: NavChild[];
  };

  const nav: NavItem[] = [
    { to: "/", label: t("nav_home") },
    {
      to: "/empire",
      label: t("nav_empire"),
      hoverOnly: true,
      children: [
        { to: "/empire", label: "La Bataille de Kirina — Naissance de l'Empire" },
      ],
    },
    {
      to: "/patrimoine",
      label: t("nav_patrimoine"),
      children: [
        {
          to: "/article/$slug",
          params: { slug: "patrimoine-architectural-immateriel" },
          label: "Patrimoine Architectural et Immatériel",
        },
      ],
    },
    {
      to: "/humanitaire",
      label: t("nav_humanitaire"),
      children: [
        {
          to: "/article/$slug",
          params: { slug: "aide-humanitaire-mande" },
          label: "Aide humanitaire dans le Mandé",
        },
        {
          to: "/article/$slug",
          params: { slug: "engagements-internationaux" },
          label: "Engagements internationaux",
        },
      ],
    },
    { to: "/communication", label: t("nav_communication") },
    { to: "/contact", label: t("nav_contact") },
  ];

  return (
    <header className="relative z-40 bg-ivory">
      <div className="h-1 gradient-royal" />
      <div className="border-b border-gold/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 md:py-8">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={coatOfArms}
              alt="Armoiries"
              className="h-28 w-28 md:h-40 md:w-40 object-contain coat-glow transition-transform group-hover:scale-105"
              width={1024}
              height={1024}
            />
            <div className="hidden sm:block">
              <p className="font-display text-2xl md:text-[2rem] leading-none text-burgundy-deep tracking-wide">
                La Maison du Mandé
              </p>
              <p className="font-serif italic text-sm md:text-base text-muted-foreground mt-1">
                {t("tagline")}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button
              className="md:hidden text-burgundy-deep"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:block gradient-royal">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6">
          {nav.map((n) => (
            <li key={n.to} className="relative group">
              {n.hoverOnly ? (
                <span
                  className="block px-5 py-4 font-display text-[0.78rem] tracking-[0.2em] uppercase text-ivory/85 group-hover:text-gold transition-colors cursor-default select-none"
                  aria-disabled="true"
                >
                  {n.label}
                </span>
              ) : (
                <Link
                  to={n.to}
                  className="block px-5 py-4 font-display text-[0.78rem] tracking-[0.2em] uppercase text-ivory/85 hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              )}
              {n.children && n.children.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 hidden group-hover:block pt-1">
                  <ul className="min-w-[20rem] bg-burgundy-deep border border-gold/40 shadow-xl">
                    {n.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          to={c.to as any}
                          params={c.params as any}
                          className="block px-5 py-3 font-display text-[0.75rem] tracking-[0.18em] uppercase text-ivory/90 hover:text-gold hover:bg-burgundy-deep/70 transition-colors"
                          activeProps={{ className: "text-gold" }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="md:hidden gradient-royal">
          <ul className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <li key={n.to}>
                {n.hoverOnly ? (
                  <span
                    className="block py-3 font-display text-sm tracking-[0.2em] uppercase text-ivory/85 border-b border-gold/15 cursor-default select-none"
                    aria-disabled="true"
                  >
                    {n.label}
                  </span>
                ) : (
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-sm tracking-[0.2em] uppercase text-ivory/85 hover:text-gold border-b border-gold/15"
                  >
                    {n.label}
                  </Link>
                )}
                {n.children && n.children.length > 0 && (
                  <ul className="pl-4">
                    {n.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          to={c.to as any}
                          params={c.params as any}
                          onClick={() => setOpen(false)}
                          className="block py-2 font-display text-xs tracking-[0.18em] uppercase text-ivory/75 hover:text-gold border-b border-gold/10"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: "fr" | "en"; setLang: (l: "fr" | "en") => void }) {
  return (
    <div className="flex items-center border border-gold/40 rounded-sm overflow-hidden">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 font-display text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${
            lang === l ? "bg-burgundy-deep text-gold" : "bg-ivory text-burgundy-deep hover:bg-secondary"
          }`}
          aria-label={l === "fr" ? "Français" : "English"}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
