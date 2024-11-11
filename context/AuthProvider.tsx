"use client";

import { ToastError, ToastSuccess } from "@/utils/react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

axios.defaults.withCredentials = true;

interface User {
  message: string;
  success: boolean;
  user: {
    _id: string;
    fullName: string;
    email: string;
    role: string;
  };
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  getUserData: () => void;
  logoutUser: () => void;
};

interface childrenProps {
  children: React.ReactNode;
}
const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<childrenProps> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const getUserData = async () => {
    try {
      const res = await axios.get<User>("https://backendpizza-crjh.onrender.com/auth/user", {
        withCredentials: true,
      });
      const data = res.data;
      // console.log("🚀 ~ file: AuthProvider.tsx:44 ~ data:", data);
      if (res.status === 200 && data.success) {
        setUser(data);
        setIsAuthenticated(true);
      } else {
        // Handle authentication failure or other errors
        setIsAuthenticated(false);
        console.error("Authentication failed:", data.message);
      }
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const logoutUser = async () => {
    try {
      const res = await axios.get("https://backendpizza-crjh.onrender.com/auth/logout");
      const data = res.data;
      if (res.status === 200 && data.success) {
        ToastSuccess(data.message);
        setUser(null);
        setIsAuthenticated(false);

        router.refresh();
        router.push("/login");
      } else {
        // Handle authentication failure or other errors
        console.error("Logout failed:", data.message);
      }
    } catch (error:any) {
      ToastError(error.message)
      console.log("🚀 ~ file: AuthProvider.tsx:70 ~ error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, getUserData, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useGlobalAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
