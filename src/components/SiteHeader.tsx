import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import coatOfArms from "@/assets/coat-of-arms.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/empire", label: "L'Empire du Mâli" },
  { to: "/patrimoine", label: "Patrimoine" },
  { to: "/humanitaire", label: "Engagements" },
  { to: "/communication", label: "Communication" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-ivory">
      <div className="h-1 gradient-royal" />
      <div className="border-b border-gold/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 md:py-8">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={coatOfArms}
              alt="Armoiries de la Maison du Mandé"
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform group-hover:scale-105"
              width={1024}
              height={1024}
            />
            <div className="hidden sm:block">
              <p className="font-display text-2xl md:text-[2rem] leading-none text-burgundy-deep tracking-wide">
                La Maison du Mandé
              </p>
              <p className="font-serif italic text-sm md:text-base text-muted-foreground mt-1">
                Au service du Mandé et des Mandeka
              </p>
            </div>
          </Link>

          <button
            className="md:hidden text-burgundy-deep"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <nav className="hidden md:block gradient-royal">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="block px-5 py-4 font-display text-[0.78rem] tracking-[0.2em] uppercase text-ivory/85 hover:text-gold transition-colors relative"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="md:hidden gradient-royal">
          <ul className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-sm tracking-[0.2em] uppercase text-ivory/85 hover:text-gold border-b border-gold/15"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
