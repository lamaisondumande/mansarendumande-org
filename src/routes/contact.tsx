import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "./empire";
import { GoldRule } from "@/components/Ornament";
import { Mail, MapPin, Crown } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — La Maison du Mandé" },
      { name: "description", content: "Adressez-vous à la Grande Chancellerie de la Maison du Mandé." },
      { property: "og:title", content: "Contact — La Maison du Mandé" },
      { property: "og:description", content: "Correspondance officielle avec la Grande Chancellerie." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <PageHero eyebrow={t("correspondence")} title={t("grand_chancery")} subtitle={t("contact_subtitle")} />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">{t("reach_us")}</p>
              <h2 className="mt-3 font-display text-4xl text-burgundy-deep">{t("your_messages")}</h2>
              <div className="h-px w-24 bg-gold/70 mt-4" />
            </div>

            <p className="font-serif text-lg text-foreground/85 leading-relaxed">{t("chancery_intro")}</p>

            <ul className="space-y-5">
              <ContactRow icon={<Crown size={20} />} label={t("head_of_house")} value="S.A.I. Le Mansaren Hashim Keita du Mandé" />
              <ContactRow icon={<Mail size={20} />} label={t("email")} value="contact@maisondumande.org" />
              <ContactRow icon={<MapPin size={20} />} label={t("head_office")} value="Grande Chancellerie de la Maison du Mandé" />
            </ul>
          </div>

          <form className="bg-card border border-gold/30 p-8 md:p-10 shadow-elegant space-y-5">
            <Field label={t("name")} type="text" name="name" />
            <Field label={t("email")} type="email" name="email" />
            <Field label={t("subject")} type="text" name="subject" />
            <div>
              <label className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy-deep">
                {t("message")}
              </label>
              <textarea
                rows={6}
                className="mt-2 w-full bg-ivory border border-border focus:border-gold outline-none px-4 py-3 font-serif text-foreground transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full font-display text-xs tracking-[0.3em] uppercase bg-burgundy-deep text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors"
            >
              {t("send_message")}
            </button>
            <p className="text-xs text-muted-foreground italic text-center">{t("form_notice")}</p>
          </form>
        </div>

        <div className="text-center mt-16">
          <GoldRule />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy-deep">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full bg-ivory border border-border focus:border-gold outline-none px-4 py-3 font-serif text-foreground transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="h-10 w-10 flex items-center justify-center bg-burgundy-deep text-gold rounded-sm shrink-0">
        {icon}
      </span>
      <div>
        <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold">{label}</p>
        <p className="font-serif text-foreground/85">{value}</p>
      </div>
    </li>
  );
}
