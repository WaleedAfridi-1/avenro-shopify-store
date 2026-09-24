import { IoIosHeartEmpty } from "react-icons/io";
import Image from "next/image";
import React from "react";



interface CardProps {
  title: string;
  images: {
    primary: string;
    secondary?: string; 
  };
  sizes?: {           
    sm?: string;      
    md?: string;
    lg?: string;
    xl?: string;
  };
}
const Card = ({ title, images, sizes }: CardProps) => {
  return (
    <article className=" w-full min-w-0">
      {/* Product Image */}
      <div className="group relative w-full aspect-3/4 overflow-hidden bg-surface-muted">
        {/* Sale Badge */}
        <span
          className="
            absolute left-2 top-2 z-20
            bg-foreground
            px-2 py-1
            text-[8px] sm:text-[9px]
            font-medium
            uppercase
            tracking-[0.15em]
            text-text-inverse
          "
        >
          Save 40%
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add Black T-Shirt to wishlist"
          className="
            opacity-0 translate-x-4
            group-hover:translate-0 group-hover:opacity-100
            absolute right-2 top-2 z-20
            flex h-8 w-8 sm:h-9 sm:w-9
            items-center justify-center
            rounded-full
            cursor-pointer
            text-foreground
            shadow-sm
            hover:backdrop-blur-sm
            transition-all duration-500
            hover:bg-surface/40
            hover:text-red-600
            hover:shadow-md
            active:scale-95
          "
        >
          <IoIosHeartEmpty className="text-lg sm:text-xl" />
        </button>

        {/* Front Image */}
        <Image
          src={images.primary}
          alt="Black T-Shirt"
          fill
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 768px) 33vw,
            (max-width: 1024px) 25vw,
            25vw
          "
          className="
            object-cover object-center
            transition-opacity duration-500 ease-out
            group-hover:opacity-0
          "
        />

        {/* Hover Image */}
        {images.secondary && (
          <Image
            src={images.secondary}
            alt="Black T-Shirt"
            fill
            sizes="
            (max-width: 640px) 50vw,
            (max-width: 768px) 33vw,
            (max-width: 1024px) 25vw,
            25vw
          "
            className="
            object-cover object-center
            hover:scale-110
            transition-all
            opacity-0
            duration-700 ease-out
            group-hover:opacity-100
          "
          />
        )}

        {/* Quick Add - Desktop */}
        <button
          type="button"
          className="
            absolute bottom-3 left-3 right-3 z-20
            hidden md:flex
            h-10 cursor-pointer
            items-center justify-center
            bg-surface/95
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-foreground
            opacity-0
            translate-y-2
            transition-all duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
            hover:bg-foreground
            hover:text-text-inverse
          "
        >
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-3 sm:pt-4">
        {/* title  */}
        <h2
          className="
            truncate
            text-xs sm:text-sm
            font-medium
            tracking-wide
            text-foreground
            uppercase md:pr-6 pr-2 lg:pr-8
          "
        >
          {title}
        </h2>

        {/* Product Color */}
        <p
          className="
            mt-1
            truncate
            text-[10px] sm:text-xs
            text-text-muted
          "
        >
          White · Black · Stone
        </p>

        {/* Price */}
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium text-red-500">
            Rs. 2,200
          </span>

          <span className="text-[10px] sm:text-xs text-text-muted line-through">
            Rs. 4,500
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
