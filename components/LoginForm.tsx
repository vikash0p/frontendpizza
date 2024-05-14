"use client";
import { ToastError, ToastSuccess } from "@/utils/react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z, ZodError } from "zod";

interface FormData {
  email: string;
  password: string;
}

// Define schema for form data
const formDataSchema = z.object({
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
});

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(!formData.email || !formData.password) return ToastError("Email and password are required");
    try {
      // Validate form data
      formDataSchema.parse(formData);
      // If validation passes, perform login logic here
      // console.log(formData);
      const res = await axios.post("https://backendpizza.vercel.app/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const data = await res.data;
      console.log("🚀 ~ file: LoginForm.tsx:58 ~ data:", data);
      if (res.status === 201 && data) {
        ToastSuccess(data.message);
        router.refresh();
        router.push("/user");
      }

      setError(null); // Reset error state
    } catch (err: any) {

      if (err instanceof ZodError) {
        setError(err.errors[0].message);
        ToastError(err.errors[0].message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="px-8 py-12 space-y-6 text-black border-2 border-textColor"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full py-2 mt-1 border-gray-300 rounded-md shadow-sm ps-4 focus:ring-textColor focus:border-textColor"
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full py-2 mt-1 border-gray-300 rounded-md shadow-sm ps-4 focus:ring-textColor focus:border-textColor"
            autoComplete="off"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="py-3 text-red-500">{error}</p>}
        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-white border border-transparent rounded-md shadow-sm bg-textColor hover:bg-textColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-textColor"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
