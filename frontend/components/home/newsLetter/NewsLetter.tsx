import Image from 'next/image';
import NewsLetterImage from './NewsLetterImage';

const Newsletter = () => {
  return (
    <section className="w-full mt-10 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image side */}
        <NewsLetterImage/>
        
        {/* Content side */}
        <div className="flex flex-col items-start justify-center bg-surface px-6 py-12 sm:px-10 lg:px-16 lg:py-0">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            STAY IN THE LOOP
          </span>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Get the latest from AVENRO.
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
            New arrivals, collections and exclusive updates.
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              className="w-full flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-85"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-[11px] text-text-muted/70">
           By subscribing, you agree to receive AVENRO emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;