import React from 'react'
import Image from 'next/image';

const NewsLetterImage = () => {
  return (
        <div className="relative h-64 w-full sm:h-80 lg:h-auto lg:min-h-125">
          <Image
            src="/newsLetter/newsletter.jpg"
            alt="AVENRO essentials styled for everyday wear"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
  )
}

export default NewsLetterImage
