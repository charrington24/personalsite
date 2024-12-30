import { moderatRegular } from "../fonts/fonts";
import { StaticImageData } from "next/image";
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
      className="snap-start md:scroll-ml-52 scroll-ml-2 box-border mr-4 group max-w-[85vw] lg:max-w-[100%] md:max-w-[100vw] duration-500 ease-in-out cursor-pointer flex flex-col relative"
    >
      <div
        className={`absolute justify-center items-center box-border flex w-[100%] h-[100%] text-7xl md:text-8xl lg:text-7xl xl:text-8xl min-[1600px]:text-9xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 group-hover:bg-gradient-to-r from-[#A36CA3]/[.5] to-[#4A214A]/[.5] border-[#581845] border border-solid rounded-2xl`}
      >
        <div className={'flex flex-initial max-w-[90%] overflow-ellipses'}>
          <div className={'text-white'}>
            {props.title}
          </div>
        </div>
      </div>

      {props.imageSrc && (
        <div className="">
          <div className="flex flex-wrap justify-center items-center transition-opacity duration-300 ">
            <div className="flex flex-row items-center"
              // style={{backgroundImage: "https:" + props.imageSrc}}
            >
              <img
                style={{
       
                }}
                className="border-[#581845] border border-solid shadow-lg rounded-2xl md:max-h-[50vh] flex-initial"
                src={"https:" + props.imageSrc}
                alt="Device mockup"
              />
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};
