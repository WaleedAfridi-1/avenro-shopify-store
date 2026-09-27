export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: "SHOP",
    links: [
      { label: "New In", href: "/collections/new-in" },
      { label: "Men", href: "/collections/men" },
      { label: "Women", href: "/collections/women" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "Sale", href: "/collections/sale" },
    ],
  },

  {
    title: "ABOUT",
    links: [
      { label: "About AVENRO", href: "/about" },
      { label: "Our Journal", href: "/journal" },
    ],
  },

  {
    title: "HELP",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },

  {
    title: "FOLLOW US",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com",
        external: true,
      },
      {
        label: "Facebook",
        href: "https://facebook.com",
        external: true,
      },
      {
        label: "TikTok",
        href: "https://tiktok.com",
        external: true,
      },
      {
        label: "Pinterest",
        href: "https://pinterest.com",
        external: true,
      },
    ],
  },
];

export const footerLegalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Shipping Policy",
    href: "/shipping",
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
  },
];