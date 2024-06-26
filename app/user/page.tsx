"use client";
import { useGlobalAuth } from "@/context/AuthProvider";
import React, { useEffect } from "react";

const User = () => {
  const { user, getUserData } = useGlobalAuth();
  console.log("🚀 ~ file: page.tsx:7 ~ user:", user);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-center text-black">
        <h1 className='text-black '>{user?.user?._id} </h1>
        <h1 className='text-black '>{user?.user?.fullName} </h1>
        <h1 className='text-black '>{user?.user?.email} </h1>
    </div>
  );
};

export default User;
