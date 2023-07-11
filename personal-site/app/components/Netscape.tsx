import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { pixelOperator } from "../fonts/fonts";

interface Props {
  className: any;
}

const Netscape = (): JSX.Element => {
    return (
        <div
          className="bg-white my-10 border-solid border-[#fffefe] border-[3px] flex flex-initial flex-wrap gap-0 items-start justify-start overflow-hidden"
          style={{
            boxShadow: "0px 4.64px 4.64px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2.32px)",
          }}
        >
          <div className={`bg-[#000080] ${pixelOperator.className} sm:text-3xl px-[1%] flex w-full flex-row font-bold sm:h-[49px] justify-between text-[#ffffff] text-left`}>
            Browser
          <div className="flex-initial flex justify-end">
            <div
              className="flex-initial bg-[#c1c1c0] sm:w-[29px] w-[15px] h-[60%] mx-1 my-[7%]"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
    
            <div
              className="bg-[#c1c1c0] sm:w-[29px] w-[15px] h-[60%] mx-1 my-[7%] overflow-hidden"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
    
            <div
              className="bg-[#c1c1c0] sm:w-[29px] w-[15px] h-[60%] mx-1 my-[7%] overflow-hidden"
              style={{
                boxShadow:
                  "inset 2px 2px 1px 0px rgba(255, 255, 255, 0.50), inset -2px -2px 1px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 2px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
            </div>
          </div>
    
          <div
            className={`bg-[#b5c3d5] ${pixelOperator.className} sm:text-2xl px-[1%] text-xs border-solid border-[#000000] flex flex-initial w-full sm:h-10 overflow-hidden text-ellipsis text-[#000000] text-left`}
            style={{ borderWidth: "0px 0px 1px 0px"}}
          >
              File Edit View Search Go Bookmarks Tasks Help
          </div>
    
          <div
            className="border-solid border-[#000000] w-full sm:h-[100px] flex-initial"
            style={{
              background:
                "linear-gradient(180deg, rgba(181, 195, 213, 1.00) 0%,rgba(93, 118, 154, 1.00) 100%)",
              borderWidth: "0px 0px 1px 0px",
              boxShadow:
                "inset -6px -6px 4px 0px rgba(86, 107, 137, 1.00), inset 3px 3px 6px 1px rgba(254, 254, 254, 0.66)",
            }}
          >
            <div
              className="bg-[rgba(255,255,255,0.02)] rounded-xl border-solid border-[#5d769a] border-2 sm:h-[57px] sm:ml-20 ml-[5%] mr-[10%] my-[2%] flex flex-initial"
              style={{
                boxShadow:
                  "inset 3px 3px 2px 0px rgba(255, 255, 255, 0.99), inset -3px -3px 2px 0px rgba(0, 0, 0, 0.25), 1px 1px 1px 0px rgba(255, 255, 255, 0.36), -1px -1px 1px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                className={`bg-[#ffffff] rounded-[5px] sm:h-8 my-[2%] mx-[5%] text-[#000000] ${pixelOperator.className} sm:text-2xl text-sm text-left w-full py-[1%] px-2 text-ellipsis flex-initial `}
                style={{ boxShadow: "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.77)" }}
              >
                  www.experience.me
              </div>
            </div>
          </div>
    
          <div
            className={`bg-[#5d769a] ${pixelOperator.className} sm:text-2xl px-[1%] border-solid border-[#000000] flex-initial w-full sm:h-10 text-[#fefefe] text-left`}
            style={{ borderWidth: "0px 0px 1px 0px" }}
          >
              Home Download
          </div>
    
          <div className="flex-initial overflow-scroll w-full sm:h-[700px] sm:h-[300px]">
            <ExperienceCard title="coursicle"/>
            <ExperienceCard title="plug power"/>
          </div>
    
          <div
            className="border-solid border-[#000000] w-full h-[43px] flex-initial"
            style={{
              background:
                "linear-gradient(180deg, rgba(93, 118, 154, 1.00) 0%,rgba(56, 74, 110, 1.00) 100%)",
              borderWidth: "2px 0px 0px 0px",
            }}
          ></div>
        </div>
      );
//   return (
//     <div className={`netscape`}>
//       <div className="overlap-group">
//         <div className="window-header">
//           <div className="prompt-txt">prompt.txt</div>
//           <div className="min-button" />
//           <div className="exit-button" />
//           <div className="window-button" />
//         </div>
//         <div className="navbar-one">
//           <p className="file-edit-view">
//             File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Search&nbsp;&nbsp;Go&nbsp;&nbsp;Bookmarks&nbsp;&nbsp;Tasks&nbsp;&nbsp;Help
//           </p>
//         </div>
//         <div className="navbar-two">
//           <div className="search-wrapper">
//             <div className="search-text">
//               <div className="www-work-experience">www.work.experience</div>
//             </div>
//           </div>
//         </div>
//         <div className="navbar">
//           <p className="home-download"> Home&nbsp;&nbsp; Download</p>
//         </div>
//         <div className="body" />
//         <div className="footer" />
//       </div>
//     </div>
//   );
};

export default Netscape;
