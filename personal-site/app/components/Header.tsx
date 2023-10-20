// components/Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import { moderatRegular } from "../fonts/fonts";
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';

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
    { href: "/projects", label: "WORK" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`bg-[#F3F0E9] z-10 fixed top-0 md:px-10 lg:px-40 px-4 p-6 h-auto text-center font-bold text-xl text-[#58184585] w-full ${moderatRegular.className}`}
    >
      <div className="flex justify-between items-center">
        <a href="#" className="text-[#581845] text-lg font-bold">
          {/* Your Logo */}
        </a>
        <div className="flex gap-6 w-auto h-full items-center">
          <div className="max-md:hidden flex gap-4">
            {links.map(({ href, label }) => (
              <a
                className={
                  pathname === href
                    ? "underline"
                    : ""
                }
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex justify-end w-14 z-[50]"
        >
          <MenuIcon/>
        </button>

        {isOpen && (
          <div className="flex flex-col w-full self-start items-end justify-end">
            {links.map(({ href, label }) => (
              <a key={label}
                className={
                  pathname === href
                    ? "underline"
                    : ""
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
    </header>
  );
};

export default Header;
