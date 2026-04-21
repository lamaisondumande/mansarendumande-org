import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "./empire";
import { GoldRule } from "@/components/Ornament";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/patrimoine")({
  head: () => ({
    meta: [
      { title: "Patrimoine impérial du Mâli — La Maison du Mandé" },
      { name: "description", content: "Capitales impériales et patrimoine matériel et immatériel de l'Empire du Mâli." },
      { property: "og:title", content: "Patrimoine impérial du Mâli" },
      { property: "og:description", content: "Capitales, sites et héritage du Mâli." },
    ],
  }),
  component: PatrimoinePage,
});

const sites = {
  fr: [
    { name: "Niani", sub: "Première capitale", text: "Berceau de Soundjata Keita et siège du pouvoir mansa." },
    { name: "Kangaba", sub: "Berceau mythique", text: "Centre spirituel majeur ; abrite la Kamablon, sanctuaire restauré tous les sept ans." },
    { name: "Tombouctou", sub: "Cité du savoir", text: "Foyer d'érudition islamique et carrefour transsaharien." },
    { name: "Djenné", sub: "Joyau d'argile", text: "La Grande Mosquée, plus vaste édifice en terre crue au monde." },
    { name: "Gao", sub: "Carrefour saharien", text: "Étape majeure des routes caravanières et pôle diplomatique." },
    { name: "Ségou", sub: "Mémoire bambara", text: "Héritière des traditions du Mandé et de sa littérature orale." },
  ],
  en: [
    { name: "Niani", sub: "First capital", text: "Birthplace of Sundiata Keita and seat of mansa power." },
    { name: "Kangaba", sub: "Mythical cradle", text: "Major spiritual centre; home to the Kamablon shrine, restored every seven years." },
    { name: "Timbuktu", sub: "City of knowledge", text: "A hub of Islamic scholarship and trans-Saharan crossroads." },
    { name: "Djenné", sub: "Clay jewel", text: "The Great Mosque, the largest mud-brick building in the world." },
    { name: "Gao", sub: "Saharan crossroads", text: "Major caravan stop and diplomatic centre." },
    { name: "Ségou", sub: "Bambara memory", text: "Heir to the Mandé traditions and its oral literature." },
  ],
};

function PatrimoinePage() {
  const { lang, t } = useLang();
  const list = sites[lang];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero eyebrow={t("heritage")} title={t("imperial_capitals")} subtitle={t("capitals_subtitle")} />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <article
                key={s.name}
                className="border border-gold/30 bg-card p-10 hover:shadow-royal hover:border-gold transition-all group"
              >
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{s.sub}</p>
                <h3 className="mt-3 font-display text-3xl text-burgundy-deep group-hover:text-burgundy transition-colors">
                  {s.name}
                </h3>
                <div className="gold-rule my-5 w-12" />
                <p className="text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <GoldRule />
            <p className="mt-6 font-serif italic text-lg text-foreground/80">{t("each_stone")}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
