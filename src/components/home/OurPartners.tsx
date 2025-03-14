"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    img: "/imagens/partners/partners1.png",
    link: "https://chain.link/",
  },
  {
    img: "/imagens/partners/partners2.png",
    link: "https://thegraph.com/pt/",
  },
  {
    img: "/imagens/partners/partners3.png",
    link: "https://arbitrum.io/",
  },
  {
    img: "/imagens/partners/partners4.png",
    link: "https://polygon.technology/",
  },
  {
    img: "/imagens/partners/partners5.png",
    link: "https://near.org/",
  },
  {
    img: "/imagens/partners/ethereum-foundation.webp",
    link: "https://ethereum.org/en/",
  },
  {
    img: "/imagens/partners/partners7.png",
    link: "https://www.openzeppelin.com/",
  },
  {
    img: "/imagens/partners/partners8.png",
    link: "https://www.ledger.com/",
  },
];

const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center gap-4 py-20 px-6 xl:px-0">
      <div className="text-rich-black dark:text-[#EEEEEE] md:text-left text-center flex flex-col gap-4 py-10 px-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Past Sponsors</h2>
        </div>

        <p className="dark:text-[#B4B4B4]">
          Bamba&apos;s events have been sponsored by some of the leading
          companies in web3 and emerging technologies.
        </p>

        <div className="relative group w-full md:w-[166px] h-[48px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            style={{ boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)" }}
          ></div>
          <div className="bg-rich-black dark:bg-[#EEEEEE] dark:text-[#111111] text-very-light-gray rounded-full w-full h-full flex justify-center items-center">
            <p className="select-none">See Events</p>
          </div>
        </div>
      </div>
      <div className="bg-azure w-full py-10 px-6 rounded-3xl md:h-[631px] justify-center flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Link
              target="_blank"
              href={item.link}
              key={index}
              className={`flex justify-center bg-rich-black hover:bg-slate-50 rounded-full transition duration-300 ease-in-out  hover:scale-105 cursor-pointer h-[90px] md:h-[90px] items-center ${
                index === 5 ? "p-5" : ""
              }`}
            >
              <div className="relative flex justify-center h-auto w-[250px] transition duration-300 ease-in-out hover:filter hover:brightness-200 hover:invert">
                <Image
                  src={item.img}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={56}
                  className="object-contain hover:filter hover:brightness-200 hover:invert"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
