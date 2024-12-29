import { createClient } from "contentful";
import { ExperienceCardNew } from "./ExperienceCardNew";

type Project = {
  title: string;
  description: string;
  thumbnail: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  stack: string[];
  id: string;
};

interface Props {
  numProjects: number;
}

export default async function ProjectList({ numProjects }: Props) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  let projects;

  try {
    const response = await client.getEntries({
      content_type: "project",
      order: ["-fields.start"],
      limit: numProjects,
      select: [
        "fields.title",
        "fields.description",
        "fields.thumbnail",
        "fields.stack",
      ],
    });
    projects = response.items.map(
      (item) =>
        ({
          title: item.fields.title,
          description: item.fields.description,
          thumbnail: (item.fields.thumbnail as any)?.fields.file.url,
          stack: item.fields.stack,
          id: item.sys.id,
        } as any as Project)
    );
  } catch (err) {
    console.error("Error fetching data:", err);
  }



  //   console.log(projects)

  return (
    <div className={`flex flex-wrap gap-[10px] h-max-[500px]`}>
      {projects?.map((p: Project) => {
        return (
          <ExperienceCardNew
            tags={p.stack}
            description={p.description}
            projectPage={false}
            key={p.title}
            imageSrc={p.thumbnail as any}
            title={p.title}
            id={p.id}
          />
        );
      })}
    </div>
  );
}
