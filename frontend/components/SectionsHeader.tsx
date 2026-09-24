import React from 'react'

interface SectionsHeaderProps{
  tag : string;
  title : string;

}
const SectionsHeader = ({tag, title} : SectionsHeaderProps) => {
  return (
      <div className="w-full flex flex-col items-center  gap-3 py-6">
        <span className="text-primary text-xs  tracking-[0.15em]">
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

export default SectionsHeader
