"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import localFont from 'next/font/local'
import Typewriter from 'react-ts-typewriter';

// Font files can be colocated inside of `app`
const digit2000 = localFont({
  src: 'fonts/01_Digit2000.otf',
  display: 'swap',
})

const Page = () => {
  let message : string[] = ["hi", "i'm", "charlotte", "harrington"]

  return (
    <>
      <div className="w-full flex flex-col h-screen">
        <header className="flex h-[10%] w-full items-center justify-between p-4 bg-transparent">
          {/* hello */}
        </header>
        <div className="mx-[30%] my-[8%]">
          <div
            className={` text-[#ffffff] text-left text-8xl ${digit2000.className}`}
          >
            <Typewriter
              text = "hi, i'm charlotte harrington"
              // loop = {true}
              delay = {6000}
              speed={50}
              random={50}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;