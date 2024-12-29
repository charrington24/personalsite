
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
    <div className="justify-center items-center flex flex-col md:py-40 md:px-10 lg:px-40 px-4 py-10 mt-16 prose mx-auto p-6">
      {/* <h1 className="w-full font-bold sm:text-xl text-lg text-[#58184585]">
        PROJECT
      </h1> */}
      {project && (
        <div className="sm:text-xl text-lg">
          <div className="flex flex-wrap justify-between items-center gap-[10px]">
            <h1 className="flex text-5xl w-fit">{project?.title}</h1>
            <div className="flex flex-wrap gap-[5px] w-fit">
              {project.stack.map((tag: any) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="my-[10px] sm:text-xl tetx-lg">
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

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <div>{documentToReactComponents(project?.problem)}</div>
          </div>
          <div className="mt-4 ">
            <h2 className="text-2xl font-semibold">Solution</h2>
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
            <div>{documentToReactComponents(project?.solution)}</div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Technical Approach</h2>
            <div>{documentToReactComponents(project?.technicalApproach)}</div>
          </div>
          <div className="mt-4 rounded-[10px] border-[#581845]  border border-solid">
            <h2 className="text-2xl font-semibold px-2 py-1 border-[#581845] border-b border-solid">
              My Contributions
            </h2>
            <div className="px-2 py-1">
              {documentToReactComponents(project?.contributions)}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Impact</h2>
            <div>{documentToReactComponents(project?.impact)}</div>
          </div>
        </div>
      )}
    </div>
  );
}
