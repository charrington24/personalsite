import { moderatRegular } from "./fonts/fonts";
import bitjockey from "../public/bitjockey_both.webp";
import coursicle from "../public/coursicle_mac.webp";
import kanm from "../public/kanm_both.webp";

import { ExperienceCardNew } from "./components/ExperienceCardNew";
import { DynamicComponent } from "./components/DynamicComponent";
import Head from "next/head";
import { Footer } from "./components/Footer";

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
    <div className="relative h-full">
      <div className={`bg-[#F3F0E9] flex flex-col`}>
        <div className={`justify-center items-center`}>
          <main className="flex-1">
            <div className="flex flex-wrap md:py-40 md:px-10 lg:px-40 px-4 py-10">
              <div
                className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full  ${moderatRegular.className}`}
              >
                <section className="mb-6">
                  <div className="my-10 flex flex-row items-center">
                    <div className="sm:mx-[0px] lg:text-8xl max-[1024px]:text-7xl max-md:text-6xl max-sm:text-5xl">
                      Hi! I&apos;m Charlotte Harrington :)
                    </div>
                  </div>
                  <div className="flex-wrap max-lg:text-4xl max-md:text-4xl max-sm:text-2xl max-[1125px]:text-5xl max-[425px]:text-2xl max-[375px]:text-base max-[330px]:text-sm my-10">
                    <span className="flex-initial">i&apos;m a</span>
                    <span className="flex-initial">
                      <span className="relative sm:rounded-[10px] rounded-[5px] border-solid border-[#581845] border mx-2 min-[1125px]:mr-6 px-2">
                        <span className="-z-10 invisible lg:mx-4 mx-2">
                          {" "}
                          full-stack developer{" "}
                        </span>
                        <span className="absolute left-[4px] top-[-10x] flex-initial items-center z-20 ">
                          <DynamicComponent />
                        </span>
                      </span>
                    </span>
                    <span className="flex-initial transition ease-in-out">
                      focused on building <b>efficient</b>, <b>beautiful</b>,
                      and <b>useful</b> products for an innovating world
                      <br />
                    </span>
                  </div>
                </section>
                <h1 className="font-bold sm:text-2xl text-lg text-[#58184585] my-2">
                  RECENT WORK
                </h1>
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
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
};

export default Page;
