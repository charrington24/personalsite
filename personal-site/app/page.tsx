"use client";
import React, { useEffect, useState } from "react";
import {
  favorit,
  moderatRegular,
} from "./fonts/fonts";
import Image from "next/image";
import headshot from "public/IMG_7295.jpg";
import { space } from "postcss/lib/list";
import { ExperienceCardNew } from "./components/ExperienceCardNew";

const Page = () => {
  const projectTitles = ["COURSICLE", "BITJOCKEY", "PLUG POWER", "KANM RADIO"];
  const projectImages = []
  const navbarLinks = ["About", "Work", "Contact"];
  const [headshotShown, setHeadshotShown] = useState(false);

  return (
    <div className={`bg-[#F3F0E9] min-h-screen`}>
      <div className={`justify-center items-center h-screen`}>
        <div className={`border-b-2 border-[rgba(200,200,200)] sticky top-0 sm:justify-start justify-between text-3xl flex flex-wrap text-[#581845] w-full ${favorit.className}`}>
          {navbarLinks.map((title) => {
            return (
              <span key={title} className={`sm:mr-[4%] hover:bg-white hover:border-white hover:text-black`}>
                {title}
              </span>
            )
          })}
        </div>
        <div className="flex flex-wrap md:py-40 md:px-40 px-10 py-10">
          <div
            className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full ${moderatRegular.className}`}
          >
            Hi! I'm Charlotte Harrington :)
            <div className={``}>
              {projectTitles.map((title) => {
                return (
                  <ExperienceCardNew key={title} title={title}/>
                );
              })}
            </div>
            {headshotShown && (
              <div
                className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}
              >
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
    </div>
  );
};

export default Page;
