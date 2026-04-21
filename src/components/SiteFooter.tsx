import { Link } from "@tanstack/react-router";
import coatOfArms from "@/assets/coat-of-arms.png";

export function SiteFooter() {
  return (
    <footer className="gradient-royal text-ivory mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <img src={coatOfArms} alt="" className="h-16 w-16 object-contain" width={64} height={64} loading="lazy" />
            <div>
              <p className="font-display text-xl">La Maison du Mandé</p>
              <p className="italic text-ivory/70 text-sm">Au service du Mandé et des Mandeka</p>
            </div>
          </div>
          <p className="mt-6 text-ivory/75 leading-relaxed text-[0.95rem]">
            Continuité dynastique de la Maison Impériale du Mandé, gardienne des valeurs
            de justice, de fraternité et de solidarité héritées de l'Empire du Mâli.
          </p>
        </div>

        <div>
          <h3 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-4">Navigation</h3>
          <ul className="space-y-2 text-ivory/80">
            <li><Link to="/empire" className="hover:text-gold transition-colors">L'Empire du Mâli</Link></li>
            <li><Link to="/patrimoine" className="hover:text-gold transition-colors">Patrimoine impérial</Link></li>
            <li><Link to="/humanitaire" className="hover:text-gold transition-colors">Engagements humanitaires</Link></li>
            <li><Link to="/communication" className="hover:text-gold transition-colors">Communication</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-4">Chancellerie</h3>
          <p className="text-ivory/80 leading-relaxed text-[0.95rem]">
            Pour toute correspondance officielle, sollicitation ou requête diplomatique,
            adressez-vous à la Grande Chancellerie de la Maison du Mandé.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 font-display text-xs tracking-[0.25em] uppercase text-gold border border-gold/60 px-5 py-3 hover:bg-gold hover:text-burgundy-deep transition-colors"
          >
            Nous écrire
          </Link>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/60 tracking-wider">
          <p>© {new Date().getFullYear()} La Maison du Mandé — Tous droits réservés.</p>
          <p className="italic font-serif">Ô Mandé, mémoire vivante.</p>
        </div>
      </div>
    </footer>
  );
}
