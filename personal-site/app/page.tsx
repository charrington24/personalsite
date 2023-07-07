"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Popup from './components/Popup';

import Typewriter from 'react-ts-typewriter';
import { digit2000 } from "./fonts/fonts";
// import { setTimeout } from "timers/promises";

const Page = () => {
  let message : string[] = ["hi", "i'm", "charlotte", "harrington"]
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <div className="w-full flex flex-col h-screen">
        <header className="flex h-[10%] w-full items-center justify-between p-4 bg-transparent">
          {/* hello */}
        </header>
        <div className="mx-[10%] my-[10%]">
          <div
            className={`w-[30%] text-[#ffffff] text-left text-8xl ${digit2000.className}`}
          >
            <Typewriter
              text = {`hi, i''m charlotte harrington`}
              // loop = {true}
              delay = {6000}
              speed={50}
              random={50}
              onFinished={() => {
                setTimeout(() => setIsModalOpen(true), 1000)
              }}
              // cursor={false}
            />
          </div>
        {isModalOpen && (
          <Popup />
        )}
        </div>
      </div>
    </>
  );
};

export default Page;