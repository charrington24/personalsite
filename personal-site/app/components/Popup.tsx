

import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { digit2000, pixelOperator } from "../fonts/fonts";
import Typewriter from 'react-ts-typewriter';



const Popup = () => {
    return (
        <div
            className="w-[500px] h-fit inset-0 items-center justify-center z-50 rounded border-solid border-[#ffffff] border-[2.32px] flex flex-col gap-0 items-end absolute top-[15%] left-[55%] overflow-hidden"
            style={{
                boxShadow: "0px 4.64px 4.64px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(2.32px)",
            }}
        >
            <div className="bg-[rgba(200,200,200,0.46)] border-solid border-[#fefefe] border-[1.16px] shrink-0 w-full relative overflow-hidden">
                <div
                    className={`text-[#ffffff] text-left text-xl mx-[1%] ${digit2000.className}`}
                >
                    elevator_pitch.txt
                </div>
            </div>

            <div
                className="pt-0 pr-[6.95px] pb-0 pl-[6.95px] shrink-0 w-full relative"
                style={{
                    background:
                        "linear-gradient(104.22deg, rgba(3, 28, 255, 1.00) 0%,rgba(9, 166, 255, 0.38) 100%)",
                }}
            >
                <div
                    className="bg-[rgba(169,169,169,0.73)] border-solid border-[#ffffff] relative border-[1.16px] w-full h-[80%] my-[6.5%]"
                    style={{
                        boxShadow: "inset 0px 0px 4.64px 2.32px rgba(0, 0, 0, 0.25)",
                    }}
                ><div
                    className={`ml-[3%] mr-[5%] my-[2%] text-black text-left text-3xl leading-8 ${pixelOperator.className}`}
                >
                    <span>i'm a</span>
                    <span><Typewriter
                        text={[" UI/UX designer", " database architect", " full-stack developer"]}
                        // loop={true}
                        delay={1500}
                        speed={50}
                        random={50}
                    /></span>
                    <p>focused on building <b>efficient</b>, <b>beautiful</b>, and <b>useful</b> products for an innovating world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Popup;