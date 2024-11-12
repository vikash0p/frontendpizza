"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Ensure credentials are included for all axios requests
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
    try {
      const response = await axios.get<UserDetails>(
        "https://backendpizza-crjh.onrender.com/auth/user",
        { withCredentials: true }
      );
      setUserDetails(response.data);
    } catch (err) {
      console.error("Error fetching user details:", err);
      setError("Failed to load user details." + err);
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
          <h1>Welcome, {userDetails?.user.fullName}</h1>
          <p>Email: {userDetails?.user.email}</p>
          {/* Display other details if available */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailsData;
