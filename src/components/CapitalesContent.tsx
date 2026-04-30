import { GoldRule } from "@/components/Ornament";
import tombouctouHero from "@/assets/capitales/tombouctou-hero.webp";
import nianiImg from "@/assets/capitales/niani.jpg";
import dakadjalanImg from "@/assets/capitales/dakadjalan.png";
import kouroussaImg from "@/assets/capitales/kouroussa.jpg";
import kangaba1 from "@/assets/capitales/kangaba-1.jpg";
import kangaba2 from "@/assets/capitales/kangaba-2.jpg";

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="text-center mb-10">
      {eyebrow && (
        <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep text-balance">
        {title}
      </h2>
      <GoldRule className="mt-5" />
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif text-lg leading-[1.85] text-foreground/90 space-y-6 text-justify">
      {children}
    </div>
  );
}

function PullQuote({
  children,
  cite,
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <figure className="my-10 border-l-4 border-gold pl-6 py-2">
      <blockquote className="font-serif italic text-xl text-burgundy-deep leading-relaxed">
        « {children} »
      </blockquote>
      {cite && (
        <figcaption className="mt-3 font-display text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}

export function CapitalesContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={tombouctouHero}
          alt="Tombouctou vue depuis une terrasse, gravure de Heinrich Barth, 1858"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/55 via-burgundy-deep/40 to-burgundy-deep/85" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory animate-fade-up">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            Patrimoine & Histoire
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-balance max-w-5xl leading-tight">
            Les Capitales de l'Empire
          </h1>
          <p className="mt-5 max-w-2xl font-serif italic text-ivory/90">
            Études historique, archéologique et critique
          </p>
          <GoldRule className="mt-6" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Prose>
            <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-burgundy">
              L'Empire du Mâli, né au XIII<sup>e</sup> siècle après la victoire décisive de
              Soundjata Keita à Kirina en 1235, constitue l'un des modèles les plus aboutis
              d'organisation impériale en Afrique de l'Ouest. S'étendant du fleuve Sénégal au
              Niger, jusqu'aux confins du Sahara, il est resté pendant des siècles un centre
              névralgique du commerce transsaharien, de l'érudition islamique et de la
              diplomatie africaine.
            </p>
            <p>
              Si ses contributions civilisationnelles sont bien établies, la question de ses
              capitales successives reste débattue, oscillant entre la tradition orale, les
              récits arabes médiévaux et les recherches archéologiques modernes.
            </p>
          </Prose>
        </div>
      </section>

      {/* I. KANGABA BERCEAU */}
      <section className="py-16 px-6 bg-secondary/30 border-y border-gold/20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="I." title="Kangaba : berceau dynastique et capitale fondatrice" />
          <Prose>
            <p>
              Située dans la région actuelle de Koulikoro, au sud-ouest du Mali, Kangaba s'impose
              comme le noyau originel du Mandé historique. Elle est considérée par l'ensemble
              des traditions orales mandingues comme la terre d'origine de la dynastie Keita.
              C'est là que les ancêtres de Soundjata Keita, notamment les rois Nare Maghann
              Konaté et Dankaran Toumani, exerçaient un pouvoir sur un ensemble de villages
              structurés autour de valeurs lignagères, spirituelles et sociales.
            </p>
            <p>
              Dans ce contexte, le pouvoir n'était pas centralisé mais partagé selon une
              hiérarchie sociale bien définie, où les <em>horon</em> (nobles de sang) dominaient
              un système basé sur l'interdépendance des castes. Les <em>nyamakala</em>,
              détenteurs du savoir ésotérique, artisanal ou musical (comme les griots, forgerons
              ou tisserands), jouaient un rôle essentiel dans la transmission des connaissances
              et la cohésion sociale.
            </p>
            <p>
              La légitimité impériale de Soundjata Keita prend racine à Kangaba, qui apparaît
              comme la première capitale politique et spirituelle du Mandé. Elle fut également
              le théâtre du célèbre <strong>Kurukan Fuga</strong>, grande assemblée fondatrice
              convoquée en 1236 après la victoire de Kirina. Selon les travaux de Youssouf Tata
              Cissé et Wa Kamissoko, ce congrès aurait établi une charte de gouvernement — la
              Charte du Mandé — codifiant des principes de justice, de liberté individuelle, de
              solidarité entre les communautés et de gestion équitable du pouvoir.
            </p>
          </Prose>

          <PullQuote cite="Cissé & Kamissoko, 1991, p. 45">
            Kangaba, où fut rédigée la Charte du Mandé, devient à ce titre une capitale morale
            et politique de l'empire naissant.
          </PullQuote>

          <Prose>
            <p>
              En ce sens, Kangaba n'est pas seulement un lieu géographique : elle incarne une
              capitale idéologique, associée à l'identité originelle de l'empire et à ses
              fondements éthiques. Même après le déplacement de la capitale impériale vers
              d'autres villes stratégiques telles que Niani, pour des raisons économiques et
              militaires (notamment la proximité des mines d'or du Bouré et l'accès aux grandes
              routes commerciales transsahariennes), Kangaba demeura un sanctuaire dynastique.
            </p>
            <p>
              Elle joua ce rôle en particulier lors des périodes de crise ou de transition
              dynastique. Plusieurs souverains, confrontés à des troubles ou à la perte de
              légitimité, se repliaient à Kangaba pour s'y faire réinvestir symboliquement ou
              chercher la bénédiction des anciens. Elle conserva aussi une fonction
              cérémonielle, notamment pour les rites de succession et de purification.
            </p>
            <p>
              Enfin, Kangaba représente aujourd'hui un haut lieu de mémoire pour les peuples du
              Mandé. Elle continue d'être associée aux grands mythes fondateurs et à la mémoire
              du règne de Soundjata Keita, perçu comme le garant de l'unité, de la justice
              sociale et de la souveraineté africaine face à la fragmentation politique des
              royaumes.
            </p>
          </Prose>
        </div>
      </section>

      {/* II. NIANI */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="II." title="Niani : capitale impériale et centre du pouvoir" />
          <Prose>
            <p>
              Située dans l'actuelle préfecture de Kouroussa, en Haute-Guinée, Niani s'impose
              comme la capitale la plus emblématique de l'Empire du Mâli à son apogée, notamment
              sous le règne de Mansa Moussa (1312-1337). Alors que Kangaba incarne les origines
              mythiques et le socle spirituel de l'Empire, Niani en représente le déploiement
              concret, l'organisation impériale à son sommet.
            </p>
            <p>
              La ville est décrite avec une précision rare par Ibn Battûta, grand voyageur
              marocain, qui y séjourna entre 1352 et 1353. Il en fait le portrait d'un centre
              raffiné et bien gouverné :
            </p>
          </Prose>

          <PullQuote cite="Ibn Battûta, Rihla, 1353">
            Une ville bien organisée où la justice est rendue avec équité.
          </PullQuote>

          <Prose>
            <p>
              Cette observation est corroborée par des éléments matériels issus de plusieurs
              campagnes archéologiques, notamment celles dirigées entre les années 1960 et 1980
              par Djibril Tamsir Niane et l'équipe de l'IFAN (Institut Fondamental d'Afrique
              Noire). Ces travaux ont permis de révéler une trame urbaine cohérente et
              organisée, comprenant :
            </p>
          </Prose>

          <ul className="mt-6 space-y-3 font-serif text-lg text-foreground/90 list-none">
            {[
              "des fondations de bâtiments en banco, suggérant une architecture planifiée à base de matériaux locaux ;",
              "des outils métalliques et artefacts témoignant d'un artisanat de haut niveau, probablement lié à la cour impériale ;",
              "des fragments de dirhams arabes, indiquant une insertion directe de la ville dans le réseau commercial islamique transsaharien ;",
              "des vestiges de mosquées construites selon un plan soudano-sahélien, confirmant le rôle religieux et islamique de la ville.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-gold font-display mt-1">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <figure className="my-12">
            <img
              src={nianiImg}
              alt="Vestiges et représentation de Niani, capitale de l'Empire du Mâli"
              className="w-full h-auto shadow-elegant border border-gold/20"
            />
            <figcaption className="mt-3 text-center font-display text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">
              Niani — Capitale de l'apogée impériale
            </figcaption>
          </figure>

          <Prose>
            <p>
              Niani occupait une position stratégique exceptionnelle, sur la rive gauche du
              fleuve Sankarani, affluent du Niger. Ce site la plaçait à la croisée de plusieurs
              routes commerciales vitales : l'axe de l'or du Bouré, les pistes caravanières en
              direction du Sahara, ainsi que les voies fluviales menant vers Djenné, Gao et
              Tombouctou. Grâce à cet emplacement, elle devint non seulement un carrefour
              d'échanges, mais aussi un centre d'administration impériale, structuré autour du
              trésor royal, de juridictions islamiques et de quartiers spécialisés.
            </p>
            <p>
              En tant que capitale, Niani centralisait le pouvoir politique, abritant la cour
              impériale, les scribes, les conseillers, et des représentants des différentes
              provinces. Le modèle de gouvernement qui s'y exerçait était fondé sur une synthèse
              entre les principes du Mandé (Kurukan Fuga) et l'apport des lettrés musulmans
              formés dans les centres savants sahéliens. C'est dans cette ville que le prestige
              impérial du Mâli s'est affirmé auprès des puissances voisines, comme en
              témoignent les récits des géographes arabes Al-Umari ou Al-Maqrizi, qui relatent
              les ambassades reçues par Mansa Moussa et la gestion rigoureuse de l'État.
            </p>
          </Prose>

          <PullQuote cite="Niane, 1975, p. 93">
            Niani fut le cœur battant du Mâli impérial, au même titre que Rome l'était pour
            l'Empire romain.
          </PullQuote>

          <Prose>
            <p>
              Niani symbolise ainsi l'union harmonieuse entre tradition mandingue et
              islamisation politique, entre puissance économique et culture de la justice. Elle
              fut la vitrine d'un empire cosmopolite et respecté, dont les institutions
              rayonnaient jusqu'aux confins du monde musulman médiéval.
            </p>
            <p>
              Même si, au fil des siècles, les troubles politiques et l'éclatement de l'Empire
              conduisirent à son déclin, la mémoire de Niani reste vivace dans les traditions
              orales mandingues. Elle incarne, dans l'imaginaire collectif, la grandeur d'un
              empire qui a su conjuguer administration, commerce, foi et rayonnement
              intellectuel.
            </p>
          </Prose>
        </div>
      </section>

      {/* III. DAKADJALAN & CAPITALES PROVISOIRES */}
      <section className="py-16 px-6 bg-secondary/30 border-y border-gold/20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="III."
            title="Dakadjalan, Kouroussa, Diaghan : un pouvoir en mouvement"
          />
          <Prose>
            <p>
              Contrairement à une vision figée du pouvoir impérial, l'Empire du Mâli, à l'instar
              de nombreuses structures politiques africaines précoloniales, reposait sur une
              mobilité stratégique du centre de décision. Si Niani constituait le cœur politique
              et administratif de l'empire, celui-ci s'appuyait également sur un réseau de
              résidences secondaires et de centres régionaux que l'on peut qualifier de
              capitales provisoires ou saisonnières.
            </p>
            <p>
              Parmi ces sites, <strong>Dakadjalan</strong> occupe une place particulière dans la
              mémoire historique mandingue. Située dans les environs de Kangaba, cette cité est
              associée à la jeunesse initiatique de Soundjata Keita. Selon la tradition orale,
              rapportée par les <em>djeli</em> (griots), c'est à Dakadjalan que le futur
              fondateur de l'empire aurait reçu l'enseignement des anciens, les secrets du
              pouvoir, et les alliances spirituelles qui allaient nourrir sa quête impériale. Le
              site est donc sacralisé non seulement comme un lieu de passage et de formation,
              mais comme une matrice du leadership impérial.
            </p>
          </Prose>

          <PullQuote cite="Tradition orale mandingue">
            Dakadjalan, c'est là où Soundjata a appris à devenir roi, à lire les signes du
            destin et à écouter les voix des anciens.
          </PullQuote>

          <div className="my-12 grid gap-6 md:grid-cols-2">
            <figure>
              <img
                src={dakadjalanImg}
                alt="Site de Dakadjalan, lieu d'initiation de Soundjata Keita"
                className="w-full h-64 object-cover shadow-elegant border border-gold/20"
              />
              <figcaption className="mt-3 text-center font-display text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                Dakadjalan
              </figcaption>
            </figure>
            <figure>
              <img
                src={kouroussaImg}
                alt="Région de Kouroussa, l'une des capitales provisoires"
                className="w-full h-64 object-cover shadow-elegant border border-gold/20"
              />
              <figcaption className="mt-3 text-center font-display text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                Kouroussa
              </figcaption>
            </figure>
          </div>

          <Prose>
            <p>
              De manière plus large, les villes telles que <strong>Kouroussa</strong>,{" "}
              <strong>Diaghan</strong>, <strong>Siby</strong> ou encore <strong>Dougou</strong>{" "}
              servaient de bases logistiques pour les déplacements de l'empereur (Mansa) et de
              sa cour, notamment lors de campagnes militaires, de tournées d'inspection ou de
              grandes cérémonies religieuses. Ces villes jouaient un rôle de relais du pouvoir,
              où s'établissait temporairement le centre de commandement. À chaque déplacement,
              le Mansa était accompagné d'un cortège structuré : les <em>djâtigui</em> (maîtres
              de cérémonie et hôtes officiels), les marabouts, les conseillers, les généraux et
              les gardiens du fétiche impérial.
            </p>
          </Prose>

          <PullQuote cite="Conrad, 1994">
            Les empereurs Keita se déplaçaient avec leurs djatigui, marabouts et chefs de
            guerre, installant le pouvoir là où il était requis.
          </PullQuote>

          <Prose>
            <p>Cette forme de gouvernement semi-itinérant assurait plusieurs fonctions complémentaires :</p>
          </Prose>

          <ul className="mt-6 space-y-3 font-serif text-lg text-foreground/90 list-none">
            {[
              "Exercer une présence directe sur les régions éloignées, consolidant l'autorité impériale dans les provinces ;",
              "Faciliter la mobilisation rapide des armées en cas de menaces ou de rébellions ;",
              "Renforcer le lien rituel entre le souverain et les territoires sacrés du Mandé, où se célébraient les rites d'alliance, de purification ou d'initiation ;",
              "Permettre une gestion souple du calendrier islamique et des fêtes traditionnelles, en fonction des contextes agricoles, religieux ou climatiques.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-gold font-display mt-1">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Prose>
            <p className="mt-8">
              Ces capitales alternatives étaient parfois érigées autour de grands campements
              impériaux, faits de tentes somptueuses, de palais temporaires en banco et de
              lieux de prière mobiles. Leur architecture était adaptée à l'environnement et
              souvent éphémère, ce qui explique la rareté des traces archéologiques en dehors
              de quelques fragments de céramique, restes de fours ou fondations isolées.
            </p>
            <p>
              La mémoire de ces capitales mouvantes reste préservée par les traditions orales,
              souvent moins connues que celles de Niani ou Kangaba, mais tout aussi essentielles
              à la compréhension de la souplesse politique et symbolique du pouvoir malien.
              Elle révèle une vision du pouvoir non territorialisée, enracinée dans les hommes,
              les symboles et les alliances, plus que dans une capitale unique.
            </p>
            <p>
              En somme, le modèle impérial malien reposait sur une centralité dynamique, où la
              ville ne suffisait pas à incarner le pouvoir : celui-ci se déplaçait avec le
              Mansa, ses signes sacrés, et son entourage. Ce système faisait du Mâli un empire
              organique, capable d'adaptation, de rayonnement régional, et de résilience en
              période de crise.
            </p>
          </Prose>
        </div>
      </section>

      {/* IV. KANGABA ULTIME CAPITALE */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="IV."
            title="Kangaba : ultime capitale et sanctuaire de la mémoire impériale"
          />
          <Prose>
            <p>
              Située dans la région actuelle de Koulikoro, au sud-ouest du Mali, Kangaba incarne
              la dernière capitale historique de l'Empire du Mâli. Elle marque la fin d'un
              cycle impérial et l'ancrage d'un pouvoir désormais plus symbolique, rituel et
              lignager, après les siècles de rayonnement militaire et économique que connut
              l'empire depuis ses capitales précédentes, telles que Niani.
            </p>
            <p>
              Le déclin progressif de Niani, scellé brutalement par le sac de la ville par les
              armées du royaume bambara de Ségou en 1670, obligea les autorités impériales à se
              replier vers le Mandé profond, berceau originel de la dynastie des Keita. C'est
              ainsi que Kangaba, ville ancienne déjà importante à l'époque de Soundjata Keita,
              retrouva une place centrale, non pas tant par sa puissance matérielle, mais par
              sa valeur symbolique et mémorielle.
            </p>
            <p>
              Ce retour aux sources ne fut pas un simple refuge stratégique. Il s'agissait d'une
              réaffirmation identitaire, d'un recentrage du pouvoir sur ses fondations
              spirituelles et culturelles. Dans un contexte de fragmentation politique, les
              Keita conservèrent leur autorité en se repliant sur un noyau de traditions
              orales, de liens sacrés et de continuités dynastiques. Kangaba devint le cœur
              rituel et généalogique de l'Empire du Mâli, perpétuant la légitimité impériale
              malgré la perte de territoires.
            </p>
            <p>
              Parmi les lieux les plus emblématiques de cette continuité, le{" "}
              <strong>Kamablon</strong> occupe une place unique. Cette case à palabres
              circulaire, édifiée en 1653 en banco, n'est pas seulement un édifice traditionnel :
              elle est le théâtre d'un rituel cyclique hautement symbolique. Tous les sept ans,
              une cérémonie de reconstruction du Kamablon réunit les lignages royaux, les
              griots (<em>djéliw</em>), les chefs coutumiers et les notables du Mandé. Ce moment
              solennel, à la fois politique et spirituel, consacre l'alliance entre la mémoire,
              la parole, et la légitimité.
            </p>
          </Prose>

          <PullQuote cite="Témoignage de griot recueilli par l'UNESCO, 2009">
            Le Kamablon n'est pas seulement une case : c'est la mémoire vivante du Mandé. À
            travers sa reconstruction, on reconstruit l'ordre ancien, on rappelle la promesse
            de Soundjata.
          </PullQuote>

          <div className="my-12 grid gap-6 md:grid-cols-2">
            <figure>
              <img
                src={kangaba1}
                alt="Kangaba — sanctuaire du Kamablon"
                className="w-full h-72 object-cover shadow-elegant border border-gold/20"
              />
            </figure>
            <figure>
              <img
                src={kangaba2}
                alt="Kangaba — cérémonie et patrimoine immatériel"
                className="w-full h-72 object-cover shadow-elegant border border-gold/20"
              />
            </figure>
          </div>

          <Prose>
            <p>
              Inscrite sur la Liste représentative du patrimoine culturel immatériel de
              l'humanité par l'UNESCO en 2009, cette cérémonie témoigne de la capacité de
              l'élite impériale à transformer la perte de pouvoir matériel en pouvoir mémoriel
              et rituel, assurant ainsi la résilience de l'identité impériale au fil des
              siècles.
            </p>
            <p>
              Kangaba est donc plus qu'une capitale de repli : elle est devenue un sanctuaire
              dynastique, un conservatoire vivant où se croisent l'histoire impériale, la
              tradition orale et la spiritualité mandingue. Elle illustre la manière dont les
              institutions africaines précoloniales surent s'adapter aux ruptures historiques,
              en s'appuyant sur des mécanismes symboliques puissants pour maintenir la
              continuité d'un ordre sacré, même après l'effondrement de ses structures
              politiques.
            </p>
            <p>
              Ainsi, Kangaba prolonge l'Empire du Mâli au-delà de sa chute, en le transformant
              en mémoire incarnée, en filiation vivante, et en territoire de légitimation pour
              ceux qui, aujourd'hui encore, s'en réclament.
            </p>
          </Prose>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-20 px-6 bg-burgundy-deep text-ivory">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">Conclusion</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-ivory text-balance">
              Une pluralité capitale pour une souveraineté d'envergure
            </h2>
            <GoldRule className="mt-5" />
          </div>

          <div className="font-serif text-lg leading-[1.85] text-ivory/90 space-y-6 text-justify">
            <p>
              L'Empire du Mâli ne se résume pas à une capitale unique, figée dans le temps ou
              l'espace. Au contraire, il se distingue par une multiplicité de centres
              politiques, spirituels et logistiques, qui reflètent la richesse et la complexité
              de son organisation impériale. Cette diversité géographique fut l'expression d'une
              souveraineté malléable, capable de s'adapter aux cycles dynastiques, aux flux
              commerciaux, aux périls militaires et aux exigences rituelles.
            </p>
            <p>
              <strong className="text-gold">Niani</strong>, capitale de l'apogée impériale,
              structurée, cosmopolite et décrite par les voyageurs arabes comme un centre
              rayonnant de civilisation, incarne le pouvoir organisé et la centralité politique.
              Mais ce pouvoir ne saurait se comprendre sans{" "}
              <strong className="text-gold">Kangaba</strong>, berceau mémoriel, capitale
              d'origine et de repli, là où la légitimité prend racine dans la tradition orale,
              le lignage et les rituels ancestraux.
            </p>
            <p>
              Entre ces deux pôles gravitent des capitales saisonnières ou itinérantes —{" "}
              <em>Dakadjalan, Kouroussa, Diaghan</em> — qui démontrent une capacité unique à
              délocaliser le pouvoir sans en altérer la légitimité. Ce modèle de gouvernance
              souple, fondé sur un équilibre entre centre et périphérie, est l'un des fondements
              de la résilience impériale mandingue.
            </p>
          </div>

          <figure className="my-12 border-l-4 border-gold pl-6 py-2">
            <blockquote className="font-serif italic text-xl text-ivory leading-relaxed">
              « Gouverner, pour les Keita, ce n'était pas dominer un lieu fixe, mais incarner un
              ordre sacré capable de se déplacer avec la caravane, le griot, le marabout et le
              sabre. »
            </blockquote>
          </figure>

          <div className="font-serif text-lg leading-[1.85] text-ivory/90 space-y-6 text-justify">
            <p>
              Loin d'un pouvoir autoritaire centralisé, l'organisation mandingue repose sur une
              intelligence territoriale qui articule la parole (<em>djeliya</em>), la foi (islam
              sunnite et traditions), la mémoire (rituels lignagers), et la mobilité stratégique.
              C'est ce tissage complexe entre institutions visibles et fondations invisibles qui
              fit de l'Empire du Mâli un modèle unique dans l'histoire mondiale.
            </p>
            <p>
              À travers cette pluralité capitale, le Mandé impérial incarne une forme
              d'universalité enracinée : un empire sans muraille, où la royauté se conjugue avec
              l'oralité, la tradition avec l'adaptation, et la grandeur avec la fidélité à une
              origine sacrée.
            </p>
          </div>
        </div>
      </section>

      {/* BIBLIOGRAPHIE */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Sources" title="Bibliographie sélective" />
          <ul className="mt-8 space-y-4 font-serif text-base text-foreground/85 list-none">
            {[
              "Ibn Battûta. Rihla (1353), trad. C. Defrémery & B. Sanguinetti.",
              "Niane, D. T. (1975). Recherches sur l'Empire du Mâli. IFAN.",
              "Levtzion, N. (1973). Ancient Ghana and Mali. Methuen.",
              "Cissé, Y. T., & Kamissoko, W. (1991). La grande geste du Mali. Karthala.",
              "Conrad, D. C. (1994). Epic Ancestors of the Sunjata Era. Journal of African History.",
              "Tandia, A. (2002). Mémoire impériale et enjeux identitaires dans le Mandé. Université de Bamako.",
            ].map((ref, i) => (
              <li key={i} className="flex gap-4 border-b border-gold/15 pb-3">
                <span className="text-gold font-display text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="italic">{ref}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
