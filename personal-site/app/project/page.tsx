import { moderatRegular } from "../fonts/fonts";
import bitjockey from "../../public/bitjockey_both.webp";
import coursicle from "../../public/coursicle_mac.webp";
import kanm from "../../public/kanm_both.webp";

import { ExperienceCardNew } from "../components/ExperienceCardNew";
import { DynamicComponent } from "../components/DynamicComponent";
import { ProjectPage } from "../components/ProjectPage";


const Page = () => {
  const project = 
    {
      title: "Bitjockey",
      startDate: "June 2023",
      endDate: "Ongoing",
      description: "",
      role: "",
      context: "",
      team: [],
      contributions: "",
      stack: [],
      heroImage: bitjockey,
    }
    // {
    //   title: "Coursicle Chat",
    //   img: coursicle,
    // },
    // {
    //   title: "KANM Website",
    //   img: kanm,
    // },
  

  return (
    <div className="relative h-full">
      <div className={`bg-[#F3F0E9] flex flex-col`}>
        <div className={`justify-center items-center`}>
          <main className="flex-1">
            <div className="flex flex-wrap md:py-40 md:px-10 lg:px-40 px-4 py-10">
              <div
                className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full  ${moderatRegular.className}`}
              >
                <ProjectPage {...project}/>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
};

export default Page;
