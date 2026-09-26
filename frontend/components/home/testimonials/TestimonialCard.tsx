import { FaQuoteLeft, FaStar } from 'react-icons/fa6';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

export interface Testimonial {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  verified?: boolean;
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({ name, rating, quote, verified = true }: Testimonial) => {
  return (
    <article className="relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/60 bg-surface px-7 py-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Decorative quote mark — purely visual, hidden from screen readers */}
      <FaQuoteLeft
        aria-hidden="true"
        className="absolute -right-2 -top-2 h-16 w-16 text-accent/6"
      />

      <div className="relative flex items-center justify-between">
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`Rated ${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              aria-hidden="true"
              className={`h-3 w-3 ${i < rating ? 'text-yellow-500' : 'text-border'}`}
            />
          ))}
        </div>

        {verified && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium tracking-wide text-text-muted">
            Verified
            <RiVerifiedBadgeFill aria-hidden="true" className="h-3.5 w-3.5 text-blue-600" />
          </span>
        )}
      </div>

      <blockquote className="relative text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
        “{quote}”
      </blockquote>

      <footer className="relative mt-auto flex items-center gap-3 border-t border-border/40 pt-5">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent"
        >
          {getInitials(name)}
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;