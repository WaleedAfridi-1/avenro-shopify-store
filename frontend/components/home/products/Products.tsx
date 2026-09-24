import Link from "next/link";
import SectionsHeader from "@/components/SectionsHeader";
import Card from "@/components/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  return (
    <section className="py-12 px-2  lg:px-4 mt-10 w-full min-h-screen bg-background">
      {/* header  */}
      <SectionsHeader tag="NEW ARRIVALS" title="Fresh pieces, just added." />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-6 gap-x-3 md:gap-x-4 lg:gap-x-6">
        <Card
          title="black t-shirt"
          images={{
            primary: "/products/girl-white-t-shirt-back.png",
            secondary: "/products/girl-white-t-shirt.png",
          }}
        />

        <Card
          title="White Hodie"
          images={{
            primary: "/products/hodie-front.jpg",
            secondary: "/products/hodie-back.jpg",
          }}
        />
        <Card
          title="Gray Hand-Bag"
          images={{
            primary: "/products/gray-hand-bag.jpg",
            secondary: "/products/gray-hand-bag2.jpg",
          }}
        />
        <Card
          title="Cap"
          images={{
            primary: "/products/cap.jpg",
            secondary: "/products/cap.jpg",
          }}
        />
        <Card
          title="trouser"
          images={{
            primary: "/products/trouser1.jpg",
            secondary: "/products/trouser.jpg",
          }}
        />
        <Card
          title="Black t-shirt"
          images={{
            primary: "/products/black-t-shirt-front.jpg",
            secondary: "/products/black-t-shirt-back.jpg",
          }}
        />
      </div>
      <div className="mt-8 flex w-full justify-center sm:mt-10">
        <Link
          href={"/collections/new-arrivals"}
          className="
      group inline-flex items-center
      border-b border-border/5
      pb-1.5
      px-2
      cursor-pointer
      text-[11px] sm:text-xs
      font-medium
      uppercase
      tracking-[0.2em]
      text-foreground
      transition-colors duration-300
      hover:border-foreground
    "
        >
          View All
          <FaArrowRightLong
            className="
        ml-2
        text-xs
        transition-transform duration-300 ease-out
        group-hover:translate-x-1
      "
          />
        </Link>
      </div>
    </section>
  );
};

export default Products;
