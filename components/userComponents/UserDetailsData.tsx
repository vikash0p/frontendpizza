"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

axios.defaults.withCredentials = true;

interface UserDetails {
  message: string;
  success: boolean;
  user: {
    _id: string;
    fullName: string;
    email: string;
    role: string;
  };
}

const UserDetailsData: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUserDetails = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`;
    console.log("Requesting user details from:", url);
    try {
      const response = await axios.get<UserDetails>(url, { withCredentials: true,});
      console.log("🚀 ~ file: UserDetailsData.tsx:27 ~ response:", response);
      setUserDetails(response.data);
    } catch (err: any) {
      console.error("Error fetching user details:", err);
      setError(
        "Failed to load user details. " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome, {userDetails.user.fullName}</h1>
          <p>Email: {userDetails.user.email}</p>
          <p>Role: {userDetails.user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailsData;
