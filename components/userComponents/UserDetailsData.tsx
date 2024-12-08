"use client";
import React, { useEffect } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { UserDetails } from "@/utils/types/interface";
import { fetchUserDetails, logoutUserDetails } from "@/utils/fetch-data/getUser";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "@/Redux-toolkit/slice/userSlice";
import { ToastSuccess } from "@/utils/utils-function/react-toastify";
import { useRouter } from "next/navigation";
import { RootState } from "@/Redux-toolkit/store";

const UserDetailsData: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  // Use TanStack Query with explicit type for query result
  const {
    data: userDetails,
    error,
    isError,
    isLoading,
  }: UseQueryResult<UserDetails, Error> = useQuery({
    queryKey: ["userDetails"],
    queryFn: fetchUserDetails,
  });

  useEffect(() => {
    if (userDetails) {
      dispatch(getUser(userDetails));
    }
  }, [dispatch, userDetails]);

  // Render loading state
  if (isLoading) return <p>Loading...</p>;

  // Render error state
  if (isError) return <div>Error: {error.message}</div>;

  // Render user details if available

  const logoutUserFunctionHandler = async () => {
    try {
      const response = await logoutUserDetails();
      console.log("🚀 ~ file: UserDetailsData.tsx:34 ~ response:", response);
      if (response?.success === true) {
        dispatch(logoutUser());
        router.push("/login");
        ToastSuccess(response.message);
      }
    } catch (error) {
      console.log("🚀 ~ file: UserDetailsData.tsx:35 ~ error:", error);
    }
  };

  return (
    <div className="max-w-2xl m-auto  min-h-screen ">
      <div className="flex flex-col justify-center items-center w-full mt-28 ">
        {userData ? (
          <div>
            <h1>Welcome, {userData.user.fullName}</h1>
            <p>Email: {userData.user.email}</p>
            <p>Role: {userData.user.role}</p>

            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold"
              onClick={logoutUserFunctionHandler}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>No user details available.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailsData;
