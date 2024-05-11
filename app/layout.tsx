import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/utils/Layout";
const openSens=Open_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Hot Pizaa",
  description:"Sizzling slices of pepperoni dance atop a blanket of melted mozzarella, kissed by the fiery embrace of jalapenos. Each bite ignites a symphony of flavors, a spicy passion that lingers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSens.className} bg-bgColor`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
