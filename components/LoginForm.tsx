"use client";
import {
  ToastError,
  ToastSuccess,
} from "@/utils/utils-function/react-toastify";
import axios from "axios";
import Link from "next/link";
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
      message: "Password must include 1 special character and 1 number",
    })
    .trim(),
});

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
    if (!formData.email || !formData.password)
      return ToastError("Email and password are required");

    setLoading(true); // Start loading state
    try {
      // Validate form data
      formDataSchema.parse(formData);

      // Perform login logic
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      const data = res.data;
      if (data.success) {
        ToastSuccess(data.message);
        router.refresh();
        router.push("/user");
      } else {
        ToastError(data.message);
      }

      setError(null); // Reset error state
    } catch (err: any) {
      if (err instanceof ZodError) {
        setError(err.errors[0].message);
        ToastError(err.errors[0].message);
      } else {
        ToastError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-black px-8 py-12 bg-bgColor2 shadow-xl"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 py-2 ps-4 block w-full shadow-sm focus:ring-textColor focus:border-textColor border-gray-300 rounded-md"
            autoComplete="off"
            placeholder="vikash1@gmail.com"
            disabled={loading}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black"
          >
            Password <span className="text-red-600">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 py-2 ps-4 block w-full shadow-sm focus:ring-textColor focus:border-textColor border-gray-300 rounded-md"
            autoComplete="off"
            placeholder="vikash@123"
            disabled={loading}
          />
        </div>
        {error && <p className="text-red-500 py-3">{error}</p>}
        <div>
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-textColor hover:bg-textColor"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-textColor`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="pt-5">
            Create a new account!{" "}
            <span>
              <Link href="/register" className="underline text-blue-500">
                Register
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
