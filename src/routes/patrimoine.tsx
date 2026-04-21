import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "./empire";
import { GoldRule } from "@/components/Ornament";

export const Route = createFileRoute("/patrimoine")({
  head: () => ({
    meta: [
      { title: "Patrimoine impérial du Mâli — La Maison du Mandé" },
      {
        name: "description",
        content:
          "Les capitales impériales, les sites historiques et le patrimoine matériel et immatériel de l'Empire du Mâli.",
      },
      { property: "og:title", content: "Patrimoine impérial du Mâli" },
      { property: "og:description", content: "Capitales, sites et héritage du Mâli." },
    ],
  }),
  component: PatrimoinePage,
});

const sites = [
  {
    name: "Niani",
    sub: "Première capitale de l'Empire",
    text: "Berceau de Soundjata Keita et siège du pouvoir mansa, Niani fut le cœur politique d'un empire rayonnant.",
  },
  {
    name: "Kangaba",
    sub: "Cradle mythique du Mandé",
    text: "Centre spirituel et symbolique, Kangaba abrite la Kamablon, sanctuaire restauré tous les sept ans.",
  },
  {
    name: "Tombouctou",
    sub: "Cité du savoir",
    text: "Foyer d'érudition islamique, ses universités et bibliothèques rayonnèrent sur tout le monde médiéval.",
  },
  {
    name: "Djenné",
    sub: "Joyau d'argile",
    text: "La Grande Mosquée de Djenné, plus vaste édifice en terre crue au monde, témoigne de l'art sahélien.",
  },
  {
    name: "Gao",
    sub: "Carrefour transsaharien",
    text: "Étape majeure des routes caravanières, Gao fut un nœud de commerce et de diplomatie.",
  },
  {
    name: "Ségou",
    sub: "Mémoire bambara",
    text: "Héritière des traditions du Mandé, Ségou perpétue l'art, la musique et la littérature orale.",
  },
];

function PatrimoinePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow="Patrimoine"
        title="Les capitales impériales"
        subtitle="Sur les traces des cités qui ont façonné la mémoire de l'Afrique."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((s) => (
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
            <p className="mt-6 font-serif italic text-lg text-foreground/80">
              Chaque pierre, chaque manuscrit, chaque chant transmis de génération en
              génération est un fragment vivant de l'âme du Mandé.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
