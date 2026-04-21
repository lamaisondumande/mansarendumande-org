import divider from "@/assets/divider.png";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img src={divider} alt="" className="h-12 md:h-16 opacity-90" width={1024} height={512} loading="lazy" />
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-px w-32 bg-gold/70 ${className}`} />;
}
