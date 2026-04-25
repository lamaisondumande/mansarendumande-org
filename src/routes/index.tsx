import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import { ImagePlaceholder, HeroPlaceholder } from "@/components/ImagePlaceholder";
import coatOfArms from "@/assets/coat-of-arms.png";
import coatOfArmsHero from "@/assets/coat-of-arms-hero.png";
import { useLang, pick } from "@/lib/i18n";
import { articles, getByCategory } from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison du Mandé — Au service du Mandé et des Mandeka" },
      { name: "description", content: "La Maison Impériale du Mandé perpétue l'héritage de l'Empire du Mâli — patrimoine, culture, philanthropie et continuité dynastique des Keita." },
      { property: "og:title", content: "La Maison du Mandé" },
      { property: "og:description", content: "Au service du Mandé et des Mandeka — héritage de l'Empire du Mâli." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { lang, t } = useLang();
  const histoire = getByCategory("histoire");
  const news = articles
    .filter((a) => a.category !== "histoire")
    .slice(-3)
    .reverse();

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <HeroPlaceholder label={lang === "fr" ? "Photographie principale" : "Main photograph"} />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-transparent to-burgundy-deep" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-burgundy-deep via-burgundy-deep/85 to-transparent" />
        <div className="relative z-10 h-full pt-56 md:pt-72 text-center px-6 text-ivory animate-fade-up items-center justify-end flex flex-col">
          <img
            src={coatOfArmsHero}
            alt="Armoiries de la Maison du Mandé"
            className="block mx-auto h-56 md:h-72 lg:h-80 w-auto max-w-[90vw] object-contain mb-8 coat-glow-hero font-semibold text-3xl"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-balance max-w-4xl leading-[1.05] my-0">
            La Maison du Mandé
          </h1>
          <div className="mt-6 ornament-divider max-w-md w-full">
            <span className="font-display text-gold text-xs tracking-[0.4em]">✦</span>
          </div>
          <p className="mt-6 font-serif italic text-xl md:text-2xl text-ivory/90 max-w-2xl text-balance">
            {t("quote")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/empire"
              className="font-display text-xs tracking-[0.3em] uppercase bg-gold text-burgundy-deep px-8 py-4 hover:bg-ivory transition-colors shadow-gold"
            >
              {t("discover_empire")}
            </Link>
            <Link
              to="/humanitaire"
              className="font-display text-xs tracking-[0.3em] uppercase border border-gold/80 text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors"
            >
              {t("our_engagements")}
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("living_memory")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-burgundy-deep">
              {t("sources_mande")}
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {histoire.map((p) => (
              <Link
                key={p.slug}
                to="/article/$slug"
                params={{ slug: p.slug }}
                className="group block hover-gold-frame bg-card shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                <ImagePlaceholder label={p.imageLabel} aspect="aspect-[4/3]" />
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl text-burgundy-deep group-hover:text-burgundy transition-colors">
                    {pick(lang, p.title)}
                  </h3>
                  <div className="gold-rule my-4 w-16 mx-auto" />
                  <p className="text-muted-foreground text-[0.95rem]">{pick(lang, p.excerpt)}</p>
                  <p className="mt-5 font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                    {t("read_more")} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Ornament className="my-4" />

      {/* PRESIDENTIAL MESSAGE */}
      <section className="py-24 px-6 bg-secondary/40 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="mx-auto max-w-5xl relative">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("speech")}</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-burgundy-deep text-balance">
              {t("presidents_message")}
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="font-serif text-foreground/90 space-y-6 leading-[1.85] text-lg text-justify">
            {(lang === "fr" ? frMessage : enMessage).map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-burgundy"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GoldRule />
            <p className="mt-6 font-display text-burgundy-deep">
              {lang === "fr" ? "S.A.I. Le Mansaren Hashim Keita du Mandé" : "H.I.H. The Mansaren Hashim Keita of Mandé"}
            </p>
            <p className="text-sm italic text-muted-foreground">
              {lang === "fr" ? "14 Janvier 2024" : "January 14, 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("news")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-burgundy-deep">
              {t("recent_releases")}
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.slug}
                to="/article/$slug"
                params={{ slug: n.slug }}
                className="block border border-gold/30 bg-card p-8 transition-all hover:shadow-royal hover:border-gold"
              >
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                  {pick(lang, n.date)}
                </p>
                <h3 className="mt-4 font-display text-xl text-burgundy-deep leading-snug">
                  {pick(lang, n.title)}
                </h3>
                <div className="gold-rule my-5 w-12" />
                <p className="text-muted-foreground text-[0.95rem]">{pick(lang, n.excerpt)}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/communication"
              className="inline-block font-display text-xs tracking-[0.3em] uppercase border border-burgundy text-burgundy-deep px-8 py-4 hover:bg-burgundy-deep hover:text-ivory transition-colors"
            >
              {t("all_news")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 gradient-royal text-ivory text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${coatOfArms})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("engagement")}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            {t("preserve_transmit")}
          </h2>
          <p className="mt-6 font-serif italic text-xl text-ivory/85">{t("join_us")}</p>
          <Link
            to="/contact"
            className="inline-block mt-10 font-display text-xs tracking-[0.3em] uppercase bg-gold text-burgundy-deep px-10 py-4 hover:bg-ivory transition-colors shadow-gold"
          >
            {t("enter_correspondence")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const frMessage = [
  "Ce lien ancestral, tissé à travers les générations, incarne à la fois un devoir de mémoire et une responsabilité vivante : celle de préserver et de transmettre l'héritage des peuples du Mandé — un noble héritage, forgé par les idéaux et les valeurs qui ont façonné notre histoire commune.",
  "Bien que l'Empire du Mâli, en tant qu'entité politique, ait disparu, son esprit perdure, incarné dans les institutions, les principes et les traditions qu'il nous a légués. Fidèle aux enseignements de Soundjata Keita, j'assume le rôle qui m'a été transmis par la lignée des souverains du Mandé.",
  "La Maison du Mandé, forte de femmes et d'hommes venus d'horizons divers, de toutes origines, fois et croyances, incarne aujourd'hui cette flamme. Elle œuvre pour l'unité culturelle, la transmission historique et la solidarité entre les peuples du Mandé.",
];

const enMessage = [
  "This ancestral bond, woven through generations, embodies both a duty of memory and a living responsibility: that of preserving and transmitting the heritage of the Mandé peoples — a noble heritage, forged by the ideals and values that have shaped our common history.",
  "Although the Empire of Mali, as a political entity, has disappeared, its spirit endures, embodied in the institutions, principles and traditions it has bequeathed to us. Faithful to the teachings of Sundiata Keita, I assume the role that has been passed down to me through the lineage of the sovereigns of Mandé.",
  "The Maison du Mandé, strengthened by men and women from diverse horizons, of all origins, faiths and beliefs, now embodies this flame. It works for cultural unity, historical transmission and solidarity among the Mandé peoples.",
];
