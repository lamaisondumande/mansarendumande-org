import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "./empire";
import { GoldRule, Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/humanitaire")({
  head: () => ({
    meta: [
      { title: "Engagements humanitaires — La Maison du Mandé" },
      {
        name: "description",
        content:
          "Les actions humanitaires nationales et internationales menées par la Maison du Mandé : restaurations, aide aux populations, partenariats.",
      },
      { property: "og:title", content: "Engagements humanitaires de la Maison du Mandé" },
      { property: "og:description", content: "Solidarité, restauration, fraternité — au service du Mandé et au-delà." },
    ],
  }),
  component: HumanitairePage,
});

const local = [
  { date: "12 Avril 2023", title: "Rénovation de la mosquée d'Ouézzindougou", text: "Restauration d'un lieu de culte emblématique, dans le respect de son héritage spirituel et culturel." },
  { date: "1er Mai 2023", title: "Intervention à la pouponnière d'Ouézzindougou", text: "Soutien à l'orphelinat municipal — réaffirmation de l'engagement pour la protection de l'enfance." },
  { date: "16 Avril 2024", title: "Action dans le village de Djoliba", text: "Soutien à la population locale, perpétuant l'esprit de fraternité et de responsabilité sociale." },
  { date: "14 Avril 2024", title: "Distribution à Kangaba", text: "Présence officielle dans le berceau mythique du Mandé, dans la dignité et le respect des traditions." },
  { date: "4 Mai 2025", title: "Action dans le village de Ntéguédo", text: "Aide significative aux familles les plus vulnérables, renforçant l'espoir et la cohésion communautaire." },
  { date: "25 Décembre 2025", title: "Premier Arbre de la Paix en Afrique", text: "Symbole d'unité et de réconciliation planté en terre du Mandé." },
];

const international = [
  { date: "30 Février 2022", title: "Action humanitaire aux Comores", text: "Soutien à des projets de développement, dans un esprit de solidarité africaine." },
  { date: "14 Février 2023", title: "Action humanitaire au Ghana", text: "Soutien à la communauté musulmane sous l'égide de la Maison de Sewfi Obeng Mim." },
  { date: "6 Mars 2024", title: "Action humanitaire au Liban", text: "Solidarité envers les populations affectées, fidèle aux idéaux d'unité hérités du Mâli." },
];

function HumanitairePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow="Engagements"
        title="Actions humanitaires"
        subtitle="Au service du Mandé, des Mandeka et des peuples frères."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Au cœur du Mandé" title="Actions locales" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {local.map((a) => (
              <ActionCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      <Ornament className="my-4" />

      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Diplomatie & solidarité" title="Engagements internationaux" />
          <div className="grid gap-8 md:grid-cols-3">
            {international.map((a) => (
              <ActionCard key={a.title} {...a} />
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

function ActionCard({ date, title, text }: { date: string; title: string; text: string }) {
  return (
    <article className="border border-gold/30 bg-card p-8 hover:shadow-royal hover:border-gold transition-all">
      <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{date}</p>
      <h3 className="mt-3 font-display text-xl text-burgundy-deep leading-snug">{title}</h3>
      <div className="gold-rule my-4 w-12" />
      <p className="text-muted-foreground text-[0.95rem]">{text}</p>
    </article>
  );
}
