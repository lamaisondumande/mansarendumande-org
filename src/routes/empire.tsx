import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import { HeroPlaceholder } from "@/components/ImagePlaceholder";
import heroKirina from "@/assets/empire/hero-kirina.jpg";
import soundjataImg from "@/assets/empire/soundjata.jpg";
import soumaoroImg from "@/assets/empire/soumaoro.png";
import consequencesImg from "@/assets/empire/consequences.jpg";

export const Route = createFileRoute("/empire")({
  head: () => ({
    meta: [
      { title: "L'Empire du Mâli — La bataille de Kirina | La Maison du Mandé" },
      {
        name: "description",
        content:
          "La bataille de Kirina (1235) et la fondation de l'Empire du Mâli : Soundiata Keïta face à Soumaoro Kanté, un tournant de l'histoire de l'Afrique de l'Ouest.",
      },
      { property: "og:title", content: "L'Empire du Mâli — La bataille de Kirina" },
      {
        property: "og:description",
        content:
          "1235 : Soundiata Keïta vainc Soumaoro Kanté à Kirina et fonde l'Empire du Mâli.",
      },
      { property: "og:image", content: heroKirina },
      { name: "twitter:image", content: heroKirina },
    ],
  }),
  component: EmpirePage,
});

function EmpirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={heroKirina}
          alt="Représentation de la bataille de Kirina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/60 via-burgundy-deep/40 to-burgundy-deep/85" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory animate-fade-up">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            12 avril 1235
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-balance max-w-5xl leading-tight">
            La bataille de Kirina et la fondation de l'Empire du Mâli
          </h1>
          <div className="my-5 h-px w-24 bg-gold" />
          <p className="font-serif italic text-lg md:text-xl text-ivory/90 max-w-3xl">
            Un tournant dans l'histoire de l'Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
              Aux origines de l'Empire
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
              Du crépuscule du Ghana à l'aube du Mâli
            </h2>
            <GoldRule className="mt-5" />
          </div>

          <div className="space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              Au crépuscule de l'Empire du Ghana qui avait dominé l'Afrique de l'Ouest pendant
              près de neuf siècles (du IIIᵉ au XIIᵉ siècle), une nouvelle puissance émergeait
              dans la région : le royaume Sosso sous l'impitoyable règne de Soumaoro Kanté.
              Vers 1200, ce souverain ambitieux établit sa domination sur les vestiges de
              l'ancien empire, imposant un régime de terreur qui allait provoquer la
              résistance unifiée des peuples mandingues sous la conduite d'un leader
              exceptionnel : Soundiata Keïta.
            </p>
            <p>
              Soundiata, né vers 1210 à Niani (dans l'actuelle Guinée), semblait pourtant bien
              mal parti pour devenir un grand conquérant. Atteint d'un handicap physique dans
              son enfance, il fut contraint à l'exil en 1224 après l'assassinat de onze
              princes héritiers par Soumaoro. C'est à la cour du roi Moussa Tounkara à Méma que
              le jeune prince, ayant miraculeusement surmonté son infirmité selon la tradition
              orale, prépara méthodiquement sa revanche. Entre 1230 et 1234, il tissa
              patiemment un réseau d'alliances avec les royaumes voisins (Wagadou, Dia,
              Tabon), jetant les bases d'une coalition hétéroclite mais déterminée.
            </p>
            <p>
              La marche vers la confrontation finale s'accéléra en mars 1234 lorsque Soumaoro
              annexa le dernier bastion mandingue indépendant, le royaume du Kangaba.
              Soundiata, alors âgé de 25 ans, rassembla ses forces à Sibi (dans l'actuel Mâli)
              où il reçut le renfort décisif de deux redoutables chefs de guerre : son neveu
              Fakoli Koroma et Fran Kamara, roi du Tabon. À la veille de l'hivernage de
              décembre 1234, l'armée coalisée comptait environ 15 000 hommes, dont 3 000
              cavaliers légers — une innovation tactique majeure dans la région.
            </p>
            <p>
              Le choc décisif se produisit le 12 avril 1235 dans la vaste plaine de Kirina, à
              une cinquantaine de kilomètres au nord de l'actuelle Bamako. Face à face se
              trouvaient deux armées aux caractéristiques bien distinctes : les 20 000 hommes
              de Soumaoro, dont 5 000 cavaliers lourds équipés de lances et d'épées en fer,
              contre les 18 000 combattants de Soundiata, avec leurs 3 000 cavaliers légers
              maniant arcs composites et javelots.
            </p>
            <p>
              Selon le récit du griot Mamadou Kouyaté, le tournant survint au crépuscule
              lorsque Soundiata, utilisant une flèche en bois de « sana », blessa Soumaoro à
              l'épaule. Cette blessure, chargée de symbolisme dans la tradition orale,
              provoqua la débandade de l'armée sosso. Soumaoro, en fuite, trouva la mort près
              de Koulikoro le 27 avril 1235. Dès le mois de mai suivant, Soundiata était
              proclamé Mansa à Kangaba. L'année 1236 vit la fondation officielle de l'Empire
              du Mâli lors de la célèbre assemblée de Kurukan Fuga, où fut établie la Charte
              du Manden — considérée comme l'une des premières déclarations des droits
              humains.
            </p>
          </div>
        </div>
      </section>


      {/* DÉROULEMENT + PORTRAITS */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
              12 avril 1235
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
              Le déroulement de la bataille de Kirina
            </h2>
            <GoldRule className="mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-14 max-w-3xl mx-auto">
            <figure className="text-center">
              <img
                src={soundjataImg}
                alt="Portrait de Soundiata Keïta"
                className="w-full h-auto border-4 border-burgundy-deep shadow-[0_20px_40px_-15px_hsl(var(--burgundy-deep)/0.6)] object-cover aspect-[3/4]"
              />
              <figcaption className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-burgundy-deep">
                Soundiata Keïta
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={soumaoroImg}
                alt="Portrait de Soumaoro Kanté"
                className="w-full h-auto border-4 border-burgundy-deep shadow-[0_20px_40px_-15px_hsl(var(--burgundy-deep)/0.6)] object-cover aspect-[3/4]"
              />
              <figcaption className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-burgundy-deep">
                Soumaoro Kanté
              </figcaption>
            </figure>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
            <p>
              La bataille de Kirina débuta aux premières lueurs de l'aube, alors qu'une brume
              légère recouvrait encore la plaine. Les forces de Soumaoro Kanté, fortes
              d'environ 20 000 hommes, avaient pris position sur les collines dominant le
              champ de bataille. Leur armée était organisée en trois corps distincts : au
              centre, l'infanterie lourde équipée de grands boucliers en peau d'hippopotame et
              de lances en fer ; sur les ailes, la redoutable cavalerie sosso protégée par des
              cuirasses de coton matelassé ; et en arrière, les archers d'élite postés sur les
              hauteurs.
            </p>
            <p>
              Soundiata Keïta déploya ses troupes avec une stratégie novatrice. Il positionna
              son infanterie en formation semi-circulaire, exploitant le terrain pour éviter
              l'encerclement. Ses fameux cavaliers légers, montés sur des chevaux plus petits
              mais extrêmement mobiles, furent divisés en deux groupes camouflés dans les
              bosquets environnants. Les archers mandingues, équipés d'arcs composites pouvant
              percer les armures à 100 mètres, formèrent la première ligne de défense.
            </p>
            <p>
              La première phase des combats s'engagea vers 6 heures du matin par un intense
              échange de flèches. Les archers sosso, bénéficiant de leur position en hauteur,
              infligèrent des pertes sensibles aux troupes de Soundiata. Vers 9 heures,
              Soundiata ordonna une feinte retraite de son aile gauche, attirant une partie de
              la cavalerie ennemie dans un terrain marécageux où les lourds chevaux sosso
              s'enlisèrent.
            </p>
            <p>
              Le tournant tactique intervint vers midi. Les deux groupes de cavalerie légère
              mandingue, jusqu'alors dissimulés, lancèrent une attaque simultanée sur les
              arrières ennemis. Équipés de javelots à pointe empoisonnée et se déplaçant à
              grande vitesse, ils semèrent la confusion dans les lignes sosso. Pendant ce
              temps, l'infanterie de Soundiata passa à l'offensive au centre, utilisant des
              formations en « tête de buffle » pour percer les défenses adverses.
            </p>
            <p>
              L'affrontement atteignit son paroxysme en fin d'après-midi. Selon les récits des
              griots, Soundiata en personne aurait repéré Soumaoro dans la mêlée grâce à son
              casque à cornes dorées. Vers 17 heures, profitant d'un moment d'inattention du
              roi sosso, Soundiata aurait décoché la flèche fatale — une sagaie spéciale au
              bois de sana préparée par les sorciers mandingues. Touché à l'épaule droite,
              Soumaoro vit son talisman de protection brisé, ce qui selon la tradition causa
              sa perte.
            </p>
            <p>
              À la tombée de la nuit, l'armée sosso n'était plus qu'une foule en déroute,
              poursuivie sans relâche par la cavalerie mandingue. Les pertes sosso furent
              estimées à plus de 8 000 hommes contre 3 000 dans le camp mandingue — des
              chiffres impressionnants pour l'époque et la région.
            </p>
          </div>
        </div>
      </section>

      <Ornament className="my-4" />

      {/* CONSÉQUENCES */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
              Après la victoire
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
              Les conséquences de Kirina pour Soundiata Keïta
            </h2>
            <GoldRule className="mt-5" />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <figure className="md:col-span-2">
              <img
                src={consequencesImg}
                alt="Soundiata Keïta proclamé Mansa de l'Empire du Mâli"
                className="w-full h-auto border-4 border-burgundy-deep shadow-[0_20px_40px_-15px_hsl(var(--burgundy-deep)/0.6)] object-cover"
              />
              <figcaption className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-burgundy-deep text-center">
                Soundiata, Mansa du Mâli
              </figcaption>
            </figure>

            <div className="md:col-span-3 space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
              <p>
                La victoire décisive de Kirina marqua un tournant capital. Immédiatement après
                sa victoire, Soundiata fut proclamé Mansa par l'assemblée des chefs mandingues
                réunis à Kangaba en mai 1235. Dans l'année qui suivit, il convoqua la célèbre
                assemblée de Kurukan Fuga en 1236, où fut établie la Charte du Manden —
                constitution organisant politiquement et socialement le nouvel empire selon
                des principes innovants de justice et de gouvernance participative.
              </p>
              <p>
                Sur le plan militaire, la victoire permit à Soundiata de récupérer l'ensemble
                de l'équipement et des ressources de l'armée vaincue. Il intégra notamment les
                redoutables cavaliers lourds sosso, qu'il combina astucieusement avec sa
                propre cavalerie légère pour créer une force militaire sans équivalent dans
                la région.
              </p>
              <p>
                Politiquement, Soundiata mit en place un système administratif sophistiqué. Il
                divisa l'empire en provinces gouvernées par des parents ou des alliés fidèles,
                tout en maintenant l'autonomie relative des différents peuples intégrés. Il
                établit sa capitale à Niani, sa ville natale, qui devint un important centre
                commercial et culturel.
              </p>
              <p>
                Sur le plan économique, la domination sur les anciens territoires sosso lui
                donna le contrôle des routes commerciales transsahariennes, particulièrement
                celle de l'or. Sous son règne, des villes comme Djenné et Tombouctou
                commencèrent leur ascension vers la prospérité qui devait caractériser l'âge
                d'or de l'Empire du Mâli.
              </p>
              <p>
                Enfin, le triomphe de Kirina permit d'établir des relations avec les
                puissances nord-africaines. L'Empire du Mâli commença à être reconnu au-delà
                du Sahara comme une puissance majeure, préfigurant le fameux pèlerinage à La
                Mecque de Mansa Moussa en 1324, qui devait immortaliser la renommée du Mâli
                dans le monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION FINALE */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">
            Héritage
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy-deep">
            Sept siècles plus tard
          </h2>
          <GoldRule className="mt-5" />
          <p className="mt-8 font-serif italic text-lg text-foreground/85 leading-relaxed">
            Transmise de génération en génération par les griots, l'épopée de Soundiata
            symbolise la résistance face à l'oppression et la capacité de surmonter les
            handicaps les plus apparents. Kirina demeure l'acte fondateur d'une civilisation
            qui rayonna bien au-delà des frontières du continent.
          </p>
        </div>
      </section>

      <SiteFooter />
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
