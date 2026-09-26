import SectionsHeader from "@/components/SectionsHeader";
import WhyAvenroCard, { type BenefitIcon } from "./WhyAvenroCard";

interface Benefit {
  icon: BenefitIcon;
  title: string;
  description: string;
}

const benefits : Benefit[] = [
  {
    icon: "quality",
    title: "Premium Quality",
    description: "Natural fibers and reinforced stitching that hold their shape wash after wash.",
  },
  {
    icon: "comfort",
    title: "Everyday Comfort",
    description: "Soft, breathable fabric that moves with you from morning to night.",
  },
  {
    icon: "design",
    title: "Thoughtful Design",
    description: "Clean lines with no unnecessary logos, made to layer into any wardrobe.",
  },
];

const WhyAvenro = () => {
  return (
    <section
      aria-labelledby="why-avenro-heading"
      className="w-full bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >

        <SectionsHeader tag="Why Avenro" title="Designed for everyday life."/>
      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <WhyAvenroCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyAvenro;