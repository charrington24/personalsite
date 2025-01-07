
import ProjectList from "../components/ProjectList";

const Page = () => {

  return (
    <div className="flex flex-wrap">
      <h1 className="sm:text-6xl text-4xl my-4">Projects</h1>
      <div
        className={`flex-initial sm:text-6xl text-4xl text-[#581845] w-full mt-10`}
      >
        <ProjectList numProjects={5} />
      </div>
    </div>
  );
};

export default Page;
