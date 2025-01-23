"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const menu = [
  { name: "Home", link: "/" },
  { name: "Cowork", link: "/Cowork" },
  { name: "Events", link: "/Events" },
  { name: "Studio", link: "/Studio" },
];

const SelectMenu = () => {
  const [activeLink, setActiveLink] = useState<string>();
  const [hoveredLink, setHoveredLink] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const getUnderlineStyles = () => {
    const link = hoveredLink || activeLink;
    const index = menu.findIndex((item) => item.link === link);
    const totalLinks = menu.length;

    const adjustedWidth1 = `${(100 / totalLinks) * 1.2}%`;
    const adjustedWidth2 = `${(100 / totalLinks) * 0.94}%`;
    const adjustedWidth = `${(100 / totalLinks) * 1.13}%`;
    return {
      width:
        index === 0
          ? adjustedWidth1
          : index === 1
          ? adjustedWidth2
          : index === 2
          ? adjustedWidth
          : "20%",

      left:
        index === 0 || index === 1
          ? `${(index / totalLinks) * 100 + 6 / totalLinks}%`
          : `${(index / totalLinks) * 100 - 18 / totalLinks}%`,
    };
  };

  const { width, left } = getUnderlineStyles();

  return (
    <div className="relative md:flex hidden flex-row bg-[#F8F8F8] dark:bg-[#191919] p-4 rounded-full space-x-3 overflow-hidden">
      <div
        className={`absolute bg-azure ${
          isAnimating ? "transition-all duration-300 ease-in-out" : "duration-0"
        } rounded-full`}
        style={{
          width,
          left,
          height: "calc(100% - 10px)",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      {menu.map((item) => (
        <Link
          key={item.name}
          className={`block relative z-10 text-center transition duration-100 ${
            activeLink === item.link
              ? "text-[#0F172A]"
              : hoveredLink === item.link
              ? "text-[#F8F8F8]"
              : "text-dim-gray hover:text-[#F8F8F8]"
          }`}
          href={item.link}
          onClick={() => {
            setActiveLink(item.link);
            setHoveredLink("");
            setIsAnimating(false);
            setTimeout(() => setIsAnimating(true), 0);
          }}
          onMouseEnter={() => {
            setHoveredLink(item.link);
            setIsAnimating(true);
          }}
          onMouseLeave={() => {
            setHoveredLink("");
            setIsAnimating(true);
          }}
        >
          <span className="block px-3 py-2">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SelectMenu;
