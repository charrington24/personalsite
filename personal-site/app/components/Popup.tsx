import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { abstract, argentPixel, digit2000, pixelOperator } from "../fonts/fonts";
import Typewriter from 'react-ts-typewriter';

interface Props{
    title: string;
    content: string | any;
    top: string;
    left: string;
}

const Popup : React.FC<Props> = ({title, content, top, left}) => {
    // console.log(top)
    // console.log(left)
    return (
        <div
            className={`sm:w-[500px] h-fit inset-0 items-center justify-center rounded z-50 border-solid border-[#4AF626] border flex flex-col gap-0 overflow-hidden`}
            style={{
                boxShadow: "0px 4.64px 4.64px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(2.32px)",
            }}
        >
            <div className="bg-[rgba(100,100,100)] border-solid border-[#4AF626] border-b w-full ">
                <div
                    className={`text-[#ffffff] text-left text-xl mx-[1%] ${argentPixel.className}`}
                >
                    {title}
                </div>
            </div>

            <div
                className="pt-0 pr-[6.95px] pb-0 pl-[6.95px]"
                style={{
                    background:
                        "linear-gradient(104.22deg, rgba(3, 28, 255, 1.00) 0%,rgba(9, 166, 255, 1.00) 100%)",
                }}
            >
                <div
                    className="bg-[rgba(169,169,169,.65)] border-solid border-[#ffffff] border-[1.16px] w-full h-[80%] my-[6.5%]"
                    style={{
                        boxShadow: "inset 0px 0px 4.64px 2.32px rgba(0, 0, 0, 0.25)",
                    }}
                ><div
                    className={`ml-[3%] mr-[5%] my-[2%] text-black text-left sm:text-3xl leading-relaxed ${argentPixel.className}`}
                >
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Popup;