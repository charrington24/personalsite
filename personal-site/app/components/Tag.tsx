import { pixelOperator } from "../fonts/fonts";
import React from "react";


interface Props{
    content: string;
}

const Tag : React.FC<Props> = ({content}) => {
return (
    <div
        className={`text-[#000000] ${pixelOperator.className} hover:scale-[101%] ease-in-out h-min text-left leading-tight flex-initial bg-terminal-green-light rounded-md border border-solid border-black py-[.1px] pl-[7px] pr-[9px]`}
    >
        {content}
    </div>)};
export default Tag;