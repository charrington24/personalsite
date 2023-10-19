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
import Typewriter from 'react-ts-typewriter';

const Page = () => {
  const projects = [
    {
      title: "Bitjockey",
      img: ["images/bitjockey_both.png"],
    },
    {
      title: "Coursicle Chat",
      img: ["images/coursicle_mac.png"],
    },
    {
      title: "KANM Website",
      img: ["images/kanm_both.png"],
    },
  ];

  const navbarLinks = ["About", "Work", "Contact"];
  const [headshotShown, setHeadshotShown] = useState(false);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [location, setLocation] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  return (
    <div className={`bg-[#F3F0E9] min-h-screen`}>
      <div className={`justify-center items-center h-screen`}>
        <div
          className={`border-b-2 border-[rgba(200,200,200)] sticky top-0 sm:justify-start justify-between text-3xl flex flex-wrap text-[#581845] w-full ${moderatRegular.className}`}
        >
          {navbarLinks.map((title) => {
            return (
              <span
                key={title}
                className={`sm:mr-[4%] hover:bg-white hover:border-white hover:text-black`}
              >
                {title}
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap md:py-40 md:px-10 lg:px-40 px-4 py-10">
          <div
            className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full ${moderatRegular.className}`}
          >
            <div className="my-10 flex flex-row items-center">
              <div className="sm:mx-[0px]">
                Hi! I'm Charlotte Harrington :)
              </div>
            </div>
            <div className="flex-wrap max-lg:text-4xl max-md:text-4xl max-sm:text-2xl text-6xl my-10">
              <span className="flex-initial">i&apos;m a</span>
              <span className="flex-initial">
                <span className="relative sm:min-w-[622px] rounded-[10px] border-solid border-[#581845] border mx-2 mr-6 px-2">
                <span className="-z-10 invisible mx-6">
                  {" "}full-stack developer{" "}
                </span>
                <span className="absolute left-[4px] top-0 flex-initial items-center z-20 ">
                  <Typewriter
                    text={[
                      " UI/UX designer",
                      " database architect",
                      " full-stack developer",
                    ]}
                    delay={1500}
                    speed={50}
                    random={50}
                    onFinished={() => {
                      // setTimeout(() => setIsPopup2Open(true), 1000);
                    }}
                  />
                </span>
                </span>
              </span>
              {/* {isPopup2Open && ( */}
              <span className="flex-initial transition ease-in-out">
                focused on building <b>efficient</b>, <b>beautiful</b>, and{" "}
                <b>useful</b> products for an innovating world
                <br />
              </span>
              {/* )} */}
            </div>
            <div className={`flex flex-wrap`}>
              {projects.map((p) => {
                return <ExperienceCardNew imageSrc={p.img} title={p.title} />;
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
