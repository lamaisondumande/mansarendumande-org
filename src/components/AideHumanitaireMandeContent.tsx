import { GoldRule, Ornament } from "@/components/Ornament";
import mosquee1 from "@/assets/aide-humanitaire/mosquee-1.jpg";
import mosquee2 from "@/assets/aide-humanitaire/mosquee-2.jpg";
import pouponniere1 from "@/assets/aide-humanitaire/pouponniere-1.jpg";
import pouponniere2 from "@/assets/aide-humanitaire/pouponniere-2.jpg";
import pouponniere3 from "@/assets/aide-humanitaire/pouponniere-3.jpg";
import pouponniere4 from "@/assets/aide-humanitaire/pouponniere-4.jpg";
import pouponniere5 from "@/assets/aide-humanitaire/pouponniere-5.jpg";
import pouponniere6 from "@/assets/aide-humanitaire/pouponniere-6.jpg";
import djoliba1 from "@/assets/aide-humanitaire/djoliba-1.jpg";
import djoliba2 from "@/assets/aide-humanitaire/djoliba-2.jpg";
import kangaba1 from "@/assets/aide-humanitaire/kangaba-1.jpg";
import kangaba2 from "@/assets/aide-humanitaire/kangaba-2.jpg";
import kangaba3 from "@/assets/aide-humanitaire/kangaba-3.jpg";
import kangaba4 from "@/assets/aide-humanitaire/kangaba-4.jpg";
import nteguedo1 from "@/assets/aide-humanitaire/nteguedo-1.jpg";
import nteguedo2 from "@/assets/aide-humanitaire/nteguedo-2.jpg";
import nteguedo3 from "@/assets/aide-humanitaire/nteguedo-3.jpg";
import nteguedo4 from "@/assets/aide-humanitaire/nteguedo-4.jpg";
import nteguedo5 from "@/assets/aide-humanitaire/nteguedo-5.jpg";
import nteguedo6 from "@/assets/aide-humanitaire/nteguedo-6.jpg";
import nteguedo7 from "@/assets/aide-humanitaire/nteguedo-7.jpg";

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

export function AideHumanitaireMandeContent() {
  return (
    <>
      <section className="relative pt-16 pb-12 px-6 bg-secondary/40 border-b border-gold/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            Engagements
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep text-balance leading-tight">
            Aide humanitaire dans le Mandé
          </h1>
          <GoldRule className="mt-6" />
          <p className="mt-6 font-serif italic text-base md:text-lg text-muted-foreground">
            Solidarité, foi et devoir impérial au cœur des villages mandeka.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl w-full px-6 py-16">
        {/* SECTION 1 — MOSQUÉE OUÉZZINDOUGOU */}
        <H2>Réfection du sol de la mosquée de Ouézzindougou</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <Img src={mosquee1} alt="Mosquée de Ouézzindougou — extérieur" />
          <Img src={mosquee2} alt="Mosquée de Ouézzindougou — intérieur rénové" />
        </div>

        <H3>
          Un acte de foi, de solidarité et de dignité : la Maison du Mandé soutient la
          réfection de la mosquée de Ouézzindougou
        </H3>

        <P>
          C'est avec une immense gratitude et un profond sens du devoir que la Maison du
          Mandé annonce l'achèvement d'un projet essentiel porté en partenariat avec la
          population de Ouézzindougou, village du Mandé malien : la réfection complète du
          sol de sa mosquée centrale.
        </P>
        <P>
          Ce lieu sacré, cœur vivant de la communauté, a bénéficié d'une rénovation
          intégrale qui offre désormais aux fidèles un espace de prière plus sûr, plus
          propre, et plus digne de la foi qu'ils y expriment chaque jour. Ce projet, mené
          avec efficacité et respect des traditions locales, n'aurait pu aboutir sans la
          générosité exemplaire de nos bienfaiteurs, qui ont, par leurs dons, répondu à
          l'appel d'une cause noble et spirituelle.
        </P>

        <H3>Ouézzindougou : un village de foi, de mémoire et d'espérance</H3>
        <P>
          Situé dans la région de Koulikoro, Ouézzindougou est l'un de ces villages du
          Mandé profond où l'héritage des anciens résonne encore dans les gestes
          quotidiens. C'est un lieu de mémoire, d'agriculture traditionnelle, de palabre
          sous les arbres sacrés, et surtout de ferveur religieuse sincère. Majoritairement
          musulmane, sa population fait vivre un islam paisible, ancré dans la terre et
          ouvert aux valeurs d'accueil et de solidarité.
        </P>
        <P>
          La mosquée de Ouézzindougou n'est pas seulement un édifice ; elle est le point
          de rassemblement spirituel, le cœur battant de la communauté, celui où l'on
          transmet les valeurs, où l'on enseigne aux enfants, et où les anciens veillent à
          la préservation de l'ordre coutumier.
        </P>

        <H3>Un projet au service de la foi, de la dignité humaine et du devoir impérial</H3>
        <P>
          Au-delà de la simple amélioration matérielle, cette action s'inscrit dans la
          vision impériale portée par la Maison du Mandé : celle d'un engagement constant
          envers les populations du Mandé, dans la droite ligne des principes de Soundjata
          Keita et du Code des Chasseurs, qui proclame l'importance du respect, de la
          solidarité, et du soutien aux plus vulnérables.
        </P>
        <P>
          Ce geste est également enraciné dans l'éthique islamique de l'aumône (zakat),
          valeur fondatrice de notre mission humanitaire. Il rappelle que servir les lieux
          de culte, c'est honorer Dieu à travers le service rendu à Ses serviteurs.
        </P>

        <H3>Une gratitude sincère envers nos donateurs</H3>
        <P>
          La Maison du Mandé tient à exprimer sa plus sincère reconnaissance à tous les
          donateurs, mécènes et partenaires qui ont rendu ce projet possible. Leur
          bienveillance n'est pas seulement un acte de charité : elle est un témoignage
          vivant de foi, de conscience et d'unité.
        </P>
        <P>
          Grâce à vous, Ouézzindougou a retrouvé la beauté d'un lieu de prière digne, et
          grâce à vous, les habitants prient désormais avec le sentiment d'être vus,
          entendus et honorés.
        </P>

        <H3>Vers d'autres horizons de lumière</H3>
        <P>
          Ce projet est un jalon, un signal, une promesse : celle d'un avenir porté par la
          solidarité impériale, dans lequel chaque village du Mandé — du plus modeste au
          plus emblématique — saura qu'il n'est pas oublié.
        </P>
        <P>
          Ensemble, continuons à faire vivre l'esprit du Mandé. Continuons à faire briller
          l'espoir dans chaque recoin de notre terre, dans chaque cœur, dans chaque
          prière.
        </P>

        <Ornament className="my-16" />

        {/* SECTION 2 — POUPONNIÈRE */}
        <H2>Intervention dans la pouponnière de Ouézzindougou</H2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          <Img src={pouponniere1} alt="Pouponnière de Ouézzindougou" />
          <Img src={pouponniere2} alt="Pouponnière — distribution" />
          <Img src={pouponniere3} alt="Pouponnière — enfants accueillis" />
        </div>

        <H3>
          Un acte de tendresse et de devoir : la Maison du Mandé au service de la
          pouponnière de Ouézzindougou
        </H3>
        <P>
          C'est avec une émotion sincère et une grande fierté que la Maison du Mandé
          partage avec vous une initiative profondément humaine : l'action menée
          récemment au bénéfice de la pouponnière de Ouézzindougou, en partenariat avec
          les forces vives de la communauté locale et grâce au soutien indéfectible de nos
          donateurs.
        </P>
        <P>
          Ce projet ne constitue pas une simple action ponctuelle : il s'inscrit dans une
          vision impériale à long terme, celle de la protection de l'enfance, de
          l'éducation et du développement harmonieux des générations futures. La jeunesse
          du Mandé, et plus largement du Mali, est le pilier de notre renaissance
          collective.
        </P>

        <H3>La pouponnière de Ouézzindougou : un havre fragile, une mission sacrée</H3>
        <P>
          Au cœur du village de Ouézzindougou, ce centre d'accueil prend soin d'enfants
          orphelins, abandonnés ou vulnérables, leur offrant un refuge face aux aléas de
          la vie, mais aussi une promesse d'avenir. Ces nourrissons, souvent confrontés
          dès leur naissance à l'injustice du sort, incarnent l'innocence, la résilience et
          l'espérance.
        </P>
        <P>
          Dans un esprit de fraternité et de responsabilité morale, la Maison du Mandé a
          mobilisé ses ressources afin de renforcer les capacités de cette structure, dans
          le respect de sa mission humanitaire et spirituelle.
        </P>

        <H3>Une aide concrète pour un avenir plus lumineux</H3>
        <P>Lors de cette action, plusieurs contributions majeures ont été réalisées :</P>
        <ul className="font-serif text-lg leading-[1.85] text-foreground/90 list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Fournitures de première nécessité</strong> : couches, laits infantiles,
            produits d'hygiène et de santé ont été remis pour répondre aux besoins
            immédiats des enfants.
          </li>
          <li>
            <strong>Équipements logistiques</strong> : du matériel a été offert pour
            améliorer la prise en charge quotidienne des tout-petits et faciliter le
            travail du personnel encadrant.
          </li>
          <li>
            <strong>Soutien financier direct</strong> : une aide monétaire a été versée
            pour contribuer au bon fonctionnement général de la pouponnière.
          </li>
        </ul>
        <P>
          Ces gestes, aussi modestes qu'ils puissent paraître, portent en eux une
          puissance symbolique immense : ils rappellent que chaque vie compte, que chaque
          enfant mérite amour, sécurité et espoir. Et que chaque action solidaire peut
          changer un destin.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <Img src={pouponniere4} alt="Pouponnière — soins" />
          <Img src={pouponniere5} alt="Pouponnière — fournitures" />
          <Img src={pouponniere6} alt="Pouponnière — équipe" />
        </div>

        <H3>Un élan de générosité impériale : merci à nos donateurs</H3>
        <P>
          La Maison du Mandé tient à saluer avec la plus grande reconnaissance l'ensemble
          des donateurs, partenaires et bénévoles qui ont répondu à l'appel du cœur. Votre
          engagement est un acte de foi envers notre humanité commune. Vous êtes les
          artisans silencieux d'un avenir meilleur, les gardiens d'un idéal que nous
          partageons : celui de ne jamais abandonner les plus fragiles.
        </P>

        <H3>Pour la jeunesse du Mandé, pour la grandeur de demain</H3>
        <P>
          Dans l'esprit de Soundjata Keita, fondateur de l'Empire du Mali et garant de la
          justice sociale, nous affirmons que chaque enfant secouru est une promesse tenue
          envers notre futur. C'est à travers eux que renaîtra la grandeur du Mandé.
        </P>
        <P>
          La Maison du Mandé poursuivra sans relâche son œuvre auprès des enfants, des
          familles et des communautés, fidèle à l'appel du Code des Chasseurs et à
          l'exigence de la zakat impériale, pilier moral de notre mission.
        </P>
        <p className="font-display text-xl md:text-2xl text-burgundy-deep text-center my-8 leading-snug">
          Continuons, ensemble, à bâtir un avenir où aucun enfant ne sera oublié.
        </p>

        <Ornament className="my-16" />

        {/* SECTION 3 — DJOLIBA */}
        <H2>Aide humanitaire dans le village de Djoliba</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <Img src={djoliba1} alt="Aide humanitaire à Djoliba" />
          <Img src={djoliba2} alt="Distribution à Djoliba" />
        </div>

        <H3>
          Action humanitaire et devoir de mémoire : la Maison du Mandé au service de
          Djoliba, cœur vivant de notre héritage impérial
        </H3>
        <P>
          C'est avec un profond sentiment d'honneur et de responsabilité que la Maison du
          Mandé partage avec vous les fruits d'une action essentielle menée au profit du
          village historique de Djoliba, berceau de l'Empire du Mali et haut lieu de
          mémoire de notre civilisation. Fidèle à sa vocation impériale, la Maison du
          Mandé s'est engagée aux côtés des habitants pour renforcer leur résilience, leur
          dignité et leur bien-être, en parfaite harmonie avec les valeurs fondatrices du
          Mandé : solidarité, justice, loyauté et transmission.
        </P>

        <H3>Djoliba : l'âme du Mandé, l'écho des ancêtres</H3>
        <P>
          Situé au bord du fleuve Niger, Djoliba n'est pas un simple village. Il est le
          sanctuaire vivant de la mémoire impériale, un lieu sacré où résonne encore
          l'esprit de Soundjata Keita et du serment de Kurukan Fuga. Enraciné dans
          l'histoire, ce village incarne la grandeur morale, spirituelle et culturelle de
          notre peuple. Agir pour Djoliba, c'est répondre à un appel ancestral, c'est poser
          un acte d'amour envers notre identité profonde.
        </P>

        <H3>Une mission de soutien, un engagement de foi</H3>
        <P>
          Dans le cadre de cette opération menée avec rigueur et dévouement, la Maison du
          Mandé a coordonné plusieurs actions humanitaires ciblées, essentielles au
          renforcement du tissu communautaire :
        </P>
        <ul className="font-serif text-lg leading-[1.85] text-foreground/90 list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Distribution de denrées alimentaires</strong> aux familles en situation
            de précarité, pour faire face aux besoins urgents du quotidien.
          </li>
          <li>
            <strong>Fourniture de matériel scolaire</strong> aux enfants, garants de notre
            futur et vecteurs de l'intelligence mandingue.
          </li>
          <li>
            <strong>Dons de médicaments et de matériel médical</strong>, en appui aux
            structures de santé locale.
          </li>
          <li>
            <strong>Séances de sensibilisation culturelle</strong>, rappelant aux jeunes
            l'importance de préserver nos traditions, nos rites et notre mémoire
            collective.
          </li>
        </ul>
        <P>
          Ces actions ne relèvent pas d'un simple geste de bienveillance : elles
          s'inscrivent dans une vision impériale de développement humain, de transmission
          et de souveraineté culturelle.
        </P>

        <H3>
          La Maison du Mandé : gardienne du lien entre passé glorieux et avenir solidaire
        </H3>
        <P>
          En agissant à Djoliba, la Maison du Mandé ne fait que poursuivre sa mission
          légitime de rayonnement et de protection des villages mandeka. Elle répond à
          l'appel des temps anciens, tout en préparant l'avenir. Chaque initiative menée,
          chaque vie touchée, chaque voix écoutée constitue une pierre ajoutée à
          l'édifice d'un Mandé uni, éveillé et tourné vers sa renaissance.
        </P>

        <H3>Un hommage vivant à Soundjata Keita et au serment des anciens</H3>
        <P>
          Nous exprimons notre plus sincère gratitude à l'ensemble de nos donateurs,
          partenaires et volontaires qui ont, par leur générosité, rendu cette action
          possible. Votre fidélité à notre cause est un acte de noblesse. Vous portez haut
          les couleurs de la fraternité mandingue et contribuez à écrire une nouvelle page
          de l'histoire impériale.
        </P>
        <p className="font-display text-xl md:text-2xl text-burgundy-deep text-center my-8 leading-snug">
          Poursuivons ensemble cette œuvre sacrée. Pour Djoliba. Pour le Mandé. Pour
          l'honneur de notre peuple.
        </p>

        <Ornament className="my-16" />

        {/* SECTION 4 — KANGABA */}
        <H2>Intervention dans l'ancienne capitale impériale Kangaba</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <Img src={kangaba1} alt="Entrée du village de Kangaba" />
          <Img src={kangaba2} alt="Action humanitaire à Kangaba" />
        </div>

        <H3>
          À Kangaba, le cœur spirituel du Mandé : la Maison du Mandé au service de
          l'héritage sacré et des plus démunis
        </H3>
        <P>
          C'est avec une profonde révérence et un sens aigu du devoir historique que la
          Maison du Mandé vous annonce la réalisation d'une action solidaire majeure au
          sein du village sacré de Kangaba, gardien ancestral de notre civilisation
          impériale. À la croisée du sacré et de l'histoire, ce village emblématique
          incarne, plus que tout autre, l'âme vivante du Mandé.
        </P>

        <H3>Kangaba : sanctuaire du Mandé, flambeau de l'humanité</H3>
        <P>
          Kangaba n'est pas un simple village. Il est le sanctuaire intemporel du
          Kamabulon, cette case sacrée où se transmettent depuis des siècles les secrets
          de notre royauté, et le berceau du Kurukan Fuga, la Charte fondatrice de la
          gouvernance mandingue, classée au Patrimoine culturel immatériel de l'humanité
          par l'UNESCO. En posant un geste de solidarité à Kangaba, la Maison du Mandé
          agit au carrefour de la mémoire, de la responsabilité et de la vision.
        </P>

        <H3>Une action de solidarité guidée par les valeurs de l'empire</H3>
        <P>
          Animée par les principes de justice sociale et de fraternité ancestrale, la
          Maison du Mandé a organisé une distribution humanitaire de denrées
          alimentaires, visant à soutenir les populations les plus vulnérables de Kangaba.
          Cette action, menée avec discrétion mais avec solennité, s'inscrit dans une
          volonté claire : soulager les souffrances sans trahir la dignité.
        </P>
        <P>
          Ce geste concret reflète les idéaux de Soundjata Keita et des anciens du Mandé :
          servir le peuple, protéger les plus faibles et préserver la cohésion sociale au
          sein des communautés.
        </P>

        <H3>Préserver le sacré, nourrir le vivant</H3>
        <P>
          Au-delà de l'aide matérielle, cette action représente un acte de fidélité à
          l'héritage impérial. Kangaba est une mémoire vivante, un pont entre les ancêtres
          et la postérité. Il nous rappelle que chaque pierre, chaque parole, chaque rite
          transmis est une part de notre souveraineté culturelle et de notre dignité
          spirituelle.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          <Img src={kangaba3} alt="Distribution de denrées à Kangaba" />
          <Img src={kangaba4} alt="Bénéficiaires à Kangaba" />
        </div>

        <H3>La Maison du Mandé : garante d'un Mandé enraciné et solidaire</H3>
        <P>
          Par son engagement constant, la Maison du Mandé réaffirme sa mission sacrée :
          servir le Mandé non seulement par les mots et les symboles, mais par les actes
          concrets, en restant proche du peuple, fidèle à son histoire, et visionnaire
          dans son action.
        </P>
        <P>
          Nous exprimons notre gratitude éternelle à tous les donateurs, partenaires et
          volontaires qui rendent ces projets possibles. Grâce à vous, la mémoire du Mandé
          vit, s'incarne et inspire.
        </P>
        <p className="font-display text-xl md:text-2xl text-burgundy-deep text-center my-8 leading-snug">
          Pour Kangaba, pour le Kamabulon, pour le Mandé éternel… continuons à bâtir, à
          protéger et à transmettre.
        </p>

        <Ornament className="my-16" />

        {/* SECTION 5 — NTÉGUÉDO */}
        <H2>Intervention dans le village de Ntéguédo dans le Mandé</H2>

        <div className="my-8">
          <Img src={nteguedo1} alt="Action humanitaire à Ntéguédo" />
        </div>

        <H3>
          Les actions humanitaires de la Maison du Mandé — Année 2025 : un engagement
          fidèle au service du Mandé
        </H3>

        <P>
          Fidèle à sa vocation séculaire d'entraide, de solidarité et de justice, la
          Maison Impériale du Mandé a poursuivi en 2025 son œuvre humanitaire au cœur de
          notre terre ancestrale. Dans l'esprit des hautes valeurs léguées par l'Empire du
          Mali et la Charte du Kurukan Fuga, nous avons porté assistance à nos frères et
          sœurs du Mandé, là où le besoin se faisait le plus urgent.
        </P>

        <P>
          Cette année, l'une des principales actions s'est déroulée dans le village
          historique de Ntéguédo, dans le cercle de Koulikoro. Ntéguédo, berceau de
          traditions anciennes et témoin vivant de la culture mandingue, est l'un de ces
          villages où la mémoire des ancêtres continue de guider les pas des vivants.
          Inscrit dans une région autrefois prospère, mais aujourd'hui fragilisée par des
          défis socio-économiques, Ntéguédo incarne à la fois l'héritage glorieux du
          passé et la nécessité de la solidarité contemporaine.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <Img src={nteguedo2} alt="Distribution à Ntéguédo" />
          <Img src={nteguedo3} alt="Bénéficiaires à Ntéguédo" />
          <Img src={nteguedo4} alt="Cérémonie à Ntéguédo" />
        </div>

        <P>
          En réponse aux difficultés rencontrées par les populations locales, la Maison du
          Mandé a organisé une importante opération de distribution de denrées
          alimentaires essentielles : riz, sucre, et divers produits de première
          nécessité. Grâce à cette action, plus de 200 personnes, appartenant à des
          familles parmi les plus vulnérables, ont pu recevoir un soutien concret,
          apportant un soulagement immédiat face aux pénuries et à l'insécurité
          alimentaire.
        </P>

        <P>
          La distribution, menée en coordination avec les autorités coutumières de
          Ntéguédo et de Ouézzindougou, s'est déroulée dans le respect des traditions, en
          présence des chefs de villages, des notables et des représentants des
          populations locales. Ce moment solennel a été marqué par des prières de
          bénédiction, des chants traditionnels et une ferveur collective témoignant de la
          gratitude et de l'espoir retrouvés.
        </P>

        <P>
          Au-delà de l'aide matérielle, cette initiative a permis de raviver l'esprit
          communautaire, de renforcer les liens de fraternité entre les habitants, et de
          redonner dignité et confiance à ceux qui en avaient le plus besoin. Elle
          témoigne de la volonté inébranlable de la Maison du Mandé d'agir non seulement
          par la parole, mais surtout par des gestes concrets, à l'image des enseignements
          de nos aïeux.
        </P>

        <P>
          Dans un monde en proie à l'individualisme et à l'indifférence, la Maison du
          Mandé réaffirme ainsi sa mission sacrée : celle de porter la lumière de la
          solidarité, de l'honneur et du devoir partout où nos peuples appellent à l'aide.
          Nous continuerons inlassablement à œuvrer pour le bien-être de nos communautés,
          en restant fidèles à l'esprit de générosité et de justice qui fit autrefois la
          grandeur de l'Empire du Mali.
        </P>

        <P>
          À travers chaque denrée offerte, c'est un message d'espérance que nous semons
          dans le Mandé, pour que jamais ne se tarisse la source sacrée de notre humanité
          partagée.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <Img src={nteguedo5} alt="Bénéficiaires de Ntéguédo — portrait" />
          <Img src={nteguedo6} alt="Bénéficiaires de Ntéguédo" />
          <Img src={nteguedo7} alt="Distribution à Ntéguédo" />
        </div>

        <Ornament className="my-12" />
      </article>
    </>
  );
}
