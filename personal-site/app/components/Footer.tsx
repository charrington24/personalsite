// components/Footer.tsx
import React from "react";
import { GitHub, LinkedIn, Headset } from "@mui/icons-material";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F0E9] border-t-2 border-[#58184545] pt-8 p-6 w-full h-auto text-center">
      <div className="flex justify-center space-x-4">
        <a
          className="h-[50px]"
          href="https://github.com/charrington24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" htmlColor="#581845" />
        </a>
        <a
          href="https://www.linkedin.com/in/c-harrington-2024/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" htmlColor="#581845" />
        </a>
        <a
          href="https://open.spotify.com/user/cfh874033?si=39b1f0973536422f"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Headset fontSize="large" htmlColor="#581845" />
        </a>
      </div>
      <div className="mb-4">
        <span className="text-[#581845]">
          &copy; {new Date().getFullYear()} Charlotte Harrington. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};
