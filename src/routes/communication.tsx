import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule } from "@/components/Ornament";
import { getByCategory } from "@/data/articles";
import { useLang, pick } from "@/lib/i18n";
import { PageHero } from "./empire";

export const Route = createFileRoute("/communication")({
  head: () => ({
    meta: [
      { title: "Communication & Presse — La Maison du Mandé" },
      { name: "description", content: "Communiqués officiels, distinctions et articles de presse internationale." },
      { property: "og:title", content: "Communication de la Maison du Mandé" },
      { property: "og:description", content: "Presse, distinctions et communiqués officiels." },
    ],
  }),
  component: CommunicationPage,
});

function CommunicationPage() {
  const { lang, t } = useLang();
  const press = getByCategory("communication");

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow={t("chancery")}
        title={t("communication_press")}
        subtitle={t("official_releases")}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <ol className="relative border-l border-gold/40 ml-3">
            {press.map((p) => (
              <li key={p.slug} className="mb-12 pl-8 relative">
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gold ring-4 ring-ivory" />
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                  {pick(lang, p.date)}
                </p>
                <h3 className="mt-2 font-display text-2xl text-burgundy-deep">{pick(lang, p.title)}</h3>
                <div className="gold-rule my-3 w-12" />
                <p className="text-muted-foreground text-[1rem] leading-relaxed">
                  {pick(lang, p.excerpt)}
                </p>
                <Link
                  to="/article/$slug"
                  params={{ slug: p.slug }}
                  className="inline-block mt-4 font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors"
                >
                  {t("read_more")} →
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <GoldRule />
            <p className="mt-6 font-serif italic text-foreground/80">{t("press_request")}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
