import React from "react";
import Image from "next/image";
import Link from "next/link";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const digit2000 = localFont({
  src: 'fonts/01_Digit2000.otf',
  display: 'swap',
})

const Header = () => {
  return (
    <>


        <div className="mx-48">
        {/* <div className="p-2.5 flex flex-row gap-2.5 items-start justify-start absolute left-0 top-0 overflow-hidden"></div> */}
        {/* <div className="pt-px pr-[300px] pb-px pl-[300px] overflow-hidden"></div> */}
        <div
          className={`text-[#ffffff] text-left text-7xl ${digit2000.className}`}
        >
          hi, i’m charlotte harrington
        </div>
        </div>
    </>
  );
};

export default Header;