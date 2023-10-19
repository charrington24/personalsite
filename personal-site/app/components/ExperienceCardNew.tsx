import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import { moderatRegular } from "../fonts/fonts";
import Tag from "./Tag";
import Image from "next/image";


export interface IExperienceCardNewProps {
  title: string;
  imageSrc: typeof Image
}
export const ExperienceCardNew = ({
  ...props
}: IExperienceCardNewProps): JSX.Element => {
  return (
    <div className="my-2 py-4 px-2 rounded-[10px] border-solid border-[#581845] border gap-[10px] flex flex-wrap items-center justify-between sm:px-4 w-full">
      <div className="flex flex-wrap m-2">
        <div className="flex flex-row items-center">
            <Image
              className="hover:scale-[105%] duration-500 ease-in-out md:max-w-[700px] rounded flex-initial"
              src={props.imageSrc as any}
              alt="Device mockup"
            />
        </div>
      </div>
      <div
        className={`text-[#581845] flex-initial h-min mx-6 font-bold lg:text-5xl text-left  ${moderatRegular.className}`}
      >
        {props.title}
      </div>
    </div>
  );
};
