"use client"
import Link from "next/link";
import React from "react";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
  return (
    <section className="w-full bg-surface border min-h-screen lg:w-7/12 xl:w-2/3 py-8 lg:px-12 md:px-8 px-6 flex flex-col justify-center items-center">
      {/* Form Container */}
      <div className="w-full max-w-md flex flex-col items-center gap-6 my-auto">
        
        {/* Header & Tabs */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-sm md:text-base text-text-muted tracking-wide">
            Sign in to your Evenro account
          </p>

          {/* Login & Sign Up Toggle Tabs */}
          <div className="flex mt-4 font-semibold h-11 w-full max-w-xs rounded-lg bg-surface-muted p-1 border border-border">
            <button className="flex-1 rounded-md h-full py-1 bg-accent text-accent-foreground shadow-sm cursor-pointer transition-all duration-300">
              Login
            </button>
            <Link
              href="/sign-up"
              className="flex-1 flex items-center justify-center rounded-md h-full py-1 text-text-muted hover:text-text-primary cursor-pointer transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Form Inputs */}
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 w-full"
        >
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm text-text-primary font-medium tracking-wide"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="rounded-md border border-input-border bg-input px-4 py-2.5 text-text-primary focus:ring-2 focus:ring-input-focus focus:outline-none transition-all duration-300 placeholder:text-input-placeholder"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm text-text-primary font-medium tracking-wide"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="•••••••••"
              className="rounded-md border border-input-border bg-input px-4 py-2.5 text-text-primary focus:ring-2 focus:ring-input-focus focus:outline-none transition-all duration-300 placeholder:text-input-placeholder"
            />
          </div>

          {/* Checkbox and Forgot */}
          <div className="flex justify-between items-center px-1 text-sm">
            <label className="flex gap-2 items-center cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-input-border text-accent focus:ring-ring cursor-pointer accent-accent"
              />
              <span className="text-text-muted">Remember me</span>
            </label>
            <Link
              href="/forgot"
              className="text-text-muted font-medium tracking-wide hover:text-text-primary transition-colors"
            >
              Forgot?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="mt-2">
            <button
              type="submit"
              className="bg-accent w-full py-2.5 font-bold tracking-wider cursor-pointer rounded-md hover:bg-accent-hover active:scale-[0.99] transition-all duration-300 text-accent-foreground shadow-sm"
            >
              Login
            </button>
          </div>
        </form>

        {/* Google Section */}
        <div className="w-full flex flex-col gap-4">
          <div className="relative flex items-center justify-center gap-2">
            <span className="h-[1px] flex-1 bg-border"></span>
            <p className="text-xs uppercase tracking-wider text-text-subtle font-medium">OR</p>
            <span className="h-[1px] flex-1 bg-border"></span>
          </div>
          
          <GoogleButton />
        </div>

        {/* Footer Redirect */}
        <div className="flex gap-1.5 justify-center items-center text-sm pt-1">
          <span className="text-text-muted">Don't have an account?</span>
          <Link href="/sign-up" className="text-text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LoginForm;