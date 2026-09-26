import React from "react";
import SectionsHeader from "@/components/SectionsHeader";
import Card from "@/components/Card";
import ViewAllButton from "@/components/ViewAllButton";

const BestSellers = () => {
  return (
    <section className="mt-10 w-full px-4 py-6 sm:px-6 lg:px-8">
      <SectionsHeader
        tag="BEST SELLERS"
        title="The pieces everyone is wearing."
      />

      {/* Products */}
      <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-3 md:gap-x-4 md:gap-y-10 lg:grid-cols-4 lg:gap-6">
        <Card
          title="Premium Girls T-Shirt"
          images={{
            primary: "/bestSellers/girl-t-shirt-back.png",
            secondary: "/bestSellers/girl-t-shirt.png",
          }}
        />

        <Card
          title="Premium Girls T-Shirt"
          images={{
            primary: "/bestSellers/skyblue-t-shirt-front.png",
            secondary: "/bestSellers/skyblue-t-shirt.png",
          }}
        />

        <Card
          title="Baggy Jeans"
          images={{
            primary: "/bestSellers/jean.png",
            secondary: "/bestSellers/jean-back.png",
          }}
        />

        <Card
          title="Essential Hoodie"
          images={{
            primary: "/bestSellers/hoddie-front.png",
            secondary: "/bestSellers/hoddie-back.png",
          }}
        />
      </div>

      <ViewAllButton/>
    </section>
  );
};

export default BestSellers;