
import CategoryCard from "./CategoryCard";
import { cardData, cardDataProps } from "./CategoryCardData";
import SectionsHeader from "@/components/SectionsHeader";


const ShopByCategory = () => {
  return (
    <section className="mt-12 bg-background w-full ">
      {/* Header  */}
      <SectionsHeader tag="SHOP BY CATEGORY" title="Explore The AVENRO Essentials."/>


      {/* card container   */}
      <div className="w-full flex overflow-x-auto gap-2 px-2 transition-all duration-300 ease-in-out py-6 scrollbar-none">
        {/* Card Item Wrapper */}
        { cardData.map((card : cardDataProps, id : number) => {
          return (
            
            <CategoryCard key={id} href={card.href} title={card.title} image={card.image}/>
          )
        })}

      </div>
    </section>
  );
};

export default ShopByCategory;
