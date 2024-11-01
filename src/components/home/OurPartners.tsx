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
    img: "/imagens/partners/partners6.png",
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
          <p className="text-sm dark:text-[#B4B4B4]">Our partners</p>
          <h2 className="font-semibold text-2xl">
            Partnerships that elevate Web3 technology
          </h2>
        </div>

        <p className="dark:text-[#B4B4B4]">
          Our strategic partnerships with the largest blockchain platforms allow
          us to deliver cutting-edge innovation to startups and disruptive
          projects.
        </p>
      </div>
      <div className="bg-azure w-full py-10 px-6 rounded-3xl md:h-[631px] justify-center flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <Link
              target="_blank"
              href={item.link}
              key={index}
              className="flex justify-center bg-rich-black rounded-full transition duration-300 ease-in-out hover:bg-very-light-gray hover:scale-105 cursor-pointer"
            >
              <Image
                src={item.img}
                alt={`Partner ${index + 1}`}
                width={130}
                height={56}
                className="h-auto max-w-[160px] object-contain transition duration-300 ease-in-out hover:filter hover:brightness-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
