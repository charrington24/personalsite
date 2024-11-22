import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { moderatRegular } from "./fonts/fonts";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { createClient } from "contentful";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charlotte Harrington",
  description: "Charlotte is a student/software engineer.",
};

export const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE_ID!,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
    <html className="bg-[#F3F0E9]" lang="en">
      <body className={`bg-[#F3F0E9] text-[#581845] ${moderatRegular.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>

  );
}
