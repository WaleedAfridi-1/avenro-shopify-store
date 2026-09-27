import BestSellers from "@/components/home/BestSellers/BestSellers";
import Essentials from "@/components/home/Essentials/Essentials";
import Hero from "@/components/home/Hero/Hero";
import Newsletter from "@/components/home/newsLetter/NewsLetter";
import Products from "@/components/home/products/Products";
import ShopByCategory from "@/components/home/ShopByCategory/ShopByCategory";
import Testimonials from "@/components/home/testimonials/Testimonials";
import WhyUS from "@/components/home/whyUs/WhyUS";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col gap-4 items-center justify-center">
      <Hero/>
    
      <ShopByCategory/>

      <Products/>

      <BestSellers/>

      <Essentials/>

      <WhyUS/>

      <Testimonials/>

      <Newsletter/>
    </main>
  );
}
