import { ShieldCheck, Heart, Sparkles, type LucideIcon } from "lucide-react";

export type BenefitIcon = "quality" | "comfort" | "design";

interface WhyAvenroCardProps {
  icon: BenefitIcon;
  title: string;
  description: string;
}

const iconMap: Record<BenefitIcon, LucideIcon> = {
  quality: ShieldCheck,
  comfort: Heart,
  design: Sparkles,
};

const WhyAvenroCard = ({ icon, title, description }: WhyAvenroCardProps) => {
  const Icon = iconMap[icon];

  return (
    <article
      className="group flex min-h-62.5 flex-col items-center justify-center bg-surface px-6 py-10 text-center transition-colors duration-300 hover:bg-surface-subtle sm:min-h-67.5 lg:min-h-72.5 lg:px-8"
    >
      <div className="flex h-11 w-11 items-center justify-center border border-border text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent-soft">
        <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
      </div>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-6 text-text-muted">
        {description}
      </p>
    </article>
  );
};

export default WhyAvenroCard;