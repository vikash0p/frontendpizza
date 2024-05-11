"use client";
import { ToastError, ToastSuccess } from "@/utils/react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { z, ZodError } from "zod";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

// Define schema for form data
const formDataSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" })
    .trim(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .trim()
    .includes("@", { message: "Must include @" })
    .endsWith(".com", { message: "Only .com domains allowed" }),
  password: z
    .string()
    .min(6)
    .regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{5,}$/, {
      message: "Password include 1 Special character and 1 number",
    })
    .trim(),
  role: z.string().min(1),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router=useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      formDataSchema.parse(formData);
      // console.log(formData);
      const res = await axios.post("http://localhost:5000/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      const data= await res.data;
      if(res.status === 201 && data){
        ToastSuccess(data.message);
        router.refresh();
        router.push('/login')
      }
      // console.log("🚀 ~ file: RegisterForm.tsx:69 ~ data:", data);
      setError(null); // Reset error state
    } catch (err:any) {
      ToastError(err.message)
      console.log("🚀 ~ file: RegisterForm.tsx:77 ~ err:", err);
      if (err instanceof ZodError) {
        // Handle validation errors
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-2xl p-4 mt-20 border-textColor border-2 ">
      <form onSubmit={handleSubmit} className="space-y-6 text-black">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-textColor"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 py-2 ps-3  block w-full shadow-sm focus:ring-textColor focus:border-textCoring-textColor border-gray-300 rounded-md"
            autoComplete="off"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-textColor"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 py-2 ps-3 block w-full shadow-sm focus:ring-textColor focus:border-textCoring-textColor border-gray-300 rounded-md"
            autoComplete="off"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-textColor"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 py-2 ps-3 block w-full shadow-sm focus:ring-textColor focus:border-textCoring-textColor border-gray-300 rounded-md"
            autoComplete="off"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-textColor"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 py-2 ps-3 block w-full shadow-sm focus:ring-textColor focus:border-textCoring-textColor border-gray-300 rounded-md"
            autoComplete="off"

          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 ps-3 px-4 border border-transparent rounded-md shadow-sm  bg-textColor text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-textColor"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
