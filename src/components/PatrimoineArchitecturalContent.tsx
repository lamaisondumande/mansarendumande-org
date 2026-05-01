import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GoldRule, Ornament } from "@/components/Ornament";
import { useLang } from "@/lib/i18n";

import architectureImg from "@/assets/patrimoine/architecture-soudanaise.webp";
import djenneImg from "@/assets/patrimoine/djenne.jpg";
import nionoImg from "@/assets/patrimoine/niono.jpg";
import djingareyberImg from "@/assets/patrimoine/djingareyber.jpg";
import moptiImg from "@/assets/patrimoine/mopti.jpg";
import diafarabeImg from "@/assets/patrimoine/diafarabe.webp";
import kamablonImg from "@/assets/patrimoine/kamablon.jpg";
import kurukanFugaImg from "@/assets/patrimoine/kurukan-fuga.jpg";
import charteMandeImg from "@/assets/patrimoine/charte-mande.jpg";

function Section({
  id,
  title,
  image,
  alt,
  children,
}: {
  id?: string;
  title: string;
  image?: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 first:mt-0">
      {image && (
        <figure className="mb-8 shadow-elegant overflow-hidden border border-gold/30">
          <img src={image} alt={alt ?? title} className="w-full h-auto object-cover" loading="lazy" />
        </figure>
      )}
      <h3 className="font-display text-3xl md:text-4xl text-burgundy-deep leading-tight">{title}</h3>
      <div className="gold-rule my-5 w-16" />
      <div className="font-serif text-lg leading-[1.85] text-foreground/90 space-y-5 text-justify">
        {children}
      </div>
    </section>
  );
}

export function PatrimoineArchitecturalContent() {
  const { t } = useLang();

  return (
    <>
      <section className="relative pt-16 pb-12 px-6 bg-secondary/40 border-b border-gold/30">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            to="/patrimoine"
            className="inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> {t("back_to")}
          </Link>
          <p className="mt-6 font-display text-xs tracking-[0.4em] uppercase text-gold">
            Patrimoine
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep text-balance leading-tight">
            Patrimoine Architectural et Immatériel
          </h1>
          <p className="mt-4 font-serif italic text-base md:text-lg text-foreground/70">
            L'Architecture soudanaise et le patrimoine culturel matériel et immatériel de l'UNESCO
          </p>
          <GoldRule className="mt-6" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl w-full px-6 py-16">
        {/* PARTIE I — Architecture soudanaise */}
        <p className="text-center font-display text-[0.7rem] tracking-[0.4em] uppercase text-gold">
          Partie I
        </p>
        <h2 className="mt-3 text-center font-display text-3xl md:text-4xl text-burgundy-deep leading-tight">
          L'Architecture Soudanaise de l'Empire du Mâli
        </h2>
        <GoldRule className="mt-5 mb-12" />

        <div className="font-serif text-lg leading-[1.85] text-foreground/90 space-y-6 text-justify">
          <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-burgundy">
            L'art de construction soudanais est un héritage architectural remarquable qui s'étend sur
            plusieurs siècles, influencé par les civilisations nubienne, islamique et sahélienne. Il se
            distingue par l'utilisation de matériaux locaux, des formes organiques et une adaptation aux
            conditions climatiques arides.
          </p>
          <p>
            L'usage des matériaux locaux est une caractéristique essentielle de cette architecture. Les
            bâtisseurs soudanais ont toujours privilégié des ressources disponibles sur place, notamment la
            brique de terre crue (adobe), qui assure une isolation thermique efficace contre la chaleur
            écrasante du Sahel. Le bois de palmier et d'acacia est souvent utilisé pour renforcer les
            structures, tandis que le torchis, un mélange de boue et de paille, permet une meilleure
            résistance aux intempéries.
          </p>
          <p>
            L'architecture soudanaise se reconnaît par des structures aux formes harmonieuses et
            fonctionnelles. Les façades sont souvent ornées de crépissages sculptés, caractéristiques des
            villes comme Oualata, Djenné et Tombouctou, qui partagent un style proche de l'architecture
            soudano-sahélienne. Les mosquées en terre crue, dont la plus célèbre est la Grande Mosquée de
            Djenné au Mâli, illustrent l'influence de ce style sur tout le Sahel. Les maisons à cour
            intérieure permettent une ventilation naturelle et offrent un espace de vie ombragé.
          </p>
          <p>
            L'architecture soudanaise est profondément marquée par la culture nubienne, qui remonte aux
            royaumes de Koush et de Méroé. Les pyramides méroïtiques de Méroé et les temples de Gebel
            Barkal en témoignent. Avec l'arrivée de l'islam, l'architecture a intégré des éléments comme
            les minarets en bois, visibles dans des mosquées telles que celles de Larabanga au Ghana ou
            d'Agadez au Niger, ainsi que les arcs et dômes inspirés de l'architecture arabe et perse.
          </p>
          <p>
            Aujourd'hui, l'architecture traditionnelle soudanaise est confrontée à de nombreux défis.
            L'urbanisation rapide pousse à l'utilisation de matériaux modernes comme le béton, tandis que
            les changements climatiques, avec des pluies plus intenses, fragilisent les bâtiments en terre.
            Le manque de préservation est également un problème, bien que certaines initiatives visent à
            restaurer les anciennes constructions.
          </p>
          <p>
            L'architecture soudanaise reste néanmoins un témoignage exceptionnel du savoir-faire ancestral
            des peuples du Sahel et de la vallée du Nil. Elle incarne un équilibre parfait entre
            esthétique, fonctionnalité et adaptation à l'environnement.
          </p>
        </div>

        <Section title="La Grande Mosquée de Djénné" image={architectureImg} alt="Architecture soudanaise">
          <p>
            La Grande Mosquée de Djenné est située à Djenné, au Mali, dans la plaine alluviale du Bani,
            affluent du Niger. Cette mosquée est le plus grand édifice du monde en adobe ou banco (terre
            crue) ; elle est considérée comme la réalisation majeure du style architectural
            soudano-sahélien, tout en reflétant des influences islamiques. Un premier édifice fut construit
            en ce lieu au XIIIᵉ siècle, mais la construction actuelle date seulement de 1907. Marquant le
            cœur de l'agglomération de Djenné, c'est aussi l'un des symboles les plus remarquables de
            l'Afrique subsaharienne. Avec la ville de Djenné elle-même, elle est inscrite depuis 1988 à la
            liste du patrimoine mondial de l'UNESCO.
          </p>
          <p>
            La Grande mosquée de Djenné se distingue des autres mosquées d'Afrique occidentale en ce
            qu'elle a été construite en un lieu vierge de tout autre édifice religieux antérieur : cet
            endroit était précédemment occupé par un palais. Le roi Koi Kunboro (ou Komboro), fraîchement
            converti à l'Islam, fit démolir sa résidence et en 1238 fit construire à son emplacement la
            grande mosquée. Les autres mosquées ont été construites habituellement à la place d'édifices
            pyramidaux coniques, en pisé ou en pierre, censés représenter les esprits protecteurs des
            ancêtres. Des experts en architecture islamique tels que Labelle Prussin pensent que ces
            constructions coniques furent intégrées dans la conception des mosquées dans tout le Mali, et
            considèrent que la Grande mosquée de Djenné en est l'exemple le plus révélateur.
          </p>
          <p>
            Djenné devint, par la suite, l'une des principales villes des empires du Mali puis du Songhaï.
          </p>
        </Section>

        <Section title="La Grande Mosquée du Vendredi de Niono" image={djenneImg} alt="Mosquée de Niono">
          <p>
            La Grande Mosquée du Vendredi de Niono, au Mali, est une mosquée construite en 1948 par une
            équipe de maçons de Djenné. Il s'agit d'un édifice de banco, d'architecture soudanaise.
          </p>
          <p>
            De 1955 à 1956 a lieu une première phase d'agrandissement de la mosquée, avec la construction
            de six travées transversales côté sud. Puis de 1969 à 1973 une deuxième phase d'extension a
            lieu, avec la construction de deux travées longitudinales côté ouest. La partie centrale
            (datant de 1948) est alors totalement reconstruite. À la fin de cette période sont construits
            la salle de prière des femmes ainsi que les bâtiments annexes. Enfin, en 1983, la pièce servant
            de chambre de gardien est transformée en tombeau où repose le premier imam (décédé le 28
            janvier 1983).
          </p>
        </Section>

        <Section
          title="La Grande Mosquée Djingareyber de Tombouctou"
          image={nionoImg}
          alt="Mosquée Djingareyber"
        >
          <p>
            La Grande Mosquée Djingareyber de Tombouctou (Mali) est l'une des trois grandes mosquées de
            Tombouctou (Djingareyber, Sankoré et Sidi Yahya). Elle a été construite entre 1325 et 1327 sous
            le règne de l'empereur Kankan Moussa puis reconstruite et agrandie entre 1570 et 1583 par
            l'Imam Al Aqib, Cadi de Tombouctou qui lui ajouta alors toute la partie sud et le mur
            d'enceinte du cimetière situé à l'ouest.
          </p>
          <p>
            Partiellement détruite en 2012, cet édifice inscrit sur la liste du patrimoine mondial de
            l'UNESCO est par la suite reconstruit.
          </p>
          <p>
            Construite entre 1325 et 1327 par Abou Ishaq es-Sahéli sous le règne de l'empereur Kankan
            Moussa au retour de son pèlerinage à La Mecque (1324-1325), la mosquée est faite en banco, un
            matériau fait de terre cuite. Selon Ibn Khaldoun, l'empereur offrit à Sahéli 12 000 mithqals
            (soit environ 200 kg) de poussière d'or pour sa conception et sa construction. Toutefois on
            estime aujourd'hui que son rôle dans la construction fut limité. L'historien Francis Simonis
            estime que la Grande Mosquée de Tombouctou a été construite à la même époque que la Grande
            Mosquée de Gao et que la salle d'audience « surmontée d'une coupole » du palais de Niani par
            Mansa Moussa. C'est la plus grande mosquée de Tombouctou. Elle peut accueillir la prière du
            vendredi qui rassemble jusqu'à 12 000 fidèles. Elle a été réalisée entièrement en adobe, dans
            un style architectural soudanais ; elle est constituée de vingt-cinq files de piliers. Le
            nombre important de piliers, nécessaires pour limiter la portée des voûtes, ne permet pas
            d'avoir une vue d'ensemble de la salle. Une fois par an la population participe à la réfection
            des enduits extérieurs.
          </p>
        </Section>

        <Section
          title="La Grande Mosquée de Mopti, de Komoguel"
          image={djingareyberImg}
          alt="Mosquée de Mopti"
        >
          <p>
            La Grande Mosquée de Mopti, souvent appelée mosquée de Komoguel, est le principal lieu de culte
            de la ville de Mopti, au Mali. Inspirée du modèle de la grande Mosquée de Djenné, elle est
            construite dans le style soudanais entre 1936 et 1943, ou entre 1933 et 1935 selon l'UNESCO.
            Elle a été bâtie sur l'emplacement d'une précédente mosquée érigée en 1908.
          </p>
          <p>
            Les bâtiments en banco s'abîment vite, notamment pendant la saison des pluies. L'entretien de
            la mosquée nécessite la réalisation collective, tous les ans, d'un enduit de crépissage. En
            1978 puis en 2003, l'édifice est recouvert d'un revêtement en ciment, afin d'éviter d'avoir à
            faire un crépissage d'entretien annuel. Mais ce revêtement n'empêche pas l'eau de s'infiltrer
            et le bâtiment de se dégrader fortement. En effet, le ciment ne s'amalgame pas avec le banco et
            ajoute un poids supplémentaire qui fragilise la structure, créant des fissures.
          </p>
          <p>
            La grande mosquée est inscrite et classée dans le patrimoine culturel national par décret du 28
            septembre 2005. Elle est restaurée d'octobre 2004 à juin 2006, grâce au financement accordé par
            le Trust Aga Khan pour la culture (AKTC), en partenariat avec les autorités maliennes. Il
            s'agit de retrouver la stabilité du bâtiment en utilisant les savoir-faire et les matériaux
            traditionnels.
          </p>
        </Section>

        <Section title="Grande Mosquée de Diafarabé" image={moptiImg} alt="Mosquée de Diafarabé">
          <p>
            La Grande Mosquée de Diafarabé est une mosquée en banco, d'architecture soudanaise, située dans
            la ville de Diafarabé, au Mali. Édifice religieux emblématique, construit en banco — un
            matériau traditionnel composé de terre, d'eau et de paille — elle incarne parfaitement
            l'architecture soudanaise, un style architectural unique à la région ouest-africaine,
            caractérisé par ses formes épurées, ses contreforts et ses minarets massifs.
          </p>
          <p>
            Située dans la ville de Diafarabé, au Mali, cette mosquée est un témoignage vivant de
            l'histoire et de la culture locale, reflétant l'ingéniosité des bâtisseurs traditionnels qui
            ont su adapter leurs techniques aux conditions climatiques et aux ressources disponibles. En
            plus de son rôle spirituel, la mosquée sert de point de rassemblement pour la communauté,
            renforçant les liens sociaux et culturels entre les habitants. Elle est également un symbole de
            l'identité régionale et de la richesse du patrimoine malien.
          </p>
          <p>
            Malgré les défis posés par les intempéries et l'érosion, la mosquée est régulièrement
            entretenue par la communauté, démontrant un profond respect pour ce monument historique. Son
            architecture et son importance culturelle en font un site d'intérêt pour les chercheurs, les
            historiens et les voyageurs curieux de découvrir les traditions et l'art de construire de cette
            région du Sahel.
          </p>
        </Section>

        <Section title="Le Tombeau des Askia" image={diafarabeImg} alt="Tombeau des Askia">
          <p>
            Le tombeau des Askia est un site archéologique de la région de Gao au Mali. Il a été inscrit en
            2004 sur la liste du patrimoine mondial de l'UNESCO. Cette structure pyramidale a été édifiée
            par l'Empereur du Songhaï Askia Mohamed en 1495.
          </p>
          <p>
            Ce mausolée impressionnant, construit au XVᵉ siècle sous le règne de l'empereur Askia Mohamed,
            est un chef-d'œuvre de l'architecture soudano-sahélienne. Érigé en terre crue, il se distingue
            par sa pyramide à étages, ses minarets et son style unique qui reflète la grandeur de l'Empire
            Songhaï, l'un des plus puissants empires de l'Afrique de l'Ouest.
          </p>
          <p>
            Le tombeau est non seulement un lieu de mémoire pour Askia Mohamed, un souverain pieux et
            visionnaire, mais aussi un symbole de l'islamisation de la région et de son riche passé
            historique. Aujourd'hui, il reste un site spirituel et culturel majeur, attirant à la fois les
            pèlerins et les visiteurs du monde entier, bien qu'il nécessite une attention particulière pour
            sa préservation face aux défis environnementaux et humains.
          </p>
        </Section>

        <Ornament className="my-20" />

        {/* PARTIE II — UNESCO immatériel */}
        <p className="text-center font-display text-[0.7rem] tracking-[0.4em] uppercase text-gold">
          Partie II
        </p>
        <h2 className="mt-3 text-center font-display text-3xl md:text-4xl text-burgundy-deep leading-tight">
          Patrimoine culturel matériel et immatériel de l'UNESCO
        </h2>
        <GoldRule className="mt-5 mb-12" />

        <div className="font-serif text-lg leading-[1.85] text-foreground/90 space-y-6 text-justify">
          <p>
            Depuis 2016, le Mali compte 9 éléments inscrits au patrimoine culturel immatériel, 6 sur la
            liste représentative et 3 sur la liste du patrimoine nécessitant une sauvegarde urgente. Les
            éléments suivants sont inscrits sur la liste représentative du patrimoine culturel immatériel
            de l'humanité, en lien direct avec les vestiges de l'époque impériale.
          </p>
        </div>

        <Section title="La Case Sacrée du Kamabulon de Kangaba" image={kamablonImg} alt="Kamablon de Kangaba">
          <p>
            Le Kamablon est la case sacrée de Kangaba, située dans la région de Koulikoro, au cœur du
            Mandé. Érigé en 1653, ce sanctuaire revêt une importance spirituelle, politique et historique
            capitale pour les peuples mandingues. Selon la description des sites historiques et paysages
            culturels du Mandé faite à l'UNESCO par la délégation permanente de la République du Mali, il
            serait le dernier Kamablon encore existant dans l'aire culturelle du Mandé.
          </p>
          <p>
            Sa construction suit l'architecture traditionnelle mandingue : un édifice circulaire de 4
            mètres de diamètre, bâti en terre crue (banco), avec un toit en chaume, symbolisant la
            connexion entre le ciel et la terre. Autour du bâtiment, plusieurs éléments renforcent son
            caractère sacré : trois fromagers (arbres sacrés), un puits, le « wasi » (un espace rituel aux
            usages précis) et la tombe de Mansa Sèmè, qui serait le fondateur du Kamablon et son premier
            prêtre gardien.
          </p>
          <p>
            Dans la tradition du Mandé, le Kamablon est bien plus qu'une simple bâtisse : il est un haut
            lieu de transmission orale et de prise de décisions communautaires. Il fait office de sénat
            villageois, ou « vestibule de parole », où se réunissent les anciens, les chefs traditionnels
            et les griots du clan Diabaté, dépositaires de la mémoire historique du Mandé. C'est en ce lieu
            que sont débattues les grandes questions touchant à la communauté, dans le respect des
            principes de gouvernance hérités de l'Empire du Mali.
          </p>
          <p>
            L'intérieur du Kamablon recèle des objets et du mobilier précieux et symboliques, témoins du
            passé prestigieux du Mandé. Ces artefacts, souvent inaccessibles aux non-initiés, sont chargés
            de sens et de mysticisme, rappelant les grandes figures de l'histoire impériale. Tous les sept
            ans, une cérémonie de reconstruction rituelle du toit a lieu, marquant un cycle de
            renouvellement spirituel et social.
          </p>
          <p>
            Lieu de mémoire, sanctuaire des traditions orales et symbole de la permanence de la
            civilisation mandingue, le Kamablon est l'un des derniers témoins vivants de l'organisation
            politique et spirituelle instaurée depuis Soundjata Keita et la Charte de Kurukan Fuga.
          </p>
        </Section>

        <Section
          title="La Grande plaine de Kurukan Fuga de 1235"
          image={kurukanFugaImg}
          alt="Plaine de Kurukan Fuga"
        >
          <p>
            La plaine de Kurukan Fuga, située au Mali, est un lieu chargé d'histoire et de symboles pour
            les peuples d'Afrique de l'Ouest. C'est sur cette vaste étendue que, selon la tradition orale,
            la Charte de Kurukan Fuga fut proclamée au XIIIᵉ siècle par Soundiata Keïta, fondateur de
            l'Empire du Mali. Cette charte, considérée comme l'une des premières déclarations des droits
            humains, établissait des principes de justice, de paix et de cohésion sociale qui ont influencé
            toute la région.
          </p>
          <p>
            Le premier édifice réalisé par Amadou Toumani Touré, ancien président du Mali, sur cette plaine
            historique est un monument commémoratif en l'honneur de la Charte de Kurukan Fuga. Ce monument,
            érigé pour célébrer l'héritage culturel et politique de l'Empire du Mâli, symbolise la
            continuité des valeurs de paix, de dialogue et de gouvernance juste prônées par Soundiata
            Keita. Il sert également à rappeler l'importance de la tradition orale et de la mémoire
            collective dans la construction de l'identité malienne et ouest-africaine.
          </p>
          <p>
            La plaine de Kurukan Fuga, avec son monument, est aujourd'hui un site de pèlerinage culturel et
            historique, attirant des chercheurs, des leaders traditionnels et des visiteurs désireux de
            comprendre les racines de la civilisation mandingue. Elle incarne un message universel de
            tolérance et de coexistence, rappelant au monde l'importance de préserver et de transmettre ce
            patrimoine immatériel pour les générations futures.
          </p>
        </Section>

        <Section title="La Charte du Mandé" image={charteMandeImg} alt="Charte du Mandé">
          <p>
            La charte du Manden, charte du Mandé, ou encore, en langue malinké, <em>Manden siguikan</em>,
            est la transcription d'un contenu oral, lequel remonterait au règne du premier souverain
            Soundiata Keita qui vécut de 1190 à 1255. Il existe deux textes de la charte, provenant des
            travaux menés à partir des années 1970 par Wa Kamissoko et Youssouf Tata Cissé : le Serment des
            sages, qui remonterait à 1222, et la Charte de Kouroukan Fouga, qui remonterait à 1236, et
            aurait été solennellement proclamée le jour de l'intronisation de Soundjata Keita comme
            empereur du Mâli. Le premier discours serait l'inspirateur du second.
          </p>
          <p>
            La charte du Manden est considérée par les Mandenkas (peuples qui ont en commun la langue
            mandingue) comme l'une des plus anciennes références concernant les droits fondamentaux. Sa
            reconnaissance par l'UNESCO, qui l'a inscrite en 2009 sur la liste du patrimoine culturel
            immatériel, assoit sa valeur juridique et sa portée universelle.
          </p>
          <p>
            Œuvre de lettrés, ce texte en forme de serment est connu dans deux versions : l'une datée de
            1222 et comportant sept chapitres — le Serment des chasseurs — l'autre de 1236 et comportant
            quarante-quatre articles — la Charte de Kouroukan Fouga. Ces deux versions ont été
            retranscrites à partir de travaux conduits depuis les années 1960 auprès de griots
            dépositaires de ces récits, appartenant en particulier à la confrérie des chasseurs.
          </p>
        </Section>

        <Ornament className="my-16" />

        <div className="text-center">
          <Link
            to="/patrimoine"
            className="inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.3em] uppercase bg-burgundy-deep text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors"
          >
            <ArrowLeft size={14} /> Retour au Patrimoine
          </Link>
        </div>
      </article>
    </>
  );
}
