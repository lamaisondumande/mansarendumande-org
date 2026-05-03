import { GoldRule, Ornament } from "@/components/Ornament";
import comores1 from "@/assets/engagements-internationaux/comores-1.jpg";
import ghana1 from "@/assets/engagements-internationaux/ghana-1.jpg";
import ghana2 from "@/assets/engagements-internationaux/ghana-2.jpg";
import ghana3 from "@/assets/engagements-internationaux/ghana-3.jpg";
import liban1 from "@/assets/engagements-internationaux/liban-1.jpg";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-6 font-display text-3xl md:text-4xl text-burgundy-deep leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 mb-4 font-display text-xl md:text-2xl text-burgundy leading-snug">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-serif text-lg leading-[1.85] text-foreground/90 text-justify mb-5">
      {children}
    </p>
  );
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden border border-gold/30 shadow-elegant">
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
    </figure>
  );
}

export function EngagementsInternationauxContent() {
  return (
    <>
      <section className="relative pt-16 pb-12 px-6 bg-secondary/40 border-b border-gold/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            Engagements
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep text-balance leading-tight">
            Engagements internationaux
          </h1>
          <GoldRule className="mt-6" />
          <p className="mt-6 font-serif italic text-base md:text-lg text-muted-foreground">
            Une solidarité impériale au-delà des frontières du Mandé.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl w-full px-6 py-16">
        {/* COMORES */}
        <H2>Aide humanitaire aux Comores</H2>
        <div className="my-8">
          <Img src={comores1} alt="Mission humanitaire de la Maison du Mandé aux Comores" />
        </div>

        <H3>
          Aux Comores, la Maison du Mandé face à la crise : une solidarité au-delà des frontières
        </H3>
        <P>
          Dans le prolongement de sa mission de solidarité impériale, la Maison du Mandé a
          répondu avec efficacité et compassion à la détresse causée par la pandémie de
          COVID-19 aux Comores, en 2021. Cette intervention s'est inscrite dans une
          dynamique de coopération humanitaire internationale, fidèle aux valeurs d'entraide
          et de justice chères à l'héritage de l'Empire du Mâli.
        </P>

        <H3>Djoiézi : une action ciblée, une réponse concrète</H3>
        <P>
          Consciente des conséquences dramatiques de la crise sanitaire, tant sur le plan
          médical que social, la Maison du Mandé a concentré ses efforts sur la localité de
          Djoiézi, durement touchée par l'urgence humanitaire. Une opération de soutien a
          été rapidement mise en place, alliant logistique, coordination et mobilisation
          communautaire.
        </P>
        <P>Cette action a permis :</P>
        <ul className="list-disc pl-6 font-serif text-lg leading-[1.85] text-foreground/90 mb-5 space-y-2">
          <li>
            La distribution de matériel de protection sanitaire : masques, gels
            hydroalcooliques, gants et dispositifs médicaux de première nécessité pour
            endiguer la propagation du virus.
          </li>
          <li>
            L'acheminement de denrées alimentaires à destination des familles les plus
            vulnérables, afin de répondre aux besoins essentiels dans un contexte de forte
            précarité.
          </li>
        </ul>

        <H3>Un engagement fidèle à l'esprit du Mandé</H3>
        <P>
          Au-delà de l'acte ponctuel, cette initiative reflète la vocation profonde de la
          Maison du Mandé : porter assistance aux peuples frères en période de crise, sans
          distinction de frontière, dans un esprit d'universalité hérité de l'âge d'or de
          Soundjata Keïta.
        </P>
        <P>
          C'est en ce sens que cette mission humanitaire illustre la capacité du Mandé à
          rester un acteur engagé et crédible sur le plan international, au service des
          populations en détresse.
        </P>

        <H3>Remerciements et continuité de l'action</H3>
        <P>
          La Maison du Mandé adresse sa reconnaissance aux donateurs et bénévoles qui ont
          permis la réussite de cette action. Ensemble, ils ont su témoigner de la vitalité
          d'un héritage impérial qui se traduit par des actes tangibles de compassion, de
          dignité et de solidarité.
        </P>
        <P>
          Ce geste envers le peuple comorien, porteur de fraternité interafricaine, demeure
          un symbole fort de l'engagement du Mandé contemporain à œuvrer pour un monde
          plus juste et plus humain.
        </P>

        <Ornament className="my-16" />

        {/* GHANA */}
        <H2>Collaboration avec la Maison Sefwi Obeng Mim du Ghana</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          <Img src={ghana1} alt="Mission au Ghana — Maison Sefwi Obeng Mim" />
          <Img src={ghana2} alt="Action fraternelle au Ghana" />
          <Img src={ghana3} alt="Maison du Mandé au Ghana" />
        </div>

        <H3>Action fraternelle au Ghana : la Maison du Mandé au service de l'unité africaine</H3>
        <P>
          En 2023, la Maison du Mandé a une nouvelle fois illustré son attachement profond
          aux valeurs de fraternité, de solidarité et de rayonnement culturel, en
          participant à une mission caritative en République du Ghana, conduite sous
          l'égide de la Maison de Sefwi Obeng Mim.
        </P>

        <H3>Un geste de fraternité à l'image de l'Empire du Mâli</H3>
        <P>
          Cette initiative, dédiée au soutien de la communauté musulmane locale, s'inscrit
          pleinement dans la tradition d'hospitalité, de tolérance religieuse et de partage
          qui caractérisait l'Empire du Mâli sous Soundiata Keïta. La Maison du Mandé a
          ainsi mobilisé ses ressources humaines et matérielles pour répondre aux besoins
          essentiels de la population, tout en honorant les valeurs spirituelles et
          culturelles communes à nos peuples.
        </P>

        <H3>Une présence active et un engagement solidaire</H3>
        <P>L'action de la Maison du Mandé s'est traduite par :</P>
        <ul className="list-disc pl-6 font-serif text-lg leading-[1.85] text-foreground/90 mb-5 space-y-2">
          <li>
            Une contribution directe aux activités humanitaires organisées au sein de la
            communauté de Sefwi Obeng Mim.
          </li>
          <li>
            L'organisation de temps communautaires et spirituels, mêlant prière, échanges
            culturels et instants de fraternité, afin de renforcer les liens d'unité entre
            les participants.
          </li>
          <li>
            Un soutien moral et symbolique à une communauté exemplaire dans sa foi, son
            accueil et sa volonté de construire un avenir ancré dans les traditions tout en
            étant ouvert à la coopération panafricaine.
          </li>
        </ul>

        <H3>Un pont entre traditions et avenir partagé</H3>
        <P>
          Fidèle à sa mission d'union entre les peuples, la Maison du Mandé œuvre à faire
          renaître l'idéal impérial d'un Mandé uni, bienveillant et rayonnant, au-delà des
          frontières. À travers cette action au Ghana, elle rappelle que l'Afrique, dans sa
          diversité, porte en elle une unité de destin fondée sur la dignité, la mémoire
          commune et la solidarité entre communautés souveraines.
        </P>

        <H3>Un mandat moral, une vision panafricaine</H3>
        <P>
          Par cette intervention fraternelle, la Maison du Mandé réaffirme son rôle de
          passerelle culturelle, de vecteur de paix et de gardienne des principes de justice
          et de respect mutuel qui ont bâti la grandeur de notre civilisation.
        </P>
        <P>
          Elle demeure, dans chaque action, le prolongement vivant de l'idéal impérial du
          Mandé, au service des peuples et de l'harmonie entre les nations d'Afrique de
          l'Ouest.
        </P>

        <Ornament className="my-16" />

        {/* LIBAN */}
        <H2>Participation de la Maison du Mandé au Liban</H2>
        <div className="my-8">
          <Img src={liban1} alt="Maison du Mandé au Liban — projet Sons of Abraham" />
        </div>

        <H3>La Maison du Mandé au Liban : pour la paix, le dialogue et la fraternité universelle</H3>
        <P>
          En 2023, fidèle à sa vocation de paix et de cohésion entre les peuples, la Maison
          du Mandé a pris part au projet humanitaire <em>Sons of Abraham</em>, une initiative
          d'envergure visant à venir en aide aux déplacés de guerre libanais tout en
          renforçant le dialogue interreligieux dans un contexte géopolitique
          particulièrement fragile.
        </P>

        <H3>Un héritage impérial au service de la réconciliation</H3>
        <P>
          Consciente de l'urgence humanitaire et de l'importance vitale de la cohésion
          entre les communautés religieuses, la Maison du Mandé a soutenu ce programme à
          la fois humanitaire et pacificateur. Au-delà de l'assistance matérielle, ce
          partenariat incarne un engagement moral : celui de faire vivre, au cœur du
          Levant, les valeurs intemporelles de tolérance, de justice et de respect mutuel
          portées par l'Empire du Mâli sous le règne de Soundiata Keïta.
        </P>

        <H3>Un message de paix inspiré du Mandé impérial</H3>
        <P>
          À travers cette action, la Maison du Mandé a tenu à faire rayonner l'idéal du
          vivre-ensemble harmonieux qui caractérisait l'Empire du Mâli, où diverses
          croyances coexistaient sous un même ordre de paix, de droiture et de dignité. Cet
          héritage, porteur d'humanité, trouve aujourd'hui écho dans son soutien aux
          populations éprouvées du Liban, en quête d'un avenir apaisé.
        </P>

        <H3>Un engagement pour une solidarité universelle</H3>
        <P>
          En s'associant au projet <em>Sons of Abraham</em>, la Maison du Mandé réaffirme
          son engagement en faveur d'une solidarité internationale fondée sur la fraternité
          des peuples. Elle croit fermement que la compréhension mutuelle et le dialogue
          interreligieux constituent les piliers d'une paix durable, aussi bien au Mandé
          qu'au-delà de ses frontières historiques.
        </P>
        <P>
          Portée par l'héritage spirituel et diplomatique de l'Empire du Mâli, la Maison du
          Mandé œuvre à bâtir des ponts là où d'autres érigent des murs, convaincue que
          l'humanité se grandit toujours dans l'écoute, la compassion et le respect de
          l'autre.
        </P>

        <Ornament className="my-16" />
      </article>
    </>
  );
}
