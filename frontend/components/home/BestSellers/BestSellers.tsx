import React from "react";
import SectionsHeader from "@/components/SectionsHeader";
import Card from "@/components/Card";

const BestSellers = () => {
  return (
    <section className="w-full  mt-10 py-6 px-2 lg:px-4">
      <SectionsHeader
        tag="BEST SELLERS"
        title="The pieces everyone is wearing."
      />

      {/* cards container  */}
      <div className=" grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 space-y-6 gap-x-2 md:gap-x-4 lg:gap-6">

        <Card
          title="premium girls T-shirt"
          images={{
            primary: "/bestSellers/girl-t-shirt-back.png",
            secondary: "/bestSellers/girl-t-shirt.png",
          }}
        />

        <Card
          title="premium girls T-shirt"
          images={{
            primary: "/bestSellers/skyblue-t-shirt-front.png",
            secondary: "/bestSellers/skyblue-t-shirt.png",
          }}
        />

        <Card
          title="Cap"
          images={{
            primary: "/bestSellers/cap.png",
            secondary: "/bestSellers/cap.png",
          }}
        />

        <Card
          title="Baggy jeans"
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
        <Card
          title="premium girls T-shirt"
          images={{
            primary: "/bestSellers/white-t-shirt.png",
            secondary: "/bestSellers/white-t-shirt-back.png",
          }}
        />
      </div>
    </section>
  );
};

export default BestSellers;
