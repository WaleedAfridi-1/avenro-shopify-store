import React from 'react'

interface CategoryHeaderProps{
  tag : string;
  title : string;

}
const CategoryHeader = ({tag, title} : CategoryHeaderProps) => {
  return (
      <div className="w-full flex flex-col items-center  gap-3 py-6">
        <span className="text-primary text-sm font-mono tracking-[0.25em]">
          {tag}
        </span>
        <div className="w-4/5">
          <h1 className="text-foreground text-center text-xl md:text-2xl lg:text-3xl md:tracking-wider font-semibold lg:tracking-widest uppercase ">
            {title}
          </h1>
        </div>
      </div>
  )
}

export default CategoryHeader
