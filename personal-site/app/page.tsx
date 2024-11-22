import { moderatRegular, spaceMono } from "./fonts/fonts";
import bitjockey from "../public/bitjockey_both.webp";
import coursicle from "../public/coursicle_mac.webp";
import kanm from "../public/kanm_both.webp";

import { ExperienceCardNew } from "./components/ExperienceCardNew";
import { DynamicComponent } from "./components/DynamicComponent";
import ProjectList from "./components/ProjectList";


const Page = () => {

  const navbarLinks = ["About", "Work", "Contact"];

  return (
    <div className="relative h-full">
      <div className={`flex flex-col`}>
        <div className={`justify-center items-center`}>
          <main className="flex-1">
            <div className="flex flex-wrap md:py-40 md:px-10 lg:px-40 px-4 py-10">
              <div
                className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full  ${moderatRegular.className}`}
              >
                <section className="mb-6">
                  <div className="md:my-10 mt-16 flex flex-row items-center">
                    <div className="sm:mx-[0px] lg:text-8xl max-[1024px]:text-7xl max-md:text-6xl max-sm:text-5xl">
                      Hi! I&apos;m Charlotte Harrington :)
                    </div>
                  </div>
                  <div className="flex-wrap max-lg:text-4xl max-md:text-4xl max-sm:text-2xl max-[1125px]:text-5xl max-[425px]:text-2xl max-[375px]:text-base max-[330px]:text-sm my-10">
                    <span className="flex-initial">i&apos;m a</span>
                    {/* <span className="flex-initial">
                      <span className=""> */}
                        {/* <span className={`-z-10 invisible lg:mx-4 mx-4`}>
                          {" "}
                          full-stack developer{" "}
                        </span> */}
                        <span className={`text-wrap sm:rounded-[10px] rounded-[5px] flex-nowrap w-max items-center z-20 `}>
                          <DynamicComponent />
                        </span>
                      {/* </span>
                    </span> */}
                    <p className="flex-initial transition ease-in-out">
                      focused on building <b>efficient</b>, <b>beautiful</b>,
                      and <b>useful</b> products for an innovating world
                      <br />
                    </p>
                  </div>
                </section>
                <h1 className="font-bold sm:text-2xl text-lg text-[#58184585] my-2">
                  RECENT WORK
                </h1>
                <ProjectList numProjects={3}/>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
};

export default Page;
