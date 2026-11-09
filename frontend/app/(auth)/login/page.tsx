import LoginForm from "@/components/auth/login/LoginForm";
import LoginImage from "@/components/auth/Image";
import React from "react";


const LoginPage = () => {
  return (
    <main className="w-full min-h-screen bg-background flex flex-col lg:flex-row items-stretch overflow-x-hidden">
      <LoginImage />
      <LoginForm />
    </main>
  );
};

export default LoginPage;