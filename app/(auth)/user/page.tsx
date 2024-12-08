import React from 'react'
import { Metadata } from "next";
import UserDetailsData from "@/components/userComponents/UserDetailsData";
import { userMetadata } from "@/utils/meta/userMetadata";

export const metadata: Metadata = userMetadata;

const User = () => {

  return (
    <div className="w-full min-h-screen ">
      <UserDetailsData />
    </div>
  )
}

export default User
