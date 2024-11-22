"use client";
import React from "react";
import Typewriter from "react-ts-typewriter";

interface Props {}

const TypewriterComp: React.FC<Props> = () => {
  return (
    <>
      <Typewriter
        text={[
          " database architect",
          " UI/UX designer",
          " full-stack developer",
        ]}
        delay={1500}
        speed={50}
        random={50}
      />
    </>
  );
};
export default TypewriterComp;
