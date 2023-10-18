import { moderatRegular } from "../fonts/fonts";
import Tag from "./Tag";

export interface IExperienceCardNewProps {
  title: string
  imageSrc: string
}

export const ExperienceCardNew = ({
  ...props
}: IExperienceCardNewProps): JSX.Element => {
  return (
    <div className="sm:w-[506px] sm:m-8 m-2 drop-shadow-md rounded-[10px] border-solid border-[#581845] border gap-[10px] items-start justify-start">
      <div className={`text-[#581845] px-2 pt-3 h-min text-3xl text-left text-terminal-blue block justify-left border-solid border-[#581845] border-b ${moderatRegular.className}`}>
        {props.title}
      </div>
      <div className="flex flex-wrap m-2">
        <div className={`flex flex-row gap-[5px] mb-2`}>
          <Tag content={"internship"} />
          <Tag content={"jQuery"} />
          <Tag content={"php"} />
        </div>
        <img
          className="hover:scale-[100.1%] ease-in-out w-full rounded border-solid border-[#581845] border flex-initial"
          src={props.imageSrc}
        />
      </div>
    </div>

  );
};