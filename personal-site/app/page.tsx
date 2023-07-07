import React from "react";
import Image from "next/image";
import Link from "next/link";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const digit2000 = localFont({
  src: 'fonts/01_Digit2000.otf',
  display: 'swap',
})

const Page = () => {
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
          hi, i’m charlotte harrington
        </div>
        </div>
      </div>
    </>
  );
};

export default Page;