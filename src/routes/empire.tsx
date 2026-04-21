import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import { HeroPlaceholder, ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useLang, pick } from "@/lib/i18n";
import { getByCategory } from "@/data/articles";

export const Route = createFileRoute("/empire")({
  head: () => ({
    meta: [
      { title: "L'Empire du Mâli — La Maison du Mandé" },
      { name: "description", content: "Histoire de l'Empire du Mâli (1235–1670) : naissance, apogée sous Soundjata Keita et Mansa Musa, héritage spirituel et culturel." },
      { property: "og:title", content: "L'Empire du Mâli" },
      { property: "og:description", content: "1235–1670 : la naissance, l'apogée et l'héritage de l'Empire du Mâli." },
    ],
  }),
  component: EmpirePage,
});

function EmpirePage() {
  const { lang, t } = useLang();
  const chapters = getByCategory("histoire");

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow="1235 — 1670"
        title={lang === "fr" ? "L'Empire du Mâli" : "The Mali Empire"}
        subtitle={
          lang === "fr"
            ? "Quatre siècles de rayonnement politique, spirituel et culturel."
            : "Four centuries of political, spiritual and cultural influence."
        }
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("nav_history")}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep">
              {lang === "fr" ? "Chapitres essentiels" : "Essential chapters"}
            </h2>
            <GoldRule className="mt-5" />
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {chapters.map((c) => (
              <Link
                key={c.slug}
                to="/article/$slug"
                params={{ slug: c.slug }}
                className="group block bg-card border border-gold/30 hover:shadow-royal hover:border-gold transition-all hover-gold-frame"
              >
                <ImagePlaceholder label={c.imageLabel} aspect="aspect-[4/3]" />
                <div className="p-7 text-center">
                  <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                    {pick(lang, c.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-burgundy-deep leading-snug group-hover:text-burgundy transition-colors">
                    {pick(lang, c.title)}
                  </h3>
                  <div className="gold-rule my-4 w-12 mx-auto" />
                  <p className="text-muted-foreground text-[0.95rem]">{pick(lang, c.excerpt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Ornament className="my-4" />

      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            {lang === "fr" ? "Charte fondatrice" : "Founding charter"}
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
            {lang === "fr" ? "La Charte de Kurukan Fuga" : "The Kurukan Fuga Charter"}
          </h2>
          <GoldRule className="mt-5" />
          <p className="mt-8 font-serif italic text-lg text-foreground/85 leading-relaxed">
            {lang === "fr"
              ? "Adoptée en 1236, l'une des plus anciennes déclarations de droits humains au monde — fondement du contrat social du Mandé."
              : "Adopted in 1236, one of the oldest declarations of human rights in the world — foundation of the Mandé social contract."}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
      <HeroPlaceholder label="Photographie de bannière" />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/50 via-burgundy-deep/30 to-burgundy-deep/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory animate-fade-up">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance max-w-4xl">{title}</h1>
        {subtitle && (
          <>
            <div className="my-5 h-px w-24 bg-gold" />
            <p className="font-serif italic text-lg md:text-xl text-ivory/90 max-w-2xl">{subtitle}</p>
          </>
        )}
      </div>
    </section>
  );
}
