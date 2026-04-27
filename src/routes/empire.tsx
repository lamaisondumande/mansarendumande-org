import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule } from "@/components/Ornament";
import { HeroPlaceholder } from "@/components/ImagePlaceholder";
import assembleeMande from "@/assets/empire/assemblee-mande.jpg";
import carteMali from "@/assets/empire/carte-mali.png";
import carteDetaillee from "@/assets/empire/carte-detaillee.png";

export const Route = createFileRoute("/empire")({
  head: () => ({
    meta: [
      { title: "L'Empire du Mâli ou Empire du Manden | La Maison du Mandé" },
      {
        name: "description",
        content:
          "Histoire de l'Empire du Mâli : ses débuts, son apogée sous Mansa Moussa, Tombouctou, son étendue territoriale, ses villes et son déclin.",
      },
      { property: "og:title", content: "L'Empire du Mâli ou Empire du Manden" },
      {
        property: "og:description",
        content:
          "Des origines mandingues à l'apogée de Mansa Moussa : l'histoire complète de l'un des plus vastes empires médiévaux du monde.",
      },
      { property: "og:image", content: assembleeMande },
      { name: "twitter:image", content: assembleeMande },
    ],
  }),
  component: EmpirePage,
});

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="text-center mb-10">
      {eyebrow && (
        <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
        {title}
      </h2>
      <GoldRule className="mt-5" />
    </div>
  );
}

function EmpirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={assembleeMande}
          alt="Assemblée constitutive de l'Empire du Mandé"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/60 via-burgundy-deep/40 to-burgundy-deep/85" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory animate-fade-up">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            Histoire & Civilisation
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-balance max-w-5xl leading-tight">
            L'Empire du Mâli ou Empire du Manden
          </h1>
          <div className="my-5 h-px w-24 bg-gold" />
          <p className="font-serif italic text-lg md:text-xl text-ivory/90 max-w-3xl">
            L'un des plus vastes et plus prospères empires du monde médiéval.
          </p>
        </div>
      </section>

      {/* LES DÉBUTS DU MÂLI */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Aux origines" title="Les débuts du Mâli" />
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              Depuis le Néolithique, la région soudanaise d'Afrique de l'Ouest est le lieu
              de développement de l'empire du Mâli. Il s'agissait à l'origine d'un petit
              royaume mandingue situé sur le cours supérieur du fleuve Niger. Cette région
              était privilégiée grâce aux crues du fleuve Niger, qui offraient des terres
              fertiles pour l'agriculture. Les Mandingues y pratiquaient la pêche et
              l'élevage.
            </p>
            <p>
              Au nord, l'empire du Ghana était en déclin aux XIᵉ et XIIᵉ siècles. L'empire
              Sosso s'en empara et imposa des restrictions commerciales à la région du Mâli,
              ce qui poussa les tribus mandingues autochtones à se rebeller. Soundjata Keita
              centralisa le gouvernement et maintint une diplomatie et une armée bien
              entraînée, ce qui conduisit à une expansion militaire massive.
            </p>
          </div>
        </div>
      </section>

      {/* APOGÉE */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="XIIIᵉ — XIVᵉ siècle" title="Apogée de l'Empire du Mâli" />
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              L'Empire du Mâli prospéra grâce au commerce et à sa situation privilégiée,
              entre les forêts tropicales du sud de l'Afrique de l'Ouest et les puissants
              califats musulmans d'Afrique du Nord. Les dirigeants maliens disposaient d'un
              triple revenu : ils taxaient le passage des marchandises, achetaient des
              marchandises et les revendaient à des prix bien plus élevés, et avaient accès
              à leurs propres précieuses ressources naturelles. Fait significatif, l'Empire
              du Mâli contrôlait les riches régions aurifères de Galam, Bambuk et Bure ;
              l'un des principaux échanges commerciaux était la poudre d'or contre le sel
              du Sahara.
            </p>
            <p>
              L'Empire du Mâli s'est principalement imposé grâce au commerce. Le contrôle
              et la taxation du commerce ont enrichi le trésor impérial et ont assuré
              l'existence de l'Empire du Mâli. Les matières premières les plus rentables
              échangées étaient l'or et le sel. D'abord extrait à Bambuk, sur un affluent
              du cours supérieur du fleuve Sénégal, l'or a été extrait à Bure, à la source
              du fleuve Niger. L'emplacement des mines d'or a changé à mesure que celles
              de l'ouest s'épuisaient et que d'autres sources étaient découvertes plus à
              l'est. Le Mansa (empereur) revendiquait toutes les pépites d'or, mais la
              poussière d'or était disponible pour le commerce.
            </p>
            <p>
              Le sel était extrait au plus profond du Sahara. On échangeait des plaques
              apportées à dos de chameaux sur les marchés de Tombouctou, Mopti et d'autres
              villes du fleuve Niger. De grandes caravanes de chameaux apportaient du sel,
              du fer, du cuivre, des tissus, des livres et des perles du nord et du
              nord-est. Ils les échangeaient contre de l'or, des noix de kola, de l'ivoire,
              du cuir, du caoutchouc et des esclaves du sud.
            </p>
            <p>
              Bien que le sel et la poussière d'or aient servi de monnaie au XIVᵉ siècle,
              les coquillages cauris de l'océan Indien ont été introduits comme monnaie
              d'échange. Leur utilisation a amélioré la collecte des impôts et les échanges
              de marchandises.
            </p>
            <p>
              Agissant comme intermédiaire commercial entre l'Afrique du Nord via le désert
              du Sahara et le fleuve Niger au sud, le Mâli exploitait le trafic d'or, de
              sel, de cuivre, d'ivoire et d'esclaves à travers l'Afrique de l'Ouest.
            </p>
            <p>
              L'Empire du Mâli s'est développé et a prospéré en monopolisant le commerce de
              l'or et en développant les ressources agricoles le long du fleuve Niger. Les
              marchands musulmans furent attirés par l'activité commerciale et convertirent
              les dirigeants maliens qui, à leur tour, répandirent l'Islam.
            </p>
            <p>
              L'empire du Mâli avait besoin d'un leadership fort pour assurer sa prospérité.
              Soundjata s'est imposé comme un grand chef religieux et laïc, revendiquant le
              lien le plus étroit et le plus direct avec les esprits de la terre et donc le
              gardien des ancêtres. Après Soundjata, la plupart des dirigeants du Mâli
              étaient musulmans, dont certains accomplissaient le hajj, l'un des plus
              célèbres étant Mansa Moussa, petit-fils d'une des sœurs de Soundjata. Cette
              fédération prospéra et se développa au cours du siècle suivant pour devenir
              l'un des empires les plus riches d'Afrique, dont la richesse allait étonner à
              la fois l'Europe et l'Arabie.
            </p>
          </div>
        </div>
      </section>

      {/* LES DIRIGEANTS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Souverains du Mandé" title="Les dirigeants du Mâli" />
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              L'empereur Abubakari II est peut-être l'un des rois les plus importants de
              l'empire du Mâli sur le plan historique. Les rares informations sur lui
              proviennent des griots, conteurs ouest-africains et conseillers de
              personnalités royales. Ils relatent une expédition maritime organisée par
              Abubakari, qui a suscité une vive controverse encore aujourd'hui.
            </p>
            <p>
              Le roi Abubakari rêvait d'explorer l'océan, contemplant souvent avec envie
              la mer qui bordait son royaume. Il pensait pouvoir trouver le bord de l'océan
              Atlantique. Il lança une expédition au-delà de l'Atlantique, mais l'un de ses
              généraux revint. Frustré, le roi Abubakari organisa une seconde expédition en
              1311, avec 2 000 navires au total, et 1 000 autres navires chargés de vivres
              pour lui et son équipage pendant deux ans.
            </p>
            <p>
              Plusieurs historiens pensent qu'Abubakari est arrivé dans ce qui est
              aujourd'hui Haïti en 1312. Ivan Van Sertima, dans son ouvrage{" "}
              <em>« Ils sont venus avant Colomb »</em>, donne une interprétation de ces
              événements basée sur le journal personnel de Christophe Colomb. Il ne
              retourna jamais dans son royaume, ce qui permit à Mansa Moussa d'accéder au
              trône.
            </p>
            <p>
              Mondialement connu pour sa richesse, <strong>Mansa Moussa</strong> est le roi
              le plus célèbre du Mâli. Durant son règne, de 1307 à 1337, il repoussa les
              frontières du Mâli jusqu'à leurs limites extrêmes. Le royaume comptait
              quatorze provinces dirigées par des gouverneurs ou des émirs, généralement
              des généraux célèbres. Des cheikhs gouvernaient les provinces berbères. Tous
              payaient un tribut à Moussa en or, chevaux et vêtements.
            </p>
            <p>
              En 1324, Mansa Musa, accompagné de 60 000 personnes, traversa le Sahara
              jusqu'au Caire, puis à La Mecque et à Médine, transportant de grandes
              quantités d'or.
            </p>
            <p>
              Il gouverna avec impartialité et un grand sens de la justice. Moussa établit
              des relations diplomatiques avec d'autres États africains, notamment le
              Maroc, avec lequel il échangea des ambassadeurs. Il fut sans doute surtout
              connu pour avoir fermement établi l'islam au Mâli, instaurant la paix,
              l'ordre et le commerce. Mansa Moussa initia l'envoi d'étudiants au Maroc et
              jeta les bases de ce qui deviendra plus tard la ville de Tombouctou, centre
              commercial et éducatif du Soudan occidental.
            </p>
          </div>
        </div>
      </section>

      {/* TOMBOUCTOU */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Joyau du Mandé" title="Tombouctou" />
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              Tombouctou était la ville la plus importante du royaume. Centre culturel et
              commercial, elle abritait l'une des premières universités d'Afrique
              subsaharienne et possédait une vaste bibliothèque riche en ouvrages
              provenant de Grèce et de Rome, entre autres. Tombouctou abritait également
              des mosquées pour le culte et la prière islamiques.
            </p>
            <p>
              Trois des plus anciennes mosquées d'Afrique de l'Ouest —{" "}
              <strong>Djinguereber, Sankoré et Sidi Yahia</strong> — y furent construites
              au cours du XIVᵉ et du début du XVᵉ siècle. À cette époque, l'islam dans la
              région n'était pas uniforme, sa nature variait d'une ville à l'autre. Le lien
              de Tombouctou avec la religion s'est renforcé grâce à son ouverture aux
              étrangers, qui a attiré les érudits religieux.
            </p>
          </div>
        </div>
      </section>

      {/* DÉCLIN */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Crépuscule" title="Déclin de l'empire du Mâli" />
          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              L'Empire du Mâli s'effondra lorsque plusieurs États, dont le Songhaï,
              proclamèrent et défendirent leur indépendance. Vers les années 1430, les
              dirigeants ne purent empêcher les rébellions d'éclater. Les Touaregs reprirent
              leur ville de Tombouctou en 1433, et en 1500, l'Empire du Mâli ne comprenait
              plus qu'une petite partie du territoire.
            </p>
            <p>
              L'empire du Mâli atteignit son apogée au XIVᵉ siècle, mais sa puissance et sa
              renommée dépendaient du pouvoir personnel du dirigeant. Après la mort de
              Mansa Moussa et de son frère Mansa Sulayman, Tombouctou fut pillée et
              incendiée. Plusieurs États se révoltèrent et prirent leur indépendance,
              notamment les Touaregs, les Toucouleurs et les Wolofs. Les Mossis attaquèrent
              les caravanes commerciales et les garnisons militaires du sud. À l'est, les
              Songhaïs gagnèrent en puissance. Le Mâli survécut encore 200 ans, mais ses
              heures de gloire étaient révolues.
            </p>
            <p>
              Au XVᵉ siècle, le Mâli perdit son contrôle sur le Sahel et se retrouva coupé
              de tout contact direct avec les routes transsahariennes et le monde musulman.
              La capitale déclina et la communauté musulmane étrangère la déserta. Vers
              1500, l'empire du Mâli n'était plus que le début d'un territoire malinké. Au
              XVIIᵉ siècle, le Mâli était divisé en plusieurs petites chefferies
              indépendantes avec plusieurs membres de la famille Keita occupants des
              positions d'autorités au sein des différentes communautés jusqu'à nos jours.
            </p>
          </div>
        </div>
      </section>

      {/* APOGÉE TERRITORIALE */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="XIVᵉ siècle"
            title="L'Apogée territoriale de l'Empire du Mâli"
          />

          <div className="grid md:grid-cols-2 gap-10 mb-14 max-w-4xl mx-auto">
            <figure className="text-center">
              <img
                src={carteMali}
                alt="Carte de l'étendue de l'Empire du Mâli"
                className="w-full h-auto border-4 border-burgundy-deep shadow-[0_20px_40px_-15px_hsl(var(--burgundy-deep)/0.6)] object-contain bg-ivory"
              />
              <figcaption className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-burgundy-deep">
                Étendue de l'Empire du Mâli
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={carteDetaillee}
                alt="Carte détaillée du Mâli"
                className="w-full h-auto border-4 border-burgundy-deep shadow-[0_20px_40px_-15px_hsl(var(--burgundy-deep)/0.6)] object-contain bg-ivory"
              />
              <figcaption className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-burgundy-deep">
                Le Mâli au XIVᵉ siècle
              </figcaption>
            </figure>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              À son apogée, sous les règnes de Mansa Musa (1312–1337) et de ses successeurs
              immédiats, l'Empire du Mâli s'étendait sur une superficie estimée entre{" "}
              <strong>1,1 et 1,5 million de kilomètres carrés</strong>, ce qui en faisait
              l'un des plus vastes empires du monde médiéval. Il couvrait alors une grande
              partie de l'Afrique de l'Ouest, englobant tout ou partie des territoires
              correspondant aux États modernes suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li><strong>Mâli</strong> — cœur historique et politique de l'empire</li>
              <li><strong>Sénégal</strong> — régions orientales, notamment le Takrur</li>
              <li><strong>Guinée</strong> — particulièrement la Haute-Guinée et la région de Kankan</li>
              <li><strong>Guinée-Bissau</strong> — zones frontalières et routes commerciales</li>
              <li><strong>Gambie</strong> — contrôle économique du fleuve Gambie</li>
              <li><strong>Mauritanie</strong> — notamment le sud et les régions caravanières comme Oualata et Tichitt</li>
              <li><strong>Burkina Faso</strong> — ouest et centre, notamment Bobo-Dioulasso et les plaines de Banfora</li>
              <li><strong>Côte d'Ivoire</strong> — nord, jusqu'au pays Sénoufo</li>
              <li><strong>Niger</strong> — ouest du pays, incluant la vallée du Dallol Bosso</li>
              <li><strong>Tchad</strong> — très marginalement, à l'extrême est, par influence sur des zones transsahariennes</li>
              <li><strong>Algérie</strong> — extrême sud, notamment le Hoggar via les routes caravanières</li>
              <li><strong>Nigeria</strong> — zones d'influence commerciale au nord-est, notamment les cités haoussa comme Kano et Zaria</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VILLES & CENTRES DU POUVOIR */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Administration impériale"
            title="Principales villes et centres du pouvoir"
          />
          <p className="text-foreground/85 leading-relaxed text-[1.05rem] mb-10 max-w-3xl mx-auto text-center">
            L'administration impériale était articulée autour de capitales, de grandes
            cités religieuses et commerciales, et de centres régionaux.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Niani", "Mâli", "Capitale politique et administrative de l'empire"],
              ["Tombouctou", "Mâli", "Haut lieu de la culture islamique et du commerce transsaharien"],
              ["Djenné", "Mâli", "Centre d'apprentissage, artisanat et d'échanges"],
              ["Gao", "Mâli", "Ancienne ville conquise temporairement avant l'expansion songhaï"],
              ["Kangaba", "Mâli", "Berceau dynastique des Keita, centre historique mandingue"],
              ["Walata (Oualata)", "Mauritanie", "Poste avancé du commerce transsaharien avec le Maghreb"],
              ["Kumbi Saleh", "Mauritanie", "Capitale de l'ancien Ghana, intégrée au Mâli sous Sundjata"],
              ["Kita", "Mâli", "Ville mandingue stratégique sur les routes de l'ouest"],
              ["Ségou", "Mâli", "Centre politique bambara ultérieur (dynastie des Coulibaly), zone intégrée"],
              ["Niamey (région)", "Niger", "Zone d'influence commerciale au sud-ouest nigérien"],
              ["Bobo-Dioulasso", "Burkina Faso", "Carrefour entre Mandé, Mossi et zones forestières"],
              ["Banjul (région)", "Gambie", "Contrôle stratégique des embouchures fluviales du commerce"],
            ].map(([ville, pays, role]) => (
              <div
                key={ville}
                className="border border-gold/30 bg-ivory p-5 hover:border-gold transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg text-burgundy-deep">{ville}</h3>
                  <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-gold">
                    {pays}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VILLES SECONDAIRES */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Sources historiques & traditions"
            title="Villes secondaires et sites régionaux"
          />
          <p className="text-foreground/85 leading-relaxed text-[1.05rem] mb-10 text-center">
            Outre les capitales et métropoles, de nombreuses autres localités ont été
            mentionnées dans les sources historiques, les traditions orales ou
            l'archéologie.
          </p>

          <div className="space-y-6">
            {[
              ["Guinée", "Kankan, Kouroussa, Siguiri, Niangassola, Macenta"],
              [
                "Mâli",
                "Banamba, Siby, Kolokani, Dioïla, Koutiala, Zégoua, Goundam, Diré, Ténenkou, Mopti, Douentza, Konna, Koro",
              ],
              ["Mâli / Guinée", "Kourémalé (ville frontalière)"],
              ["Burkina Faso", "Djibo, Dédougou, Banfora"],
              ["Niger", "Zinder (zone d'influence commerciale)"],
              ["Mauritanie", "Tichitt (carrefour caravanier)"],
              ["Nigeria", "Kano et Zaria (par interaction avec les royaumes haoussa)"],
            ].map(([region, villes]) => (
              <div key={region} className="border-l-4 border-gold pl-5 py-2">
                <p className="font-display text-xs tracking-[0.25em] uppercase text-burgundy-deep mb-1">
                  {region}
                </p>
                <p className="text-foreground/85 leading-relaxed">{villes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSEAUX COMMERCIAUX */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Or, sel, ivoire"
            title="Réseaux commerciaux et routes transsahariennes"
          />
          <p className="text-foreground/85 leading-relaxed text-[1.05rem] mb-8">
            L'Empire du Mâli tirait sa richesse d'un contrôle étroit des grandes routes du
            commerce transsaharien, consolidant son statut économique au niveau continental.
            Parmi les circuits majeurs :
          </p>

          <ul className="space-y-5">
            {[
              [
                "Route de l'or",
                "Des mines de Bambouk, Bouré et Galam vers les ports de l'Afrique du Nord (Tunis, Fès, Le Caire).",
              ],
              [
                "Route du sel",
                "Depuis Taghaza et Taoudeni vers le sud du fleuve Niger.",
              ],
              [
                "Route du cuivre et de l'ivoire",
                "Par échanges avec les régions forestières du sud.",
              ],
              [
                "Échanges atlantiques indirects",
                "Via le fleuve Sénégal et la Gambie, points de contact avec l'océan Atlantique avant l'ère coloniale.",
              ],
              [
                "Trafic caravanier saharien",
                "Impliquant les cités de Walata, Tichitt, Awdaghost et Touat, jusqu'aux centres maghrébins.",
              ],
            ].map(([titre, desc]) => (
              <li key={titre} className="border border-gold/30 bg-ivory p-5">
                <p className="font-display text-sm tracking-[0.2em] uppercase text-gold mb-2">
                  {titre}
                </p>
                <p className="text-foreground/85 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif italic text-foreground/80 text-center">
            Les produits échangés comprenaient : or, sel, cuivre, ivoire, tissus, épices,
            noix de kola, cuir et esclaves.
          </p>
        </div>
      </section>

      {/* PROVINCES */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Annexe"
            title="Provinces et territoires administrés"
          />
          <p className="text-foreground/85 leading-relaxed text-[1.05rem] mb-8 text-center">
            L'empire était divisé en provinces gouvernées par des <strong>Farbas</strong>,
            représentants directs du Mansa. Parmi les territoires notables :
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Wagadou (ancien empire du Ghana)",
              "Kasa (en Sénégambie)",
              "Diara (région sahélienne)",
              "Mema (nord-ouest du Mâli)",
              "Bambouk & Bouré (régions aurifères)",
              "Takrur et Djollof (Sénégal oriental)",
              "Songhaï (avant la sécession au XVᵉ siècle)",
            ].map((p) => (
              <li
                key={p}
                className="border-l-2 border-gold pl-4 py-2 text-foreground/85"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LISTE EXHAUSTIVE */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Géographie historique"
            title="Liste structurée des entités territoriales"
          />
          <p className="text-foreground/85 leading-relaxed text-[1.05rem] mb-12 max-w-3xl mx-auto text-center">
            En s'appuyant sur les recherches historiques, les récits de voyageurs médiévaux
            tels qu'<strong>Ibn Battûta</strong> et <strong>Al-Umari</strong>, ainsi que sur
            les traditions orales mandingues, voici une liste structurée des principales
            entités territoriales intégrées à l'Empire du Mâli.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <RegionBlock
              title="Région du Mandé (Cœur de l'Empire)"
              items={[
                ["Niani", "Capitale impériale"],
                ["Kangaba", "Berceau de la dynastie Keita"],
                ["Kita", "Ville historique du Mandé"],
                ["Banamba", "Centre administratif"],
                ["Kolokani", "Zone de passage stratégique"],
                ["Dioïla", "Centre agraire important"],
                ["Koutiala", "Ville commerçante et artisanale"],
                ["Zégoua", "Carrefour commercial vers le sud"],
                ["Siby", "Village symbolique des chartes du Mandé"],
                ["Naréna", "Point de passage entre Mandé et Kouranko"],
              ]}
            />
            <RegionBlock
              title="Régions aurifères (Sources de richesse)"
              items={[
                ["Bambouk", "Zone d'extraction aurifère"],
                ["Bouré", "Région riche en or, au nord de la Haute-Guinée"],
                ["Galam", "Région minière vers le Sénégal oriental"],
                ["Kouroussa", "Centre de collecte de l'or"],
                ["Siguiri", "Ville minière et commerçante"],
                ["Kankan", "Plaque tournante régionale"],
                ["Niangassola", "Carrefour entre le Bouré et le Mandé"],
              ]}
            />
            <RegionBlock
              title="Régions du fleuve Niger (Axes commerciaux)"
              items={[
                ["Tombouctou", "Centre islamique et commercial"],
                ["Djenné", "Ville portuaire, artisanale et commerçante"],
                ["Mopti", "Confluence stratégique du Bani et du Niger"],
                ["Konna", "Halte marchande fluviale"],
                ["Gao", "Passagèrement intégrée sous Mâli"],
                ["Kabara", "Port de Tombouctou"],
                ["Bamba", "Contrôle stratégique sur le Niger"],
              ]}
            />
            <RegionBlock
              title="Régions occidentales et atlantiques"
              items={[
                ["Walata (Oualata)", "Ville caravanière saharienne"],
                ["Awdaghost", "Ancienne ville du Ghana, intégrée au Mâli"],
                ["Tichitt", "Oasis caravanière dans le Hodh"],
                ["Takrur", "État vassal islamisé"],
                ["Kasa", "Province sénégambienne stratégique"],
                ["Djollof", "Royaume vassal au nord du Sénégal"],
                ["Banjul", "Sur le fleuve Gambie, accès à la mer"],
                ["Kaabu", "En Gambie, partiellement dominée"],
                ["Tendaba", "Petit centre commercial gambien"],
                ["Bignona", "Carrefour entre Gambie et Casamance"],
              ]}
            />
            <RegionBlock
              title="Régions sahéliennes et sahariennes"
              items={[
                ["Taghaza", "Mines de sel exploitées par le Mâli"],
                ["Taoudeni", "Site de production et de stockage du sel"],
                ["Tindouf", "Oasis dans le commerce transsaharien"],
                ["Touat", "Point de convergence caravanière"],
                ["Tlemcen", "Ville nord-africaine commerçant avec le Mâli"],
                ["Fès", "Liens commerciaux avec Mansa Moussa"],
                ["Tunis", "Carrefour d'échanges islamiques"],
              ]}
            />
            <RegionBlock
              title="Régions forestières et méridionales"
              items={[
                ["Odienné", "Nord de la Côte d'Ivoire"],
                ["Korhogo", "Région sénoufo partiellement contrôlée"],
                ["Boundiali", "Limite sud des incursions"],
                ["Séguéla", "Poste avancé vers la forêt"],
                ["San-Pédro (approximatif)", "Zone d'échanges forestiers"],
                ["Yamoussoukro (anciennement N'Gokro)", "Zone de passage"],
              ]}
            />
            <RegionBlock
              title="Régions orientales et frontalières"
              items={[
                ["Nikki", "Zone d'interaction avec le Borgou (actuel Bénin)"],
                ["Boussa", "Ville sur le Niger (actuel Nigeria)"],
                ["Zinder", "Zone d'influence plus orientale"],
                ["Birni N'Konni", "Frontière orientale de l'empire"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* BIBLIOGRAPHIE */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Sources" title="Bibliographie" />
          <ul className="space-y-4 text-sm text-foreground/80 leading-relaxed">
            <li>
              Cartwright, Mark. <em>Empire du Mâli</em>. Encyclopédie de l'histoire
              ancienne, 1ᵉʳ mars 2019. Consulté en septembre 2020.
            </li>
            <li>
              Chakra, Hayden. <em>L'histoire de l'empire du Mâli</em>. About History,
              16 mai 2018. Consulté le 21 octobre 2020.
            </li>
            <li>
              Global Security. <em>Royaume du Mâli</em>. GlobalSecurity.org,
              28 août 2020. Consulté le 6 octobre 2020.
            </li>
            <li>
              National Geographic. <em>L'Empire du Mâli</em>. National Geographic Resource
              Library, 20 août 2020. Consulté le 19 octobre 2020.
            </li>
            <li>
              Wikipédia. <em>Empire du Mâli</em>. Wikipédia, 19 octobre 2020. Consulté le
              1ᵉʳ septembre 2020.
            </li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function RegionBlock({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <h3 className="font-display text-lg text-burgundy-deep mb-4 pb-2 border-b border-gold/40">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map(([nom, desc]) => (
          <li key={nom} className="text-sm">
            <span className="font-display text-burgundy-deep">{nom}</span>
            <span className="text-muted-foreground"> — {desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
      <HeroPlaceholder label="Photographie de bannière" />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/50 via-burgundy-deep/30 to-burgundy-deep/80" />
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
