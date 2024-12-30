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
      <body className={`bg-[#F3F0E9] text-[#581845] ${inter.className}`}>
        <Header />
        <div className="relative h-full overflow-hidden">
          <div className={`flex flex-col`}>
            <div className={`justify-center items-center`}>
              <main className="flex-1">
                <div className="mt-16 lg:mt-10 lex flex-wrap md:py-10 py-10 px-2 lg:pl-52 md:pl-52 md:pr-10 lg:pr-10 lg:pr-[15%] xl:pr-[10%]">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
