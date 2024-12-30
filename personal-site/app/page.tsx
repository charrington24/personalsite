// "use client"
import Link from "next/link";
import { DynamicComponent } from "./components/DynamicComponent";
import ProjectList from "./components/ProjectList";

// max-lg:text-4xl max-md:text-4xl max-sm:text-2xl max-[1125px]:text-5xl max-[425px]:text-2xl max-[375px]:text-base max-[330px]:text-sm

const Page = () => {
  const navbarLinks = ["About", "Work", "Contact"];

  return (
    <div
      className={`flex-initial text-[#581845] w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal  `}
    >
      <section className="mb-6">
        <div className="flex flex-row items-center">
          <div className="sm:mx-[0px] ">hi! i&apos;m charlotte :)</div>
        </div>
        <div className="flex-wrap my-2 sm:my-4 md:my-6">
          <div className="flex-initial transition ease-in-out text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
            i&apos;m a new grad full-stack developer building <i>efficient</i>,{" "}
            <i>beautiful</i>, and <i>useful</i> products for an innovating
            world.
            <br />
          </div>
        </div>
      </section>
      <div className="">
        <h1 className="lg:mt-16 md:mt-10 mt-4 md:my-4">a little about me:</h1>
        <div className="my-2 sm:my-4 md:my-6 flex-initial transition ease-in-out text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
          &#x1F393; just graduated from Texas A&M with a BS in{" "}
          <b>Computer Science</b> + minor in <b>Cybersecurity</b> + emphasis on{" "}
          <b>Chinese language</b> (dec &apos;24)
          <br />
        </div>
        <div className="flex-initial transition ease-in-out text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  leading-tight">
          &#x1F4BB; 3 years of internship + volunteer experience in database
          management, ui/ux design, and full-stack development. <br />
        </div>
      </div>
      <div className="">
        <h1 className="lg:mt-16 md:mt-10 mt-4 my-4">
          check out my recent work:
        </h1>
        <ProjectList numProjects={4} />
      </div>
      <div className="">
        <h1 className="lg:mt-16 md:mt-10 mt-4 md:my-4">what&apos;s cooking:</h1>
        <div className="my-2 sm:my-4 md:my-6 flex-initial transition ease-in-out text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
          &#x270D; turning this site into a blog (it already pulls my projects
          from contentful, i just have to write some posts...)
          <br />
        </div>
        <div className="flex-initial transition ease-in-out text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  leading-tight">
          &#x1F004; retooling{" "}
          <Link key="6cPaoCaaqtd99QG0qAe46E" href={`/project/6cPaoCaaqtd99QG0qAe46E`} className={'hover:font-bold '}>
            zenji
          </Link>{" "}
          (my capstone project) for chinese <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
