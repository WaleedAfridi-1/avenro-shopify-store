import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <div className="w-full transition-transform active:scale-[0.99]">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-md border border-input-border bg-input py-2.5 text-sm font-medium text-text-primary shadow-sm hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-ring transition-all cursor-pointer"
      >
        <FcGoogle className="h-5 w-5" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;