// components/Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import { moderatRegular } from "../fonts/fonts";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image, { StaticImageData } from "next/image";
import logo from "../../public/large_logo.png";
import { GitHub, LinkedIn, Headset } from "@mui/icons-material";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { href: "/about", label: "ABOUT" },
    { href: "/project", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={
        !isOpen
          ? `z-50 fixed  duration-500 ease-in-out top-0 md:py-6 md:px-10 lg:px-10 px-4 h-auto text-center font-bold text-xl text-[#58184585] w-full ${moderatRegular.className}`
          : `bg-[#F3F0E9] border-b border-b-[#581845] z-50 fixed top-0 md:px-10 lg:px-10 px-4 p-6 h-auto text-center font-bold text-xl text-[#58184585] w-full ${moderatRegular.className}`
      }
    >
      <div className="flex justify-between items-center">
        <div className={"group"}>
          <Link
            href="/"
            className={
              "group relative" + !isOpen
                ? `text-[#581845] text-lg font-bold md:ml-[0px] `
                : `hidden`
            }
          >
            <Image
              src={logo}
              style={
                {
                  // WebkitFilter: "drop-shadow(.5px 1px 1.5px #555)",
                  // filter: "drop-shadow(.25px 1px 2px #555)",
                }
              }
              className="hover:scale-[105%] duration-300 ease-in-out md:w-[140px] w-[65px] mt-[10px]"
              // width={150}
              alt={"Pixel art portrait of Charlotte"}
            />
            
          </Link>
          <div className="flex flex-col w-[100%] justify-center items-center">
              <div className="flex flex-col my-8 w-min gap-[16px] transition-all duration-300 collapse ">
                <a
                  className=""
                  href="https://github.com/charrington24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub style={{ fontSize: "80px" }} htmlColor="#581845" />
                </a>
                <a
                  href="https://www.linkedin.com/in/c-harrington-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn style={{ fontSize: "80px" }} htmlColor="#581845" />
                </a>
                <a
                  href="https://open.spotify.com/user/cfh874033?si=39b1f0973536422f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Headset style={{ fontSize: "80px" }} htmlColor="#581845" />
                </a>
              </div>
            </div>
        </div>
        <div className=" hidden flex gap-6 w-auto h-full items-center">
          <div className="max-md:hidden flex gap-4">
            {links.map(({ href, label }) => (
              <a
                className={
                  pathname === href
                    ? "text-[#581845]"
                    : "duration-300 ease-in-out hover:text-[#581845]"
                }
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className={`hidden md:hidden flex flex-col items-end gap-4`}>
          <button
            onClick={toggleMenu}
            className={`md:hidden flex justify-end w-14 z-[50]`}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {isOpen && (
            <div className="flex flex-col items-end justify-end">
              {links.map(({ href, label }) => (
                <a
                  key={label}
                  className={
                    pathname === href
                      ? "text-[#581845]"
                      : "duration-300 ease-in-out hover:text-[#581845]"
                  }
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
