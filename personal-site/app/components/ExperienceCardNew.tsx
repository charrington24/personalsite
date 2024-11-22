import { moderatRegular } from "../fonts/fonts";
import Image, { StaticImageData } from "next/image";
import Tag from "./Tag";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router";
import Link from "next/link";

export interface IExperienceCardNewProps {
  title: string;
  imageSrc?: StaticImageData;
  projectPage: boolean;
  description: string;
  tags: string[];
  id: string;
}
export const ExperienceCardNew = ({
  ...props
}: IExperienceCardNewProps): JSX.Element => {
  return (
    <Link
      key={props.id}
      href={`/project/${props.id}`}
      className="bg-[#F3F0E9] hover:scale-[105%] py-2 sm:py-4 gap-[10px] max-w-[100vw] duration-500 ease-in-out cursor-pointer flex flex-col rounded-[10px] border-[#581845]  border border-solid"
    >
      <div
        className={`border-[#581845] border-b border-solid text-[#581845] px-2 sm:px-4 pb-2 sm:pb-4 flex-initial h-min text-3xl lg:text-5xl text-left w-full ${moderatRegular.className}`}
      >
        {props.title}
      </div>

      {props.imageSrc && (
        <div className="px-2 sm:px-4 border-[#581845] border-b border-solid">
          <div className="flex flex-wrap m-2">
            <div className="flex flex-row items-center">
              <img
                style={{
                  WebkitFilter: "drop-shadow(.5px 1px 1px #555)",
                  filter: "drop-shadow(.5px 1px 1px #555)",
                }}
                className="md:max-w-[35vw] max-w-[80vw] rounded flex-initial"
                src={"https:" + props.imageSrc}
                alt="Device mockup"
              />
            </div>
          </div>
        </div>
      )}

      {/* {props.projectPage && ( */}
      <div className="px-2 sm:px-4">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap gap-[5px]">
            {props.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap md:text-3xl text-xl md:w-max-[900px] text-wrap box-border w-fit">
            {props.description}
          </div>
        </div>
      </div>
      {/* )} */}
    </Link>
  );
};
