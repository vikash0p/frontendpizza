
import { Lobster, Montserrat,Cormorant_Garamond,Aldrich  } from "next/font/google";

export const aldrich = Aldrich({
  subsets: ["latin"],
  weight: ["400"], // Specify weights if required
  display: "swap", // Optimize loading
})

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"], // Specify weights if required
  display: "swap", // Optimize loading
});

export const lobster = Lobster({
  subsets: ["latin"],
  weight: [ "400"], // Specify weights if required
  display: "swap", // Optimize loading
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights you need
  display: "swap",
});
