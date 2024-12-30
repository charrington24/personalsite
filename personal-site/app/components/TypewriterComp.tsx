"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import ProjectList from "./ProjectList";

interface Props {}

const TypewriterComp: React.FC<Props> = () => {
  return (
    <>
      <Typewriter
        options={{
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("hi! i'm charlotte :)")
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "i'm a full-stack developer focused on building efficient, beautiful, and useful products for an innovating world.\n\n"
            )
            .start();
        }}
      />

      {/* <Typewriter
        text={[
          " hi! i'm charlotte :) i'm a full-stack developer focused on building efficient, beautiful, and useful products for an innovating world.",
        ]}
        delay={500}
        speed={50}
        random={300}
      /> */}
    </>
  );
};
export default TypewriterComp;

// hi! i'm charlotte :)
// i'm a full-stack developer▎focused on building efficient, beautiful, and useful products for an innovating world
