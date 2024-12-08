
import { Lobster, Montserrat } from "next/font/google";

export const lobster = Lobster({
  subsets: ["latin"],
  weight: "400", // Specify weights if required
  display: "swap", // Optimize loading
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights you need
  display: "swap",
});
