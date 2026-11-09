import Image from "next/image";
import React from "react";

const LoginImage = () => {
  return (
    <div className="relative hidden lg:block lg:w-5/12 xl:w-1/3 min-h-screen self-stretch">
      <Image 
        className="object-cover"
        fill
        priority
        alt="women store"
        src="/auth/login.jpg"
        sizes="(max-width: 1024px) 0vw, 40vw"
      />
      <div className="absolute inset-0 bg-overlay-light" />
    </div>
  );
};

export default LoginImage;