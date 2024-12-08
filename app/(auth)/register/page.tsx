import RegisterForm from '@/components/RegisterForm'
import React from 'react'

import { Metadata } from "next";
import { registerMetadata } from "@/utils/meta/RegisterMetadata";

export const metadata: Metadata =registerMetadata;

const Register = () => {
  return (
    <div className='min-h-screen w-full px-4'>
      <RegisterForm />
    </div>
  )
}

export default Register
