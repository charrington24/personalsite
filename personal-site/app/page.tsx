"use client"
import React, { useEffect, useState } from "react";
import { spaceMono } from "./fonts/fonts";
import Image from 'next/image'
import headshot from 'public/IMG_7295.jpg'


const Page = () => {

  const projectTitles = ["COURSICLE", "BITJOCKEY", "PLUG POWER", "KANM RADIO"]
  const navbarLinks = ["About", "Work", "Contact"]
  const [headshotShown, setHeadshotShown] = useState(false)

  return (
    <>
      <div className={`justify-center items-center h-screen`}>
        <div className={`bg-black border-b-2 border-[rgba(200,200,200)] sticky top-0 sm:justify-start justify-between text-3xl flex flex-wrap text-[rgba(225,225,225)] w-full ${spaceMono.className}`}>
          {navbarLinks.map((title) => {
            return (
              <span key={title} className={`sm:mr-[4%] hover:bg-white hover:border-white hover:text-black`}>
                {title}
              </span>
            )
          })}
        </div>
        <div className="flex flex-wrap ">
          <div className={`flex-initial sm:text-8xl text-6xl text-[rgba(225,225,225)] w-full ${spaceMono.className}`}>
            <div className="">
              <div className="flex flex-wrap justify-between bg-black">
                <div className={`flex-initial text-red-600`}>
                  HOWDY
                </div>
                <div className={`flex-initial text-red-600 justify-self-end`}>
                  I&apos;M
                </div>
                <div
                  onMouseEnter={() => setHeadshotShown(true)}
                  onMouseLeave={() => setHeadshotShown(false)}
                  className={`z-10 text-red-600 mx-[5%] flex-initial hover:bg-white hover:border-white hover:text-black`}>
                  CHARLOTTE
                </div>
                <div className={`flex-initial justify-self-end `}>
                  A
                </div>
                <div className={`flex-initial justify-self-end `}>
                  DEVELOPER
                </div>
                <div className={`flex-initial ml-[15%]`}>
                  WELCOME
                </div>
                <div className={`sm:mr-[25%] mr-[5%]`}>
                  TO
                </div>
                <div className={`flex-initial`}>
                  MY
                </div>
                <div className={`flex-initial mx-[5%]`}>
                  WEBSITE
                </div>
              </div>
            </div>
            <div className={``}>
              {projectTitles.map((title) => {
                return (
                  <div key={title} className={`text-[55px] sm:text-8xl duration-1000 truncate ease-in-out hover:h-96 border-t-2 border-[rgba(200,200,200)] w-full hover:bg-white hover:border-white hover:text-black`}>
                    {title}
                  </div>
                )
              })}
            </div>
            {headshotShown && (
              <div className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
              <Image
                className={`flex-initial top-[10%] m-auto sm:h-[80%] w-screen sm:w-auto`}
                src={headshot}
                // width={'50%'}
                // height={500}
                alt="Picture of Charlotte"
              />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;