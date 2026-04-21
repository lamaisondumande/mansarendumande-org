import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament, GoldRule } from "@/components/Ornament";
import heroMali from "@/assets/hero-mali.jpg";
import birthEmpire from "@/assets/birth-empire.jpg";
import mansa from "@/assets/mansa.jpg";
import capitals from "@/assets/capitals.jpg";
import coatOfArms from "@/assets/coat-of-arms.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison du Mandé — Au service du Mandé et des Mandeka" },
      {
        name: "description",
        content:
          "La Maison Impériale du Mandé perpétue l'héritage de l'Empire du Mâli — patrimoine, culture, philanthropie et continuité dynastique des Keita.",
      },
      { property: "og:title", content: "La Maison du Mandé" },
      { property: "og:description", content: "Au service du Mandé et des Mandeka — héritage de l'Empire du Mâli." },
      { property: "og:image", content: heroMali },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroMali },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    title: "La naissance de l'Empire du Mâli",
    excerpt:
      "1235 — Soundjata Keita unit les peuples du Mandé après la victoire de Kirina. Une civilisation s'élève.",
    image: birthEmpire,
    to: "/empire" as const,
  },
  {
    title: "L'Empire du Mâli ou Empire Manden",
    excerpt:
      "De 1235 à 1670, un rayonnement politique, économique et spirituel sans précédent en Afrique de l'Ouest.",
    image: mansa,
    to: "/empire" as const,
  },
  {
    title: "Les capitales impériales du Mâli",
    excerpt:
      "Niani, Kangaba, Tombouctou — sur les traces des cités qui ont façonné la mémoire du continent.",
    image: capitals,
    to: "/patrimoine" as const,
  },
];

const news = [
  {
    date: "12 Janvier 2026",
    title: "Premier Arbre de la Paix en Afrique",
    text:
      "Symbole d'unité, de dialogue et de réconciliation, ce partenariat avec Servare Manere ancre la paix au cœur du Mandé.",
  },
  {
    date: "15 Décembre 2025",
    title: "Grand Compagnon de l'Ordre du Lion du Mandé",
    text:
      "L'international ivoirien Jonathan Bamba élevé au rang de Grand Compagnon, message d'inspiration pour la jeunesse.",
  },
  {
    date: "8 Décembre 2025",
    title: "Médaille de l'engagement associatif",
    text:
      "La Maison du Mandé honorée pour ses actions humanitaires et son engagement constant pour la solidarité.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroMali}
          alt="Architecture impériale du Mâli au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/60 via-burgundy-deep/30 to-burgundy-deep/85" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory animate-fade-up">
          <img src={coatOfArms} alt="" className="h-24 md:h-32 mb-6 drop-shadow-2xl" width={128} height={128} />
          <p className="font-display text-xs md:text-sm tracking-[0.45em] uppercase text-gold mb-4">
            Maison Impériale
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-balance max-w-4xl leading-[1.05]">
            La Maison du Mandé
          </h1>
          <div className="mt-6 ornament-divider max-w-md w-full">
            <span className="font-display text-gold text-xs tracking-[0.4em]">✦</span>
          </div>
          <p className="mt-6 font-serif italic text-xl md:text-2xl text-ivory/90 max-w-2xl text-balance">
            « Tout homme a sa terre. Et lorsque le destin y est lié,
            aucune puissance humaine ne peut l'en détourner. »
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/empire"
              className="font-display text-xs tracking-[0.3em] uppercase bg-gold text-burgundy-deep px-8 py-4 hover:bg-ivory transition-colors shadow-gold"
            >
              Découvrir l'Empire
            </Link>
            <Link
              to="/humanitaire"
              className="font-display text-xs tracking-[0.3em] uppercase border border-gold/80 text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors"
            >
              Nos engagements
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">Mémoire vivante</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-burgundy-deep">
              Aux sources du Mandé
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                className="group block hover-gold-frame bg-card shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1280}
                    height={960}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-transparent to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl text-burgundy-deep group-hover:text-burgundy transition-colors">
                    {p.title}
                  </h3>
                  <div className="gold-rule my-4 w-16 mx-auto" />
                  <p className="text-muted-foreground text-[0.95rem]">{p.excerpt}</p>
                  <p className="mt-5 font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                    Lire →
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
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">Allocution</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-burgundy-deep text-balance">
              Message du Président et Chef de la Maison Impériale
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="prose-lg font-serif text-foreground/90 space-y-6 leading-[1.85] text-lg text-justify">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-burgundy">
              Ce lien ancestral, tissé à travers les générations, incarne à la fois un devoir
              de mémoire et une responsabilité vivante&nbsp;: celle de préserver et de transmettre
              l'héritage des peuples du Mandé — un noble héritage, forgé par les idéaux et
              les valeurs qui ont façonné notre histoire commune.
            </p>
            <p>
              Bien que l'Empire du Mâli, en tant qu'entité politique, ait disparu, son esprit
              perdure, incarné dans les institutions, les principes et les traditions qu'il
              nous a légués. Fidèle aux enseignements de Soundjata Keita et à la volonté
              exprimée par les anciens, j'assume le rôle qui m'a été transmis par la lignée
              des souverains du Mandé.
            </p>
            <p>
              La Maison du Mandé, forte de femmes et d'hommes venus d'horizons divers,
              de toutes origines, fois et croyances, incarne aujourd'hui cette flamme.
              Elle œuvre pour l'unité culturelle, la transmission historique et la solidarité
              entre les peuples du Mandé.
            </p>
          </div>

          <div className="mt-12 text-center">
            <GoldRule />
            <p className="mt-6 font-display text-burgundy-deep">S.A.I. Le Mansaren Hashim Keita du Mandé</p>
            <p className="text-sm italic text-muted-foreground">14 Janvier 2024</p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">Actualités</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-burgundy-deep">
              Communiqués récents
            </h2>
            <GoldRule className="mt-6" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.title}
                className="border border-gold/30 bg-card p-8 transition-all hover:shadow-royal hover:border-gold"
              >
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{n.date}</p>
                <h3 className="mt-4 font-display text-xl text-burgundy-deep leading-snug">{n.title}</h3>
                <div className="gold-rule my-5 w-12" />
                <p className="text-muted-foreground text-[0.95rem]">{n.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/communication"
              className="inline-block font-display text-xs tracking-[0.3em] uppercase border border-burgundy text-burgundy-deep px-8 py-4 hover:bg-burgundy-deep hover:text-ivory transition-colors"
            >
              Toute l'actualité
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 gradient-royal text-ivory text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${coatOfArms})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }} />
        <div className="relative max-w-3xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">Engagement</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Préserver, transmettre, rayonner
          </h2>
          <p className="mt-6 font-serif italic text-xl text-ivory/85">
            Rejoignez la Maison du Mandé dans sa mission de mémoire, de culture et de philanthropie.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 font-display text-xs tracking-[0.3em] uppercase bg-gold text-burgundy-deep px-10 py-4 hover:bg-ivory transition-colors shadow-gold"
          >
            Entrer en correspondance
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
