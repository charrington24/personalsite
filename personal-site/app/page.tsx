"use client"
import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import Popup from './components/Popup';

import Typewriter from 'react-ts-typewriter';
import { abstract, argentPixel, digit2000, pixelOperator } from "./fonts/fonts";
import Layer from "./components/Layer";
import { title } from "process";
import Netscape from "./components/Netscape";
// import { setTimeout } from "timers/promises";

const Page = () => {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  return (
    <div>
      <div className="w-full flex flex-wrap h-screen">
        {/* <header className="flex h-[10%] w-full items-center justify-between p-4 bg-transparent">
          {/* hello */}
        {/* </header> */} 
        <div className="mx-[10%] my-[10%]">
          <div
            className={`sm:w-[630px] w-[60%] text-[#4AF626] text-left text-5xl sm:text-8xl flex-initial italic ${argentPixel.className}`}
          >
            <Typewriter
              text={`hi, i'm charlotte harrington`}
              delay={6000}
              speed={50}
              random={50}
              onFinished={() => {
                setTimeout(() => setIsPopup1Open(true), 1000)
              }}
            />
          </div>
          {/* {isPopup1Open && ( */}
            {/* // <div className={`flex-initial`}> */}
            {/* <Layer suffix="%" translatex={-.5} translatey={1} content={
              <Popup top={"top-[15%]"} left={"left-[55%]"} title={"elevator_pitch.txt"} content={
                <>
                  <span>i'm a</span>
                  <span><Typewriter
                    text={[" UI/UX designer", " database architect", " full-stack developer"]}
                    delay={1500}
                    speed={50}
                    random={50}
                    onFinished={() => {
                      setTimeout(() => setIsPopup2Open(true), 1000)
                    }}
                  /></span>
                  <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world<br/></p>
                </>
              } />
            } frame={
              <Popup top={"top-[15%]"} left={"left-[55%]"} title={"elevator_pitch.txt"} content={
                <>
                  <span>i'm a </span>
                  <span>front-end developer</span>
                  <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world<br/></p>
                </>
              } />
            } number={10} top={10} left={55} /></div>
          )} */}
          {/* {isPopup2Open && ( */}
            <Netscape />
          {/* // )} */}
        </div>
      </div>
    </div>
  );
};

export default Page;