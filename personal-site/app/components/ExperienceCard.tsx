import { pixelOperator, planetKosmos } from "../fonts/fonts";
import Tag from "./Tag";

export interface IExperienceCardProps {
  title: string
}

export const ExperienceCard = ({
  ...props
}: IExperienceCardProps): JSX.Element => {
  return (
    <div className="sm:w-[506px] sm:m-8 m-2 drop-shadow-md rounded-[10px] border-solid border-terminal-blue border gap-[10px] items-start justify-start">
      <div className={`text-[#000000] px-2 pt-3 h-min text-3xl text-left text-terminal-blue ${planetKosmos.className} block justify-left border-solid border-terminal-blue border-b`}>
        {props.title}
      </div>
      <div className="flex flex-wrap m-2">
        <div className={`flex flex-row gap-[5px] mb-2`}>
          <Tag content={"internship"} />
          <Tag content={"jQuery"} />
          <Tag content={"php"} />
        </div>
        <img
          className="hover:scale-[100.1%] ease-in-out w-full rounded border-solid border-terminal-blue border flex-initial"
          src="Screenshot 2023-07-10 003046.png"
        />
      </div>
    </div>

  );
};