import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import birthEmpire from "@/assets/birth-empire.jpg";
import mansa from "@/assets/mansa.jpg";

export const Route = createFileRoute("/empire")({
  head: () => ({
    meta: [
      { title: "L'Empire du Mâli — La Maison du Mandé" },
      {
        name: "description",
        content:
          "Histoire de l'Empire du Mâli (1235–1670) : la naissance, l'apogée sous Soundjata Keita et Mansa Musa, l'héritage spirituel et culturel.",
      },
      { property: "og:title", content: "L'Empire du Mâli" },
      { property: "og:description", content: "1235–1670 : la naissance, l'apogée et l'héritage de l'Empire du Mâli." },
      { property: "og:image", content: birthEmpire },
    ],
  }),
  component: EmpirePage,
});

function EmpirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero
        eyebrow="1235 — 1670"
        title="L'Empire du Mâli"
        subtitle="Quatre siècles de rayonnement politique, spirituel et culturel en Afrique de l'Ouest."
        image={birthEmpire}
      />

      <article className="mx-auto max-w-3xl px-6 py-20 font-serif text-lg leading-[1.85] text-foreground/90 space-y-8 text-justify">
        <Section title="La naissance de l'Empire" eyebrow="1235">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-burgundy">
            En 1235, la victoire de Soundjata Keita à la bataille de Kirina sur le roi
            sosso Soumangourou Kanté ouvre l'ère de l'Empire du Mâli. La fédération
            naissante des peuples mandingues s'unit autour d'un projet commun — la paix,
            la justice et la prospérité — formalisé l'année suivante par la Charte de
            Kurukan Fuga, l'une des plus anciennes déclarations de droits humains au monde.
          </p>
        </Section>

        <Ornament className="my-12" />

        <Section title="L'apogée impériale" eyebrow="XIVᵉ siècle">
          <p>
            Sous le règne du Mansa Musa (1312–1337), l'Empire atteint son zénith. Le
            pèlerinage à La Mecque en 1324, dont l'or distribué bouleverse durablement
            l'économie méditerranéenne, fait connaître au monde la puissance et la
            magnificence du Mâli. Tombouctou, Djenné et Gao deviennent des foyers
            d'érudition, de commerce et de spiritualité.
          </p>
        </Section>

        <figure className="my-16">
          <img
            src={mansa}
            alt="Portrait majestueux d'un Mansa de l'Empire du Mâli"
            className="w-full shadow-royal"
            loading="lazy"
            width={1280}
            height={960}
          />
          <figcaption className="mt-4 text-center font-serif italic text-sm text-muted-foreground">
            Le Mansa, héritier de Soundjata, gardien de la mémoire impériale.
          </figcaption>
        </figure>

        <Section title="L'héritage spirituel et culturel" eyebrow="Civilisation">
          <p>
            L'Empire a semé une œuvre impérissable : la diffusion paisible de l'Islam,
            un commerce florissant, une culture brillante riche en arts, en savoirs et
            en humanisme. Les principes de tolérance, d'unité et de respect des traditions
            inscrits dans la Charte de Kurukan Fuga continuent d'inspirer le Mandé contemporain.
          </p>
        </Section>

        <Section title="Le crépuscule et la mémoire" eyebrow="1610 — 1670">
          <p>
            Comme toute grande civilisation, l'Empire connaît son déclin, affaibli par
            des tensions internes et des agressions extérieures, malgré le courage du
            dernier Mansa régnant, Mahmud IV Keita, qui œuvra jusqu'en 1610 à préserver
            l'intégrité impériale. Mais l'Empire perdure dans les cultures, les mémoires
            et les engagements de ceux qui voient en cet héritage une source profonde
            d'inspiration et de responsabilité.
          </p>
        </Section>

        <div className="mt-16">
          <GoldRule />
          <p className="mt-6 text-center font-display text-burgundy-deep tracking-[0.2em] text-sm">
            Ô MANDÉ, MÉMOIRE VIVANTE
          </p>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/70 via-burgundy-deep/40 to-burgundy-deep/80" />
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

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl text-burgundy-deep">{title}</h2>
      <div className="gold-rule my-5 w-16" />
      {children}
    </div>
  );
}
