import { spaceMono } from "../fonts/fonts";
import React from "react";


export default function Tag({
    children,
  }: {
    children: React.ReactNode;
  }) {
return (
    <span
        className={`${spaceMono.className} flex md:text-2xl text-lg ease-in-out h-min text-left leading-tight flex-initial rounded-[10px] border-[#581845]  border border-solid py-[.1px] pl-[7px] pr-[9px]`}
    >
        {children}
    </span>)};
// export default Tag;