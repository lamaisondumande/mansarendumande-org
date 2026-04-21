import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getByCategory } from "@/data/articles";
import { useLang, pick } from "@/lib/i18n";
import { PageHero } from "./empire";

export const Route = createFileRoute("/humanitaire")({
  head: () => ({
    meta: [
      { title: "Engagements humanitaires — La Maison du Mandé" },
      { name: "description", content: "Actions humanitaires nationales et internationales menées par la Maison du Mandé." },
      { property: "og:title", content: "Engagements humanitaires" },
      { property: "og:description", content: "Solidarité, restauration, fraternité — au service du Mandé et au-delà." },
    ],
  }),
  component: HumanitairePage,
});

function HumanitairePage() {
  const { lang, t } = useLang();
  const local = getByCategory("humanitaire-local");
  const intl = getByCategory("humanitaire-international");

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow={t("nav_humanitaire")}
        title={lang === "fr" ? "Actions humanitaires" : "Humanitarian Actions"}
        subtitle={lang === "fr" ? "Au service du Mandé, des Mandeka et des peuples frères." : "In service of Mandé, the Mandeka and brotherly peoples."}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow={t("heart_mande")} title={t("local_actions")} />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {local.map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                date={pick(lang, a.date)}
                title={pick(lang, a.title)}
                excerpt={pick(lang, a.excerpt)}
                imageLabel={a.imageLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <Ornament className="my-4" />

      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow={t("diplomacy_solidarity")} title={t("intl_engagements")} />
          <div className="grid gap-8 md:grid-cols-3">
            {intl.map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                date={pick(lang, a.date)}
                title={pick(lang, a.title)}
                excerpt={pick(lang, a.excerpt)}
                imageLabel={a.imageLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep">{title}</h2>
      <GoldRule className="mt-5" />
    </div>
  );
}

export function ArticleCard({
  slug,
  date,
  title,
  excerpt,
  imageLabel,
}: {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  imageLabel: string;
}) {
  const { t } = useLang();
  return (
    <Link
      to="/article/$slug"
      params={{ slug }}
      className="group block bg-card border border-gold/30 hover:shadow-royal hover:border-gold transition-all hover-gold-frame"
    >
      <ImagePlaceholder label={imageLabel} aspect="aspect-[4/3]" />
      <div className="p-7">
        <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{date}</p>
        <h3 className="mt-3 font-display text-lg text-burgundy-deep leading-snug group-hover:text-burgundy transition-colors">
          {title}
        </h3>
        <div className="gold-rule my-4 w-12" />
        <p className="text-muted-foreground text-[0.95rem]">{excerpt}</p>
        <p className="mt-5 font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
          {t("read_more")} →
        </p>
      </div>
    </Link>
  );
}
