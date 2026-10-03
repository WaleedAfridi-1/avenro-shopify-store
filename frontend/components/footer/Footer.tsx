import Link from 'next/link';
import { footerLegalLinks, footerLinks } from './FooterData';

const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t border-border/15 bg-foreground text-text-inverse">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-360 px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {/* Brand */}
        <div className="flex flex-col items-start pb-10 sm:pb-12">
          <Link
            href="/"
            aria-label="AVENRO home"
            className="text-2xl font-semibold tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-inverse/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground md:text-3xl"
          >
            AVENRO
          </Link>

          <p className="mt-2 text-sm tracking-wide text-text-inverse/55">
            Everyday, Elevated.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10 lg:py-14">
          {footerLinks.map((column) => (
            <nav key={column.title} aria-label={`${column.title} links`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-inverse/90">
                {column.title}
              </p>

              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-sm text-text-inverse/55 transition-colors duration-200 hover:text-text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-inverse/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex text-sm text-text-inverse/55 transition-colors duration-200 hover:text-text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-inverse/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-border/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-inverse/45">
            © {new Date().getFullYear()} AVENRO. All rights reserved.
          </p>

          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-inverse/45 transition-colors duration-200 hover:text-text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-inverse/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;