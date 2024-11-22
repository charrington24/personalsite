import { client } from "@/app/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  overview: any;
  problem: any;
  solution: any;
  technicalApproach: any;
  contributions: any;
  impact: any;
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
      {project && (
        <div>
          <h1 className="text-3xl font-bold">{project?.title}</h1>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div>{project?.overview}</div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <div>{documentToReactComponents(project?.problem)}</div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <div>{documentToReactComponents(project?.solution)}</div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Technical Approach</h2>
            <div>{documentToReactComponents(project?.technicalApproach)}</div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Contributions</h2>
            {documentToReactComponents(project?.contributions)}
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
