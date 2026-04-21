/**
 * Placeholder visuel élégant en attendant vos photos.
 * Pour remplacer : importez votre image et passez-la dans <img src=... />
 * à la place de <ImagePlaceholder />.
 */
export function ImagePlaceholder({
  label = "Votre image ici",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} gradient-royal flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-4 border border-gold/40" />
      <div className="absolute inset-6 border border-gold/20" />
      <div className="text-center text-ivory/80 px-4">
        <p className="font-display text-[0.65rem] tracking-[0.4em] uppercase text-gold">
          Photographie
        </p>
        <p className="mt-2 font-serif italic text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
}

export function HeroPlaceholder({ label = "Votre photographie principale" }: { label?: string }) {
  return (
    <div className="absolute inset-0 gradient-royal">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.74 0.13 78 / 0.4), transparent 60%)" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-[0.65rem] tracking-[0.4em] uppercase text-gold/60">{label}</p>
      </div>
    </div>
  );
}
