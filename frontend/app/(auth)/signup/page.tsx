import AuthImage from '@/components/auth/Image'
import SignUpForm from '@/components/auth/signUp/SignUpForm'
import React from 'react'

const signUpPage = () => {
  return (
    <main className="w-full min-h-screen bg-background flex flex-col lg:flex-row items-stretch overflow-x-hidden">
      <AuthImage/>
      <SignUpForm/>
    </main>
  )
}

export default signUpPage
