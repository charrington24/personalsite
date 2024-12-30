// "use client"
import { DynamicComponent } from "./components/DynamicComponent";
import ProjectList from "./components/ProjectList";

// max-lg:text-4xl max-md:text-4xl max-sm:text-2xl max-[1125px]:text-5xl max-[425px]:text-2xl max-[375px]:text-base max-[330px]:text-sm

const Page = () => {
  const navbarLinks = ["About", "Work", "Contact"];

  return (
    <div
      className={`flex-initial  text-[#581845] w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal  `}
    >
      <section className="mb-6  leading-snug">
        <div className="flex flex-row items-center">
          <div className="sm:mx-[0px] ">hi! i&apos;m charlotte :)</div>
        </div>
        <div className="flex-wrap my-10  mt-4 lg:mt-16 md:mt-10 xl:mt-32">
          {/* <span className="flex-initial">i&apos;m a</span>
          <span
            className={`text-wrap sm:rounded-[10px] rounded-[5px] flex-nowrap w-max items-center z-20 `}
          > 
       
        </span> */}
          <span className="flex-initial transition ease-in-out">
            i&apos;m a full-stack developer building <i>efficient</i>, <i>beautiful</i>, and {" "}
            <i>useful</i> products for an innovating world
            <br />
          </span>
        </div>
      </section>
      <div className="">
        <h1 className="xl:mt-32 lg:mt-16 md:mt-10 mt-4 my-6">check out my work:</h1>
        <ProjectList numProjects={4} />
      </div>
    </div>
  );
};

export default Page;
