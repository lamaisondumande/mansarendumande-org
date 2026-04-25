import divider from "@/assets/divider.png";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img src={divider} alt="" className="h-56 md:h-80 w-auto object-contain opacity-90 mx-auto" width={854} height={1022} loading="lazy" />
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-px w-32 bg-gold/70 ${className}`} />;
}
