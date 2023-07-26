"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import Popup from './components/Popup';

import Typewriter from 'react-ts-typewriter';
import { abstract, argentPixel, argentPixelItalic, digit2000, pixelOperator } from "./fonts/fonts";
import Layer from "./components/Layer";
import { title } from "process";
import Netscape from "./components/Netscape";
// import { setTimeout } from "timers/promises";

const Page = () => {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [location, setLocation] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [minipopup, setminipopup] = useState(false);
  const [curtop, setCurtop] = useState(0);
  const [curleft, setCurleft] = useState(0);
  // const [width, setWidth] = useState(null);

  // useEffect(()=>{
  //   console.log("hi")
  //   if(!location) return;//
  //   if(!width) return;
  //   // setWidth(window.innerWidth)
  //   if (width < 1300) {
  //     setminipopup(true)
  //     setIsPopup1Open(false)
  //   } else {
  //     setIsPopup1Open(true)
  //     setminipopup(false)
  //   }
  // }, [window.innerWidth])

  const handleScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    setTimeout(() => setLocation(true), 1000)
  }, [])

  return (
    <>
    <div>

        <div className=" my-[10%]">
          <div className="w-full h-[40vh] flex items-center justify-center">
          <div
            className={`text-[#4AF626] text-center self-center text-6xl sm:text-8xl flex-initial italic ${argentPixelItalic.className}`}
          >
            hey, i&apos;m charlotte
            {/* <Typewriter
              text={`hey, i'm charlotte`}
              delay={6000}
              speed={50}
              random={50}
              onFinished={() => {
                setTimeout(() => setLocation(true), 1000)
              }}
            /> */}
          </div>
          </div>
          {location && (
            <div
              ref={el => {
                // console.log(el)
                if (!el) return;
                //  if (!render){
                console.log(el.getBoundingClientRect())
                setCurtop(el.getBoundingClientRect().y)
                setCurleft(el.getBoundingClientRect().x)
                // console.log(width)
                // if (width < 1300) {
                setminipopup(true)
                handleScroll()
                //   setIsPopup1Open(false)
                // } else {
                  // setIsPopup1Open(true)
                }}
              //     setminipopup(false)
              //   }
              // }}
              className={`flex items-center justify-center w-full sm:h-[295px] h-[250px]`}>
              {minipopup &&
                <Popup top={`top-[${curtop}px]`} left={`left-[${curleft}px]`} title={"elevator_pitch.txt"} content={
                  <>
                    <span>i&apos;m a</span>
                    <span><Typewriter
                      text={[" UI/UX designer", " database architect", " full-stack developer"]}
                      delay={1500}
                      speed={50}
                      random={50}
                      onFinished={() => {
                        setTimeout(() => setIsPopup2Open(true), 1000)
                      }}
                    /></span>
                    <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world<br /></p>
                  </>
                } />
              }</div>
          )}

          {isPopup1Open && (
            <Layer suffix="px" translatex={-5} translatey={5} content={
              <Popup top={"top-[0%]"} left={"left-[0%]"} title={"elevator_pitch.txt"} content={
                <>
                  <span>i&apos;m a</span>
                  <span><Typewriter
                    text={[" UI/UX designer", " database architect", " full-stack developer"]}
                    delay={1500}
                    speed={50}
                    random={50}
                    onFinished={() => {
                      setTimeout(() => setIsPopup2Open(true), 1000)
                    }}
                  /></span>
                  <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world<br /></p>
                </>
              } />
            } frame={
              <Popup top={"top-[0%]"} left={"left-[0%]"} title={"elevator_pitch.txt"} content={
                <>
                  <span>i&apos;m a </span>
                  <span>front-end developer</span>
                  <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world<br /></p>
                </>
              } />
            } number={10} top={curtop} left={curleft} />
          )}
          {isPopup2Open && (
            <Netscape />
          )}
        </div>
      </div>
      </>
  );
};

export default Page;