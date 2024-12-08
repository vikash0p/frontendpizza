import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/utils/global/Layout";
import { globalMetadata } from "@/utils/meta/globalMetadata";
import {lobster,montserrat} from "@/utils/utils-function/font-function"

export const metadata: Metadata = globalMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lobster.className} bg-bgColor`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
