import BestSellers from "@/components/home/BestSellers/BestSellers";
import Hero from "@/components/home/Hero/Hero";
import Products from "@/components/home/products/Products";
import ShopByCategory from "@/components/home/ShopByCategory/ShopByCategory";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col gap-4 items-center justify-center">
      <Hero/>
    
      <ShopByCategory/>

      <Products/>

      <BestSellers/>
    </main>
  );
}
