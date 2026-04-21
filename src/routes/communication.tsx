import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "./empire";
import { GoldRule } from "@/components/Ornament";

export const Route = createFileRoute("/communication")({
  head: () => ({
    meta: [
      { title: "Communication & Presse — La Maison du Mandé" },
      {
        name: "description",
        content:
          "Communiqués officiels, distinctions et articles de presse internationale concernant la Maison du Mandé.",
      },
      { property: "og:title", content: "Communication de la Maison du Mandé" },
      { property: "og:description", content: "Presse, distinctions et communiqués officiels." },
    ],
  }),
  component: CommunicationPage,
});

const press = [
  { date: "22 Septembre 2022", title: "Invitation à l'Ambassade de Belgique à Paris", text: "Remise de l'Ordre de la Croix Belge au Président de la Maison du Mandé." },
  { date: "21 Août 2025", title: "Gala de la Maison de Géorgie aux États-Unis", text: "Participation du Grand Ministre au gala caritatif de la Maison Royale de Géorgie." },
  { date: "6 Juin 2025", title: "Présentation des armoiries à Dragenburg", text: "Dévoilement des armes officielles peintes par l'artiste héraldique Giuseppe Meliti." },
  { date: "25 Septembre 2025", title: "Reconnaissance de la Maison du Mandé", text: "Article scientifique soulignant la continuité dynastique de la lignée Keita." },
  { date: "8 Décembre 2025", title: "Médaille du Mérite Associatif", text: "Distinction reçue par le Kalisa Farma pour l'engagement humanitaire et sportif." },
  { date: "15 Décembre 2025", title: "Grand Compagnon de l'Ordre du Lion", text: "Jonathan Bamba, international ivoirien, élevé à cette prestigieuse distinction." },
  { date: "12 Janvier 2026", title: "Partenariat MDM × Servare Manere", text: "Réception du premier Arbre de la Paix en Afrique — symbole d'unité et de dialogue." },
  { date: "27 Mars 2026", title: "Titre d'Aznauri pour le Sandaki", text: "Distinction reçue de la Maison Royale de Géorgie lors du gala 2026." },
];

function CommunicationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow="Chancellerie"
        title="Communication & Presse"
        subtitle="Communiqués officiels, distinctions et rayonnement international."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <ol className="relative border-l border-gold/40 ml-3">
            {press.map((p, i) => (
              <li key={i} className="mb-12 pl-8 relative">
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gold ring-4 ring-ivory" />
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{p.date}</p>
                <h3 className="mt-2 font-display text-2xl text-burgundy-deep">{p.title}</h3>
                <div className="gold-rule my-3 w-12" />
                <p className="text-muted-foreground text-[1rem] leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <GoldRule />
            <p className="mt-6 font-serif italic text-foreground/80">
              Pour toute demande presse, veuillez contacter la Grande Chancellerie.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
