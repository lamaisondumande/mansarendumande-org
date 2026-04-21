import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/data/articles";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof typeof translations.fr) => string;
};

const translations = {
  fr: {
    nav_home: "Accueil",
    nav_empire: "L'Empire du Mâli",
    nav_patrimoine: "Patrimoine",
    nav_humanitaire: "Engagements",
    nav_communication: "Communication",
    nav_contact: "Contact",
    tagline: "Au service du Mandé et des Mandeka",
    imperial_house: "Maison Impériale",
    discover_empire: "Découvrir l'Empire",
    our_engagements: "Nos engagements",
    living_memory: "Mémoire vivante",
    sources_mande: "Aux sources du Mandé",
    read_more: "Lire",
    address_chancery: "Pour toute correspondance officielle, sollicitation ou requête diplomatique, adressez-vous à la Grande Chancellerie de la Maison du Mandé.",
    write_us: "Nous écrire",
    speech: "Allocution",
    presidents_message: "Message du Président et Chef de la Maison Impériale",
    news: "Actualités",
    recent_releases: "Communiqués récents",
    all_news: "Toute l'actualité",
    engagement: "Engagement",
    preserve_transmit: "Préserver, transmettre, rayonner",
    join_us: "Rejoignez la Maison du Mandé dans sa mission de mémoire, de culture et de philanthropie.",
    enter_correspondence: "Entrer en correspondance",
    quote: "« Tout homme a sa terre. Et lorsque le destin y est lié, aucune puissance humaine ne peut l'en détourner. »",
    chancery: "Chancellerie",
    correspondence: "Correspondance",
    grand_chancery: "Grande Chancellerie",
    contact_subtitle: "Toute requête diplomatique, demande d'audience ou message officiel.",
    reach_us: "Nous joindre",
    your_messages: "Vos messages",
    chancery_intro: "La Grande Chancellerie reçoit avec attention toute correspondance adressée à la Maison Impériale du Mandé. Chaque message est traité dans la plus grande considération.",
    head_of_house: "Chef de Maison",
    email: "Courriel",
    head_office: "Siège",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    send_message: "Envoyer le message",
    form_notice: "Ce formulaire est fourni à titre indicatif.",
    heart_mande: "Au cœur du Mandé",
    local_actions: "Actions locales",
    diplomacy_solidarity: "Diplomatie & solidarité",
    intl_engagements: "Engagements internationaux",
    heritage: "Patrimoine",
    imperial_capitals: "Les capitales impériales",
    capitals_subtitle: "Sur les traces des cités qui ont façonné la mémoire de l'Afrique.",
    each_stone: "Chaque pierre, chaque manuscrit, chaque chant transmis de génération en génération est un fragment vivant de l'âme du Mandé.",
    communication_press: "Communication & Presse",
    official_releases: "Communiqués officiels, distinctions et rayonnement international.",
    press_request: "Pour toute demande presse, veuillez contacter la Grande Chancellerie.",
    back_to: "Retour",
    related: "À découvrir également",
    nav_history: "Histoire",
    article_not_found: "Article introuvable",
    go_home: "Retour à l'accueil",
    rights_reserved: "Tous droits réservés",
    living_memory_motto: "Ô Mandé, mémoire vivante",
    navigation: "Navigation",
    footer_about: "Continuité dynastique de la Maison Impériale du Mandé, gardienne des valeurs de justice, de fraternité et de solidarité héritées de l'Empire du Mâli.",
  },
  en: {
    nav_home: "Home",
    nav_empire: "Mali Empire",
    nav_patrimoine: "Heritage",
    nav_humanitaire: "Engagements",
    nav_communication: "News",
    nav_contact: "Contact",
    tagline: "In service of Mandé and the Mandeka",
    imperial_house: "Imperial House",
    discover_empire: "Discover the Empire",
    our_engagements: "Our engagements",
    living_memory: "Living memory",
    sources_mande: "At the sources of Mandé",
    read_more: "Read",
    address_chancery: "For all official correspondence, requests or diplomatic inquiries, please address the Grand Chancery of the House of Mandé.",
    write_us: "Write to us",
    speech: "Address",
    presidents_message: "Message from the President and Head of the Imperial House",
    news: "News",
    recent_releases: "Recent releases",
    all_news: "All news",
    engagement: "Commitment",
    preserve_transmit: "Preserve, transmit, radiate",
    join_us: "Join the House of Mandé in its mission of memory, culture and philanthropy.",
    enter_correspondence: "Begin correspondence",
    quote: "\"Every man has his land. And when destiny is tied to it, no human power can turn him away from it.\"",
    chancery: "Chancery",
    correspondence: "Correspondence",
    grand_chancery: "Grand Chancery",
    contact_subtitle: "All diplomatic inquiries, audience requests or official messages.",
    reach_us: "Reach us",
    your_messages: "Your messages",
    chancery_intro: "The Grand Chancery receives with attention all correspondence addressed to the Imperial House of Mandé. Each message is treated with the greatest consideration.",
    head_of_house: "Head of House",
    email: "Email",
    head_office: "Headquarters",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send_message: "Send message",
    form_notice: "This form is provided for reference.",
    heart_mande: "Heart of Mandé",
    local_actions: "Local actions",
    diplomacy_solidarity: "Diplomacy & solidarity",
    intl_engagements: "International engagements",
    heritage: "Heritage",
    imperial_capitals: "The imperial capitals",
    capitals_subtitle: "In the footsteps of the cities that shaped the memory of Africa.",
    each_stone: "Every stone, every manuscript, every song passed down from generation to generation is a living fragment of the soul of Mandé.",
    communication_press: "Communication & Press",
    official_releases: "Official releases, distinctions and international influence.",
    press_request: "For any press request, please contact the Grand Chancery.",
    back_to: "Back",
    related: "Also discover",
    nav_history: "History",
    article_not_found: "Article not found",
    go_home: "Back to home",
    rights_reserved: "All rights reserved",
    living_memory_motto: "Ô Mandé, living memory",
    navigation: "Navigation",
    footer_about: "Dynastic continuity of the Imperial House of Mandé, guardian of the values of justice, fraternity and solidarity inherited from the Empire of Mali.",
  },
} as const;

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("mdm-lang") as Lang | null;
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("mdm-lang", l);
  };

  const t = (k: keyof typeof translations.fr) => translations[lang][k];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function pick<T>(lang: Lang, val: { fr: T; en: T }): T {
  return val[lang];
}
