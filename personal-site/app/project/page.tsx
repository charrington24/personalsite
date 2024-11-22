import { moderatRegular } from "../fonts/fonts";
import bitjockey from "../../public/bitjockey_both.webp";
import ProjectList from "../components/ProjectList";


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
    <div className="relative flex flex-col md:py-40 md:px-10 lg:px-40 px-4 py-10 mt-16 prose mx-auto p-6">
      <div className={`bg-[#F3F0E9] flex flex-col`}>
        <div className={`justify-center items-center`}>
          <main className="flex-1">
            <div className="flex flex-wrap">
              <div
                className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full  ${moderatRegular.className}`}
              >
                <ProjectList numProjects={5}/>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
};

export default Page;
