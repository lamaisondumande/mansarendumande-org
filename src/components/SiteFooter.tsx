import { Link } from "@tanstack/react-router";
import coatOfArms from "@/assets/coat-of-arms.png";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="gradient-royal text-ivory mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <img src={coatOfArms} alt="" className="h-16 w-16 object-contain" width={64} height={64} loading="lazy" />
            <div>
              <p className="font-display text-xl">La Maison du Mandé</p>
              <p className="italic text-ivory/70 text-sm">{t("tagline")}</p>
            </div>
          </div>
          <p className="mt-6 text-ivory/75 leading-relaxed text-[0.95rem]">{t("footer_about")}</p>
        </div>

        <div>
          <h3 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-4">{t("navigation")}</h3>
          <ul className="space-y-2 text-ivory/80">
            <li><Link to="/empire" className="hover:text-gold transition-colors">{t("nav_empire")}</Link></li>
            <li><Link to="/patrimoine" className="hover:text-gold transition-colors">{t("nav_patrimoine")}</Link></li>
            <li><Link to="/humanitaire" className="hover:text-gold transition-colors">{t("nav_humanitaire")}</Link></li>
            <li><Link to="/communication" className="hover:text-gold transition-colors">{t("nav_communication")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">{t("nav_contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-4">{t("chancery")}</h3>
          <p className="text-ivory/80 leading-relaxed text-[0.95rem]">{t("address_chancery")}</p>
          <Link
            to="/contact"
            className="inline-block mt-4 font-display text-xs tracking-[0.25em] uppercase text-gold border border-gold/60 px-5 py-3 hover:bg-gold hover:text-burgundy-deep transition-colors"
          >
            {t("write_us")}
          </Link>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/60 tracking-wider">
          <p>© {new Date().getFullYear()} La Maison du Mandé — {t("rights_reserved")}.</p>
          <p className="italic font-serif">{t("living_memory_motto")}.</p>
        </div>
      </div>
    </footer>
  );
}
