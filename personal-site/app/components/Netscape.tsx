import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { pixelOperator } from "../fonts/fonts";

interface Props {
  className: any;
}

const Netscape = (): JSX.Element => {
    return (
        <div
          className="bg-white my-4 rounded border-solid border-[#fffefe] border-[3px] h-screen flex flex-initial flex-wrap gap-0 items-start justify-start overflow-hidden"
          style={{
            boxShadow: "0px 4.64px 4.64px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2.32px)",
          }}
        >
          <div className={`bg-[#000080] ${pixelOperator.className} sm:text-xl px-[1%] flex w-full flex-initial flex-row font-bold sm:h-[30px] justify-between text-[#ffffff] text-left`}>
            Browser
          <div className="flex-initial flex justify-end">
            <div
              className="flex-initial bg-[#c1c1c0] sm:w-[18px] w-[15px] h-[60%] mx-1 my-[7%]"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
    
            <div
              className="bg-[#c1c1c0] sm:w-[18px] w-[15px] h-[60%] mx-1 my-[7%] overflow-hidden"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
    
            <div
              className="bg-[#c1c1c0] sm:w-[18px] w-[15px] h-[60%] mx-1 my-[7%] overflow-hidden"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
            </div>
          </div>
    
          <div
            className={`bg-[#b5c3d5] ${pixelOperator.className} sm:text-lg px-[1%] text-xs border-solid border-[#000000] flex flex-initial w-full sm:h-6 overflow-hidden text-ellipsis text-[#000000] text-left`}
            style={{ borderWidth: "0px 0px 1px 0px"}}
          >
              File Edit View Search Go Bookmarks Tasks Help
          </div>
    
          <div
            className="border-solid border-[#000000] w-full sm:h-[60px] flex-initial"
            style={{
              background:
                "linear-gradient(180deg, rgba(181, 195, 213, 1.00) 0%,rgba(93, 118, 154, 1.00) 100%)",
              borderWidth: "0px 0px 1px 0px",
              boxShadow:
                "inset -6px -6px 4px 0px rgba(86, 107, 137, 1.00), inset 3px 3px 6px 1px rgba(254, 254, 254, 0.66)",
            }}
          >
            <div
              className="bg-[rgba(255,255,255,0.02)] flex-initial rounded-xl border-solid border-[#5d769a] border-2 sm:h-[50px] sm:ml-20 ml-[5%] mr-[10%] my-[2%] py-[5px] sm:py-[10px] flex"
              style={{
                boxShadow:
                  "inset 3px 3px 2px 0px rgba(255, 255, 255, 0.99), inset -3px -3px 2px 0px rgba(0, 0, 0, 0.25), 1px 1px 1px 0px rgba(255, 255, 255, 0.36), -1px -1px 1px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                className={`bg-[#ffffff] flex-initial rounded-[5px] sm:h-6 mx-[5%] px-2 text-[#000000] ${pixelOperator.className} sm:text-xl text-sm w-full text-ellipsis justify-center`}
                style={{ boxShadow: "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.77)" }}
              >
                  {/* <div className=''> */}
                    www.experience.me
                  {/* </div> */}
              </div>
            </div>
          </div>
    
          <div
            className={`bg-[#5d769a] ${pixelOperator.className} flex-initial sm:text-lg px-[1%] border-solid border-[#000000] w-full sm:h-5 text-[#fefefe] text-left`}
            style={{ borderWidth: "0px 0px 1px 0px" }}
          >
              Home Download
          </div>
    
          <div className="overflow-y-scroll bg-black border-b-[43px] sm:border-b-[60px] h-[85%] sm:h-[85%] w-full">
            <ExperienceCard title="coursicle" tags={['internship', 'jquery', 'php']} image="Screenshot 2023-07-10 003046.png" blurb="le"/>
            {/* <ExperienceCard title="plug power"/> */}
          </div>
    
          <div
            className="border-solid border-[#000000] w-full h-[43px] absolute bottom-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(93, 118, 154, 1.00) 0%,rgba(56, 74, 110, 1.00) 100%)",
              borderWidth: "2px 0px 0px 0px",
            }}
          ></div>
        </div>
      );
};

export default Netscape;
