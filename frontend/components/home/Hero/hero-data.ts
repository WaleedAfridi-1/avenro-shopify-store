export interface Banner {
  id: number;
  image: string;
  mobileImage? : string;
  eyebrow: string;
  title: string;
  link: string;
}

export const banners: Banner[] = [
    {
    id: 1,
    image: "/collections/women.jpg",
    mobileImage : "/collections/womenMobile.jpg",
    eyebrow: "NEW IN",
    title: "THE EVERYDAY EDIT",
    link: "/collections/women",
  },
  { 
    id: 2,
    image: "/collections/mensEdit.jpg",
    mobileImage : "/collections/manMobileCollection.png",
    eyebrow: "MEN'S EDIT",
    title: "EVERYDAY ESSENTIALS",
    link: "/collections/men",
  },
  {
    id: 3,
    image: "/collections/accessoriesWomen.jpg",
    mobileImage : "/collections/accessoriesMobile.jpg",
    eyebrow: "ACCESSORIES",
    title: "THE FINISHING TOUCH",
    link: "/collections/accessories",
  },
  {
    id: 4,
    image: "/collections/womenforban.jpg",
    mobileImage : "/collections/womenMobile3.jpg",
    eyebrow: "WOMEN'S EDIT",
    title: "EFFORTLESSLY YOURS",
    link: "/collections/women",
  },
  {
    id: 5,
    image: "/collections/womenDesktop.jpg",
    mobileImage : "/collections/womeMobile2.jpg",
    eyebrow: "NEW SEASON",
    title: "EVERYDAY, ELEVATED",
    link: "/collections",
  },
];