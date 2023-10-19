import { moderatRegular } from "./fonts/fonts";

import React, { useEffect, useState } from "react";

import bitjockey from "../public/images/bitjockey_both.png";
import coursicle from "../public/images/coursicle_mac.png";
import kanm from "../public/images/kanm_both.png";

import Image from "next/image";
import headshot from "public/IMG_7295.jpg";
import { ExperienceCardNew } from "./components/ExperienceCardNew";
import Typewriter from "react-ts-typewriter";

const Page = () => {
  const projects = [
    {
      title: "Bitjockey",
      img: bitjockey,
    },
    {
      title: "Coursicle Chat",
      img: coursicle,
    },
    {
      title: "KANM Website",
      img: kanm,
    },
  ];

  const navbarLinks = ["About", "Work", "Contact"];

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
          <section
            className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full border-b ${moderatRegular.className}`}
          >
            <div className="my-10 flex flex-row items-center">
              <div className="sm:mx-[0px]">
                Hi! I&apos;m Charlotte Harrington :)
              </div>
            </div>
            <div className="flex-wrap max-lg:text-4xl max-md:text-4xl max-sm:text-2xl max-[1125px]:text-5xl max-[425px]:text-xl max-[375px]:text-base max-[330px]:text-sm my-10 leading-snug">
              <span className="flex-initial">i&apos;m a</span>
              <span className="flex-initial">
                <span className="relative sm:rounded-[10px] rounded-[5px] border-solid border-[#581845] border mx-2 min-[1125px]:mr-6 px-2">
                  <span className="-z-10 invisible lg:mx-6">
                    {" "}
                    full-stack developer{" "}
                  </span>
                  <span className="absolute left-[4px] top-[-10x] flex-initial items-center z-20 ">
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

              <span className="flex-initial transition ease-in-out">
                focused on building <b>efficient</b>, <b>beautiful</b>, and{" "}
                <b>useful</b> products for an innovating world
                <br />
              </span>
            </div>
            <div className={`flex flex-wrap`}>
              {projects.map((p) => {
                return (
                  <ExperienceCardNew
                    key={p.title}
                    imageSrc={p.img as any}
                    title={p.title}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
