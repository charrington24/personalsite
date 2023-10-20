"use client";
import React from "react";
import Typewriter from "react-ts-typewriter";

interface Props {}

const TypewriterComp: React.FC<Props> = () => {
  return (
    <>
      <Typewriter
        text={[
          " UI/UX designer",
          " database architect",
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
