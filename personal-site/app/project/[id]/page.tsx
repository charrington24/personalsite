
import Tag from "@/app/components/Tag";
import { moderatRegular } from "@/app/fonts/fonts";
import { client } from "@/app/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import React from "react";
import { Slide } from "react-slideshow-image";

type Project = {
  title: string;
  overview: any;
  problem: any;
  solution: any;
  technicalApproach: any;
  contributions: any;
  impact: any;
  stack: any;
  role: any;
  context: any;
  thumbnail: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  solutionImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  solutionImages: [
    {
      fields: {
        file: {
          url: string;
        };
      };
    }
  ];
};

async function fetchProject(id: string): Promise<Project | null> {
  try {
    const response = await client.getEntries({
      content_type: "project",
      "sys.id": id,
      limit: 1,
    });

    if (response.items.length === 0) return null;

    const item = response.items[0].fields;
    // console.log(item);

    let toReturn: Project = {
      title: item.title as string,
      overview: item.overview,
      problem: item.problem,
      solution: item.solution,
      technicalApproach: item.technicalApproach,
      contributions: item.contributions,
      impact: item.impact,
      stack: item.stack,
      role: item.role,
      context: item.context,
      thumbnail: item.thumbnail as any,
      solutionImage: item.solutionImage as any,
      solutionImages: item.solutionImagesPlural as any,
    };

    // console.log(toReturn);
    return toReturn;
  } catch (error) {
    console.error("Error fetching project from Contentful:", error);
    return null;
  }
}


 


export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await fetchProject(params.id);

  if (!project) {
    // notFound();
  }

  return (
    <div className="">
      {/* <h1 className="w-full font-bold sm:text-xl text-lg text-[#58184585]">
        PROJECT
      </h1> */}
      {project && (
        <div className="sm:text-3xl text-lg leading-relaxed">
          <div className="flex flex-wrap justify-between items-center gap-[10px]">
            <h1 className="flex text-5xl md:text-8xl w-fit">{project?.title}</h1>
            <div className="flex flex-wrap gap-[5px] w-fit">
              {project.stack.map((tag: any) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="leading-relaxed my-[10px]">
            {project?.overview}
          </div>
          {/* <div className="flex flex-wrap gap-[10px]">
            <div className="rounded-[10px] border-[#581845]  border border-solid">
              <div
                className={`text-2xl px-2 py-1  text-[#581845] flex-initial h-min text-left w-full ${moderatRegular.className}`}
              >
                Role: {project.role}
              </div>
              {/* <div className="px-2 py-1 text-xl">{project.role}</div> 
            </div>
            <div className="rounded-[10px] border-[#581845]  border border-solid">
              <div
                className={`text-2xl px-2 py-1 text-[#581845] flex-initial h-min text-left w-full ${moderatRegular.className}`}
              >
                Context: {project.context}
              </div>
              {/* <div className="px-2 py-1 text-xl">{project.context}</div> 
            </div>
          </div> */}

          <div className="my-4 mt-8">
            <h2 className="md:text-5xl text-3xl my-2 mb-4">Problem:</h2>
            <div className="leading-relaxed">{documentToReactComponents(project?.problem)}</div>
          </div>
          <div className="my-4 mt-8">
            <h2 className="md:text-5xl text-3xl my-2 mb-4">Solution:</h2>
            {project.solutionImage && (
              <>
                <div className="flex justify-center items-center">
                  <img
                    style={{}}
                    className="w-[100vw] justify-center items-center flex-initial my-4"
                    src={"https:" + project.solutionImage.fields.file.url}
                    alt="Device mockup"
                  />
                </div>
              </>
            )}
            <div className=" leading-relaxed">{documentToReactComponents(project?.solution)}</div>
          </div>
          <div className="mt-8 my-4">
            <h2 className="md:text-5xl text-3xl my-2 mb-4">Technical Approach</h2>
            <div className="leading-relaxed">{documentToReactComponents(project?.technicalApproach)}</div>
          </div>
          <div className="my-4 mt-8 rounded-[10px] border-[#581845]  border border-solid">
            <h2 className="md:text-5xl text-3xl my-4 px-2 pb-4 py-1 border-[#581845] border-b border-solid">
              My Contributions
            </h2>
            <div className="px-2 py-1 leading-relaxed">
              {documentToReactComponents(project?.contributions)}
            </div>
          </div>
          <div className="mt-8 my-4 ">
            <h2 className="md:text-5xl text-3xl my-2 mb-4">Impact</h2>
            <div className="leading-relaxed">{documentToReactComponents(project?.impact)}</div>
          </div>
        </div>
      )}
    </div>
  );
}
