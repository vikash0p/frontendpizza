import axios from "axios";
axios.defaults.withCredentials = true;
import { UserDetails } from "@/utils/types/interface";

export const fetchUserDetails = async (): Promise<UserDetails | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`;
  console.log("Requesting user details from:", url);
  try {
    const response = await axios.get<UserDetails>(url, {
      withCredentials: true,
    });
    console.log("🚀 ~ file: UserDetailsData.tsx:27 ~ response:", response);
    return response.data;
  } catch (err: any) {
    console.error("Error fetching user details:", err);
    return null;
  }
};

export const logoutUserDetails = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`;
  console.log("Requesting user details from:", url);
  try {
    const response = await axios.get(url, { withCredentials: true });
    console.log("🚀 ~ file: UserDetailsData.tsx:27 ~ response:", response);
    return response.data;
  } catch (err: any) {
    console.error("Error fetching user details:", err);
    return null;
  }
};
