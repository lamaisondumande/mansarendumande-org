export type Lang = "fr" | "en";

export type Article = {
  slug: string;
  category: "humanitaire-local" | "humanitaire-international" | "communication" | "histoire";
  date: { fr: string; en: string };
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  body: { fr: string[]; en: string[] };
  imageLabel: string;
};

export const articles: Article[] = [
  // ============ HISTOIRE ============
  {
    slug: "naissance-empire-mali",
    category: "histoire",
    date: { fr: "1235", en: "1235" },
    title: {
      fr: "La naissance de l'Empire du Mâli",
      en: "The Birth of the Mali Empire",
    },
    excerpt: {
      fr: "La victoire de Soundjata Keita à Kirina ouvre l'ère impériale.",
      en: "Sundiata Keita's victory at Kirina opens the imperial era.",
    },
    body: {
      fr: [
        "En 1235, à la bataille de Kirina, Soundjata Keita défait le roi sosso Soumangourou Kanté. Cette victoire fondatrice marque la naissance de l'Empire du Mâli.",
        "L'année suivante, à Kurukan Fuga, les peuples mandingues adoptent une charte qui définit les droits, les devoirs et l'organisation politique de la nouvelle fédération — l'une des plus anciennes déclarations de droits humains au monde.",
        "Cette charte fondatrice consacre la tolérance religieuse, l'abolition de l'esclavage par naissance, le respect de la vie humaine et une organisation sociale équilibrée entre les clans.",
      ],
      en: [
        "In 1235, at the Battle of Kirina, Sundiata Keita defeated the Sosso king Soumaoro Kanté. This founding victory marks the birth of the Mali Empire.",
        "The following year, at Kurukan Fuga, the Manding peoples adopted a charter defining the rights, duties and political organization of the new federation — one of the oldest declarations of human rights in the world.",
        "This founding charter enshrines religious tolerance, the abolition of birth slavery, respect for human life and a balanced social organization between the clans.",
      ],
    },
    imageLabel: "Naissance de l'Empire",
  },
  {
    slug: "empire-mali-manden",
    category: "histoire",
    date: { fr: "1235 — 1670", en: "1235 — 1670" },
    title: {
      fr: "L'Empire du Mâli ou Empire Manden",
      en: "The Mali Empire or Manden Empire",
    },
    excerpt: {
      fr: "Quatre siècles de rayonnement politique, économique et spirituel.",
      en: "Four centuries of political, economic and spiritual influence.",
    },
    body: {
      fr: [
        "L'Empire du Mâli s'étend sur près de quatre siècles, traversant les règnes de souverains exceptionnels comme Soundjata Keita et Mansa Musa.",
        "Sous Mansa Musa (1312–1337), l'Empire atteint son apogée. Son pèlerinage à La Mecque en 1324 marque les chroniques par sa magnificence : l'or distribué le long du chemin bouleverse durablement l'économie méditerranéenne.",
        "Tombouctou, Djenné et Gao deviennent des centres mondiaux d'érudition islamique, de commerce transsaharien et de diplomatie, attirant savants et marchands de toute l'Afrique et du Moyen-Orient.",
      ],
      en: [
        "The Mali Empire spanned nearly four centuries, through the reigns of exceptional sovereigns such as Sundiata Keita and Mansa Musa.",
        "Under Mansa Musa (1312–1337), the Empire reached its peak. His pilgrimage to Mecca in 1324 is recorded in chronicles for its magnificence: the gold distributed along the way lastingly disrupted the Mediterranean economy.",
        "Timbuktu, Djenné and Gao became global centres of Islamic scholarship, trans-Saharan trade and diplomacy, attracting scholars and merchants from across Africa and the Middle East.",
      ],
    },
    imageLabel: "Empire du Mâli",
  },
  {
    slug: "capitales-imperiales",
    category: "histoire",
    date: { fr: "Patrimoine", en: "Heritage" },
    title: {
      fr: "Les capitales impériales du Mâli",
      en: "The Imperial Capitals of Mali",
    },
    excerpt: {
      fr: "Niani, Kangaba, Tombouctou — les cités du pouvoir mansa.",
      en: "Niani, Kangaba, Timbuktu — the cities of mansa power.",
    },
    body: {
      fr: [
        "Niani, première capitale, fut le cœur politique d'un empire rayonnant. Kangaba, berceau mythique du Mandé, demeure un centre spirituel majeur.",
        "Tombouctou, cité du savoir, abritait la prestigieuse université de Sankoré. Djenné, joyau d'argile, témoigne de l'art sahélien avec sa Grande Mosquée.",
        "Chaque cité conserve aujourd'hui une part vivante de l'héritage du Mâli, dans son architecture, ses traditions et la mémoire de ses habitants.",
      ],
      en: [
        "Niani, the first capital, was the political heart of a radiant empire. Kangaba, the mythical cradle of Mandé, remains a major spiritual centre.",
        "Timbuktu, the city of knowledge, was home to the prestigious University of Sankoré. Djenné, a clay jewel, bears witness to Sahelian art with its Great Mosque.",
        "Each city today preserves a living part of the Mali heritage, in its architecture, traditions and the memory of its inhabitants.",
      ],
    },
    imageLabel: "Capitales impériales",
  },

  // ============ HUMANITAIRE LOCAL ============
  {
    slug: "renovation-mosquee-ouezzindougou",
    category: "humanitaire-local",
    date: { fr: "12 Avril 2023", en: "April 12, 2023" },
    title: {
      fr: "Rénovation de la mosquée d'Ouézzindougou",
      en: "Renovation of the Ouézzindougou Mosque",
    },
    excerpt: {
      fr: "Restauration d'un lieu de culte emblématique du Mandé.",
      en: "Restoration of an emblematic place of worship in Mandé.",
    },
    body: {
      fr: [
        "Grâce au soutien précieux et à la générosité de nos bienfaiteurs, une action significative a été entreprise en faveur de la mosquée d'Ouézzindougou, permettant sa restauration dans le respect de son patrimoine spirituel et culturel.",
        "Cette initiative s'inscrit dans notre engagement constant à préserver les lieux de culte, symboles de foi, d'histoire et de rassemblement pour les générations présentes et futures.",
      ],
      en: [
        "Thanks to the invaluable support and generosity of our benefactors, a significant action has been undertaken in favour of the mosque in Ouézzindougou, enabling its restoration while respecting its spiritual and cultural heritage.",
        "This initiative is part of our ongoing commitment to preserving places of worship, symbols of faith, history and gathering for present and future generations.",
      ],
    },
    imageLabel: "Mosquée d'Ouézzindougou",
  },
  {
    slug: "pouponniere-ouezzindougou",
    category: "humanitaire-local",
    date: { fr: "1er Mai 2023", en: "May 1, 2023" },
    title: {
      fr: "Intervention à la pouponnière d'Ouézzindougou",
      en: "Intervention at the Ouézzindougou Nursery",
    },
    excerpt: {
      fr: "Soutien à l'orphelinat municipal — protection de l'enfance.",
      en: "Support for the municipal orphanage — child protection.",
    },
    body: {
      fr: [
        "Grâce à une étroite collaboration avec les autorités locales, la Maison du Mandé a pu apporter un soutien significatif à l'orphelinat de la ville d'Ouézzindougou.",
        "Par cette action, elle réaffirme son engagement profond pour la protection de l'enfance et la promotion des valeurs de solidarité et de compassion héritées de l'Empire du Mâli.",
      ],
      en: [
        "Thanks to close collaboration with local authorities, the Maison du Mandé was able to provide significant support to the orphanage in the town of Ouézzindougou.",
        "Through this action, it reaffirms its deep commitment to child protection and the promotion of the values of solidarity and compassion inherited from the Mali Empire.",
      ],
    },
    imageLabel: "Pouponnière d'Ouézzindougou",
  },
  {
    slug: "action-djoliba",
    category: "humanitaire-local",
    date: { fr: "16 Avril 2024", en: "April 16, 2024" },
    title: {
      fr: "Action dans le village de Djoliba",
      en: "Action in the Village of Djoliba",
    },
    excerpt: {
      fr: "Solidarité et entraide pour les populations du Mandé.",
      en: "Solidarity and mutual aid for the people of Mandé.",
    },
    body: {
      fr: [
        "Fidèle à sa mission de solidarité et d'entraide, la Maison du Mandé soutient le village de Djoliba afin d'alléger les difficultés quotidiennes des populations locales.",
        "Par cette démarche, elle perpétue l'esprit de fraternité et de responsabilité sociale qui caractérisait l'Empire du Mâli, plaçant l'être humain au cœur de ses actions.",
      ],
      en: [
        "Faithful to its mission of solidarity and mutual aid, the Maison du Mandé is supporting the village of Djoliba in order to alleviate the daily difficulties faced by local populations.",
        "Through this approach, it aims to perpetuate the spirit of fraternity and social responsibility that characterized the Empire of Mali, placing human beings at the heart of its actions.",
      ],
    },
    imageLabel: "Village de Djoliba",
  },
  {
    slug: "distribution-kangaba",
    category: "humanitaire-local",
    date: { fr: "14 Avril 2024", en: "April 14, 2024" },
    title: {
      fr: "Distribution dans la ville de Kangaba",
      en: "Distribution in the City of Kangaba",
    },
    excerpt: {
      fr: "Présence officielle dans le berceau mythique du Mandé.",
      en: "Official presence in the mythical cradle of Mandé.",
    },
    body: {
      fr: [
        "Une délégation officielle de la Maison du Mandé s'est rendue à Kangaba, berceau mythique et hautement symbolique du Mandé, pour apporter un soutien concret au village.",
        "Par cette présence sur le terrain, la Maison du Mandé démontre son attachement indéfectible aux lieux fondateurs de notre civilisation et réaffirme son engagement à accompagner les communautés dans la dignité et le respect de leur héritage ancestral.",
      ],
      en: [
        "An official delegation from the Maison du Mandé has been sent to provide concrete support to the village of Kangaba, the mythical and highly symbolic cradle of Mandé.",
        "Through this presence on the ground, the Maison du Mandé demonstrates its unwavering attachment to the founding places of our civilization and reaffirms its commitment to supporting communities with dignity and respect for their ancestral heritage.",
      ],
    },
    imageLabel: "Ville de Kangaba",
  },
  {
    slug: "action-nteguedo",
    category: "humanitaire-local",
    date: { fr: "4 Mai 2025", en: "May 4, 2025" },
    title: {
      fr: "Action dans le village de Ntéguédo",
      en: "Action in the Village of Ntéguédo",
    },
    excerpt: {
      fr: "Aide aux familles vulnérables, espoir et cohésion.",
      en: "Aid to vulnerable families, hope and cohesion.",
    },
    body: {
      fr: [
        "Dans le cadre de sa mission humanitaire pour le Mandé, la Maison Impériale du Mandé a mené en 2025 une action décisive au cœur du village de Ntéguédo, dans l'arrondissement historique de Koulikoro.",
        "Fidèle à son devoir d'assistance et de solidarité, elle a apporté une aide significative aux familles les plus vulnérables, renforçant ainsi l'espoir et la cohésion au sein de la communauté.",
      ],
      en: [
        "As part of its humanitarian mission for Mandé, the Imperial House of Mandé carried out a decisive action in 2025 in the heart of the village of Ntéguédo, in the historic district of Koulikoro.",
        "Faithful to its duty of assistance and solidarity, it provided significant aid to the most vulnerable families, thereby strengthening hope and cohesion within the community.",
      ],
    },
    imageLabel: "Village de Ntéguédo",
  },
  {
    slug: "arbre-de-la-paix",
    category: "humanitaire-local",
    date: { fr: "25 Décembre 2025", en: "December 25, 2025" },
    title: {
      fr: "Premier Arbre de la Paix en Afrique",
      en: "First Peace Tree in Africa",
    },
    excerpt: {
      fr: "Symbole d'unité, de dialogue et de réconciliation.",
      en: "Symbol of unity, dialogue and reconciliation.",
    },
    body: {
      fr: [
        "La Maison du Mandé a accueilli sur le sol africain le tout premier Arbre de la Paix, marquant un moment historique pour le continent et pour les valeurs de réconciliation entre les peuples.",
        "Ce symbole vivant ancre durablement l'engagement de la Maison du Mandé en faveur du dialogue, de l'unité et de la cohésion sociale.",
      ],
      en: [
        "The Maison du Mandé welcomed on African soil the very first Peace Tree, marking a historic moment for the continent and for the values of reconciliation between peoples.",
        "This living symbol lastingly anchors the Maison du Mandé's commitment to dialogue, unity and social cohesion.",
      ],
    },
    imageLabel: "Arbre de la Paix",
  },

  // ============ HUMANITAIRE INTERNATIONAL ============
  {
    slug: "humanitaire-comores",
    category: "humanitaire-international",
    date: { fr: "30 Février 2022", en: "February 30, 2022" },
    title: {
      fr: "Action humanitaire aux Comores",
      en: "Humanitarian Action in the Comoros",
    },
    excerpt: {
      fr: "Solidarité africaine et fraternité religieuse.",
      en: "African solidarity and religious fraternity.",
    },
    body: {
      fr: [
        "Dans un esprit de fraternité africaine et de solidarité religieuse, la Maison du Mandé a apporté son soutien aux populations des Comores.",
        "Cette action témoigne de la volonté constante de la Maison du Mandé de renforcer les liens historiques et spirituels entre royaumes et peuples frères, fidèle aux idéaux d'unité et de respect mutuel hérités de l'Empire du Mâli.",
      ],
      en: [
        "In a spirit of African fraternity and religious solidarity, the Maison du Mandé provided its support to the people of the Comoros.",
        "This action demonstrates the constant willingness of the Maison du Mandé to strengthen the historical and spiritual ties between brotherly kingdoms and peoples, faithful to the ideals of unity and mutual respect inherited from the Empire of Mali.",
      ],
    },
    imageLabel: "Action aux Comores",
  },
  {
    slug: "humanitaire-ghana",
    category: "humanitaire-international",
    date: { fr: "14 Février 2023", en: "February 14, 2023" },
    title: {
      fr: "Action humanitaire au Ghana",
      en: "Humanitarian Action in Ghana",
    },
    excerpt: {
      fr: "Soutien à la communauté musulmane de Sewfi Obeng Mim.",
      en: "Support for the Muslim community of Sewfi Obeng Mim.",
    },
    body: {
      fr: [
        "La Maison du Mandé a apporté son soutien à la communauté musulmane sous l'égide de la Maison de Sewfi Obeng Mim, en République du Ghana.",
        "Cette action s'inscrit dans une démarche durable de coopération entre maisons royales africaines, au service des populations.",
      ],
      en: [
        "The Maison du Mandé provided its support to the Muslim community under the auspices of the House of Sewfi Obeng Mim, in the Republic of Ghana.",
        "This action is part of a sustainable approach of cooperation between African royal houses, in the service of the people.",
      ],
    },
    imageLabel: "Action au Ghana",
  },
  {
    slug: "humanitaire-liban",
    category: "humanitaire-international",
    date: { fr: "6 Mars 2024", en: "March 6, 2024" },
    title: {
      fr: "Action humanitaire au Liban",
      en: "Humanitarian Action in Lebanon",
    },
    excerpt: {
      fr: "Solidarité internationale envers les populations affectées.",
      en: "International solidarity towards affected populations.",
    },
    body: {
      fr: [
        "Dans la continuité de ses engagements internationaux, la Maison du Mandé a soutenu les populations affectées au Liban, dans un esprit de solidarité dépassant les frontières.",
        "Cette mission illustre la dimension universelle des valeurs portées par la Maison du Mandé.",
      ],
      en: [
        "In line with its international commitments, the Maison du Mandé supported the affected populations in Lebanon, in a spirit of solidarity transcending borders.",
        "This mission illustrates the universal dimension of the values upheld by the Maison du Mandé.",
      ],
    },
    imageLabel: "Action au Liban",
  },

  // ============ COMMUNICATION / DISTINCTIONS ============
  {
    slug: "ambassade-belgique",
    category: "communication",
    date: { fr: "22 Septembre 2022", en: "September 22, 2022" },
    title: {
      fr: "Invitation à l'Ambassade de Belgique à Paris",
      en: "Invitation to the Embassy of Belgium in Paris",
    },
    excerpt: {
      fr: "Remise de l'Ordre de la Croix Belge au Président.",
      en: "Award of the Belgian Cross Order to the President.",
    },
    body: {
      fr: [
        "Lors d'une invitation solennelle, le Président de la Maison du Mandé a participé à une rencontre officielle marquée par une haute distinction honorifique.",
        "À cette occasion, il a reçu l'Ordre de la Croix Belge, reconnaissance symbolique de son engagement institutionnel et de son action en faveur du dialogue et de la continuité historique.",
        "Cette distinction renforce le prestige et le rayonnement de la Maison du Mandé dans le cadre des relations protocolaires et honorifiques.",
      ],
      en: [
        "During a solemn invitation, the President of the House of Mandé took part in an official meeting marked by a high honorary distinction.",
        "On this occasion, he was awarded the Order of the Belgian Cross, a symbolic recognition of his institutional commitment and his action in favour of dialogue and historical continuity.",
        "This distinction enhances the prestige and influence of the House of Mandé within the framework of protocol and honorary relations.",
      ],
    },
    imageLabel: "Ambassade de Belgique",
  },
  {
    slug: "gala-georgie",
    category: "communication",
    date: { fr: "21 Août 2025", en: "August 21, 2025" },
    title: {
      fr: "Gala de la Maison de Géorgie aux États-Unis",
      en: "Gala of the House of Georgia in the United States",
    },
    excerpt: {
      fr: "Engagement partagé entre dynasties régnantes.",
      en: "Shared commitment among reigning dynasties.",
    },
    body: {
      fr: [
        "La participation du Grand Ministre de la Maison du Mandé au gala caritatif de la Maison Royale de Géorgie reflète un engagement partagé entre les anciennes dynasties régnantes.",
        "Cette présence solennelle souligne leur volonté commune de perpétuer leurs traditions, de renforcer les liens entre leurs ordres et d'ancrer leur héritage dans les engagements contemporains.",
      ],
      en: [
        "The participation of the Grand Minister of the House of Mandé in the charity gala of the Royal House of Georgia reflects a shared commitment among the former reigning dynasties.",
        "This solemn presence underscores their common desire to uphold their traditions, strengthen the bonds between their orders, and anchor their heritage in contemporary engagements.",
      ],
    },
    imageLabel: "Gala de Géorgie",
  },
  {
    slug: "armoiries-dragenburg",
    category: "communication",
    date: { fr: "6 Juin 2025", en: "June 6, 2025" },
    title: {
      fr: "Présentation des armoiries à Dragenburg",
      en: "Presentation of the Coat of Arms in Dragenburg",
    },
    excerpt: {
      fr: "Œuvre majestueuse peinte par Giuseppe Meliti.",
      en: "Majestic work painted by Giuseppe Meliti.",
    },
    body: {
      fr: [
        "La Maison du Mandé a l'immense honneur de dévoiler ses armoiries officielles, œuvre majestueuse présentée au château de Dragenburg.",
        "Ces armes ont été méticuleusement peintes par M. Giuseppe Meliti, artiste héraldique italien renommé, dont la maîtrise du pinceau et la délicatesse du trait témoignent d'une profonde sensibilité historique.",
        "Par cette création, la Maison du Mandé réaffirme son attachement aux traditions ancestrales, tout en honorant l'héritage impérial.",
      ],
      en: [
        "The House of Mandé has the immense honor of unveiling its official coat of arms, a majestic work presented at Dragenburg Castle.",
        "These arms were meticulously painted by Mr. Giuseppe Meliti, a renowned Italian heraldic artist, whose mastery of the brush and delicacy of line testify to his deep historical sensitivity.",
        "Through this creation, the House of Mandé reaffirms its attachment to ancestral traditions, while honoring the imperial heritage.",
      ],
    },
    imageLabel: "Armoiries officielles",
  },
  {
    slug: "honneur-maison-mande",
    category: "communication",
    date: { fr: "25 Septembre 2025", en: "September 25, 2025" },
    title: {
      fr: "Reconnaissance scientifique de la Maison du Mandé",
      en: "Scientific Recognition of the House of Mandé",
    },
    excerpt: {
      fr: "Article scientifique sur la continuité dynastique Keita.",
      en: "Scientific article on Keita dynastic continuity.",
    },
    body: {
      fr: [
        "L'Empire du Mâli (1230–1670) fut l'une des plus grandes puissances de l'histoire de l'Afrique de l'Ouest, reconnu pour sa gouvernance reposant sur de fortes traditions dynastiques.",
        "Un article scientifique met en évidence la continuité dynastique de la Maison du Mandé, montrant comment la lignée impériale de la dynastie Keita se perpétue aujourd'hui, renforçant ainsi sa légitimité historique, culturelle et institutionnelle.",
      ],
      en: [
        "The Empire of Mali (1230–1670) was one of the greatest powers in the history of West Africa, recognised for its governance which rested on strong dynastic traditions.",
        "This scientific article highlights the dynastic continuity of the House of Mandé, showing how the imperial lineage of the Keita dynasty continues today, thereby reinforcing its historical, cultural and institutional legitimacy.",
      ],
    },
    imageLabel: "Reconnaissance scientifique",
  },
  {
    slug: "medaille-engagement-associatif",
    category: "communication",
    date: { fr: "8 Décembre 2025", en: "December 8, 2025" },
    title: {
      fr: "Médaille de l'engagement associatif",
      en: "Medal of Associative Commitment",
    },
    excerpt: {
      fr: "Distinction décernée au Kalisa Farma.",
      en: "Distinction awarded to the Kalisa Farma.",
    },
    body: {
      fr: [
        "La Maison du Mandé a été honorée en décembre 2025 par la remise de la Médaille du Mérite Associatif au Kalisa Farma de la Maison du Mandé.",
        "Cette distinction récompense un parcours dédié au sport ainsi qu'à la gestion et à la coordination des actions humanitaires menées par la Maison du Mandé.",
        "Elle salue également un engagement constant pour les valeurs de solidarité, de dépassement de soi et de cohésion sociale.",
      ],
      en: [
        "The House of Mandé was honored in December 2025 through the awarding of the Medal of Associative Merit to the Kalisa Farma of the House of Mandé.",
        "This distinction rewards a career dedicated to sport as well as to the management and coordination of humanitarian actions carried out by the House of Mandé.",
        "It also salutes a constant commitment to the values of solidarity, self-improvement and social cohesion.",
      ],
    },
    imageLabel: "Médaille du Mérite",
  },
  {
    slug: "ordre-lion-mande",
    category: "communication",
    date: { fr: "15 Décembre 2025", en: "December 15, 2025" },
    title: {
      fr: "Grand Compagnon de l'Ordre du Lion du Mandé",
      en: "Grand Companion of the Order of the Lion of Mandé",
    },
    excerpt: {
      fr: "Jonathan Bamba élevé au rang de Grand Compagnon.",
      en: "Jonathan Bamba elevated to Grand Companion.",
    },
    body: {
      fr: [
        "L'Ordre Impérial du Lion du Mandé a élevé Jonathan Bamba, international ivoirien, au rang de Grand Compagnon lors d'une cérémonie officielle.",
        "Cette prestigieuse distinction récompense son parcours exemplaire, son excellence sportive et son rayonnement international, dans l'héritage des valeurs de la dynastie impériale Keita.",
        "Elle incarne un message fort d'inspiration, de transmission et d'unité pour la jeunesse de France et d'Afrique.",
      ],
      en: [
        "The Imperial Order of the Lion of Mandé elevated Jonathan Bamba, Ivorian international, to the rank of Grand Companion during an official ceremony.",
        "This prestigious distinction rewards his exemplary career, his sporting excellence and his international influence, in the heritage of the values of the Keita imperial dynasty.",
        "It embodies a strong message of inspiration, transmission and unity for the youth of France and Africa.",
      ],
    },
    imageLabel: "Ordre du Lion du Mandé",
  },
  {
    slug: "partenariat-servare-manere",
    category: "communication",
    date: { fr: "12 Janvier 2026", en: "January 12, 2026" },
    title: {
      fr: "Partenariat MDM × Servare Manere",
      en: "Partnership between MDM and Servare Manere",
    },
    excerpt: {
      fr: "Réception du premier Arbre de la Paix en Afrique.",
      en: "Reception of the first Tree of Peace in Africa.",
    },
    body: {
      fr: [
        "La réception du premier Arbre de la Paix en Afrique. Symbole d'unité, de dialogue et de réconciliation, cet arbre incarne un engagement partagé pour la paix.",
        "Cette initiative met en lumière la coopération entre traditions, institutions et acteurs de la société civile. Elle rappelle l'importance de la cohésion sociale et du respect mutuel entre les peuples.",
        "Ce partenariat affirme la volonté commune de préserver les valeurs humaines et culturelles pour un avenir harmonieux.",
      ],
      en: [
        "The reception of the first Tree of Peace in Africa. A symbol of unity, dialogue and reconciliation, this tree embodies a shared commitment to peace.",
        "This initiative highlights the cooperation between traditions, institutions and civil society actors. It recalls the importance of social cohesion and mutual respect among peoples.",
        "This partnership affirms the shared will to preserve human and cultural values for a harmonious future.",
      ],
    },
    imageLabel: "Servare Manere",
  },
  {
    slug: "titre-aznauri-sandaki",
    category: "communication",
    date: { fr: "27 Mars 2026", en: "March 27, 2026" },
    title: {
      fr: "Titre d'Aznauri pour le Sandaki",
      en: "Granting of the Title of Aznauri to the Sandaki",
    },
    excerpt: {
      fr: "Distinction reçue de la Maison Royale de Géorgie.",
      en: "Distinction received from the Royal House of Georgia.",
    },
    body: {
      fr: [
        "Le gala 2026 de la Maison Royale de Géorgie a mis en avant l'engagement des maisons royales en faveur de l'humanitaire et de la diplomatie.",
        "Le Sandaki de la Maison Impériale du Mandé s'est distingué par son action internationale, recevant le titre d'Aznauri de Sa Majesté Royale le Prince Bagration Mukhrani.",
        "Ce gala a souligné l'importance de l'action conjointe face aux défis mondiaux, en particulier la lutte contre le trafic d'êtres humains.",
      ],
      en: [
        "The 2026 gala of the Royal House of Georgia highlighted the commitment of royal houses to humanitarian work and diplomacy.",
        "The Sandaki of the Imperial House of Mandé distinguished himself through his international action, receiving the title of Aznauri from His Royal Majesty Prince Bagration Mukhrani.",
        "This gala underscored the importance of joint action in the face of global challenges, particularly the fight against human trafficking.",
      ],
    },
    imageLabel: "Titre d'Aznauri",
  },
  {
    slug: "empereur-ethiopie-bamako",
    category: "communication",
    date: { fr: "Octobre 1963", en: "October 1963" },
    title: {
      fr: "L'Empereur d'Éthiopie à Bamako",
      en: "The Emperor of Ethiopia in Bamako",
    },
    excerpt: {
      fr: "Haut moment du panafricanisme et de la diplomatie malienne.",
      en: "A high point of pan-Africanism and Malian diplomacy.",
    },
    body: {
      fr: [
        "En octobre 1963, l'Empereur Haïlé Sélassié d'Éthiopie se rendit à Bamako, accueilli par le Président Modibo Keita. Cette rencontre marqua un haut moment du panafricanisme.",
        "Quelques jours plus tard, Keita réunit à Bamako l'Empereur, le Roi Hassan II et le Président Ben Bella pour négocier un cessez-le-feu entre l'Algérie et le Maroc, affirmant ainsi le rôle diplomatique du Mali en Afrique.",
        "Le Mali, héritier des grandes dynasties royales et impériales du Mandé, demeure un centre politique et spirituel sur le continent africain.",
      ],
      en: [
        "In October 1963, Emperor Haile Selassie of Ethiopia visited Bamako, welcomed by President Modibo Keita. This meeting marked a high point of pan-Africanism.",
        "A few days later, Keita brought together in Bamako the Emperor, King Hassan II and President Ben Bella to negotiate a ceasefire between Algeria and Morocco, thereby affirming Mali's diplomatic role in Africa.",
        "Mali, heir to the great royal and imperial dynasties of Mandé, remains a political and spiritual centre on the African continent.",
      ],
    },
    imageLabel: "Empereur d'Éthiopie",
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getByCategory = (cat: Article["category"]) => articles.filter((a) => a.category === cat);
