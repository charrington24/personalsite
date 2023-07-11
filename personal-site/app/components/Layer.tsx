import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { abstract, argentPixel, digit2000, pixelOperator } from "../fonts/fonts";
import Typewriter from 'react-ts-typewriter';
import { setInterval } from "timers";

interface Props {
    frame: string | any;
    content: string | any;
    number: number;
    top: number;
    left: number;
    suffix: string;
    translatex: number;
    translatey: number;
}

type Frame = {
    top: number;
    left: number;
    z: number;
    body: any;
}

const Layer: React.FC<Props> = ({ content, frame, number, top, left, translatex, translatey, suffix }) => {
    const [curtop, setCurtop] = useState(top);
    const [curleft, setCurleft] = useState(left);
    const [curz, setCurz] = useState(50);
    const [frames, setFrames] = useState<Frame[]>([])
    const [render, setRender] = useState(false)
    // const [renderFinal, setRenderFinal] = useState(false)
    const [counter, setCounter] = useState(0)
    var index = 0;

    const updateIndex = () => {
        if (index > number) return;
        index = index + 1
        setCounter(index)
        addFrame()
    }

    useEffect(() => {
        if (index > number) return;
        const interval = setInterval(() => {
            updateIndex()
        }, 50);
        return () => clearInterval(interval);
    }, []);

    function addFrame() {
        if (index > number) return;
        setRender(false)
        if (index == number) {
            frames.push({
                top: top + (index * translatey),
                left: left + (index * translatex),
                z: 50 + (index * 5),
                body: content,
            })
        } else {
            frames.push({
                top: top + (index * translatey),
                left: left + (index * translatex),
                z: 50 + (index * 5),
                body: frame,
            })
        }
        setRender(true)
    }

    return (
        <>
            {render && (
                <>
                    {frames.map((fr, index) => {
                        return (
                            <div className={`absolute`}
                                style={{
                                    top: `${fr.top}${suffix}`,
                                    left: `${fr.left}${suffix}`,
                                    zIndex: `${fr.z}`,
                                }}
                                key={index}
                            >
                                {fr.body}
                            </div>
                        )
                    })}
                </>
            )}

        </>
    );
};
export default Layer;


