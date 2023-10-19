import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import { moderatRegular } from "../fonts/fonts";
import Tag from "./Tag";

export interface IExperienceCardNewProps {
  title: string;
  imageSrc: string[];
}

export const ExperienceCardNew = ({
  ...props
}: IExperienceCardNewProps): JSX.Element => {
  return (
    <div className="my-2 py-4 rounded-[10px] border-solid border-[#581845] border gap-[10px] flex sm:flex-row flex-col items-center justify-start sm:px-4 w-full">
      <div className="flex flex-wrap m-2">
        <div className="flex flex-row items-center">
        {props.imageSrc.map((image) => {
          return (
            <img
              className="hover:scale-[100.1%] ease-in-out overflow-hidden shrink-0 max-h-[400px] rounded flex-initial"
              src={image}
            />
          );
        })}
        </div>
      </div>
      <div
        className={`text-[#581845] h-min text-3xl text-left justify-left ${moderatRegular.className}`}
      >
        {props.title}
      </div>
    </div>
  );
};
