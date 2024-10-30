"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
    month: "Sep",
    day: "10",
  },
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies e tecnologia no Rio.",
    month: "Sep",
    day: "10",
  },
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies e tecnologia no Rio.",
    month: "Sep",
    day: "10",
  },
];

const EventsAndNetworking = () => {
  return (
    <div className="bg-rich-black w-full">
      <div className="max-w-7xl mx-auto w-full xl:px-0 py-20">
        <div className="flex flex-col gap-16 px-6 rounded-2xl md:text-left py-20">
          <div className="gap-4 flex flex-col justify-center text-center items-center">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-light-gray">About Bamba Hub</p>
              <h2 className="text-2xl font-semibold leading-8 text-[#F6F7F6]">
                Events and Networking
              </h2>
            </div>
            <p className="text-light-gray leading-6 w-full md:w-[800px] ">
              At Bamba Labs, we promote a constant schedule of events, meetups
              and workshops focused on the tech and Web3 ecosystem. In addition,
              we have flexible and modern spaces for those who want to hold
              their own event.
            </p>
          </div>

          <div
            className="overflow-x-auto flex justify-center items-center"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {data.map((event, index) => (
              <div
                key={index}
                className="bg-very-light-gray rounded-lg flex-shrink-0"
                style={{
                  minWidth: "280px",
                  maxWidth: "300px",
                  margin: "0 8px",
                }}
              >
                <Image
                  src={event.img}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="text-rich-black font-semibold text-sm">
                    {event.month} {event.day}
                  </div>
                  <p className="text-rich-black text-lg font-semibold">
                    {event.title}
                  </p>
                  <p className="text-rich-black text-sm">{event.describe}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"https://lu.ma/Bambacompany"}
            target="_blank"
            className="relative group w-full md:w-[166px] h-[48px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out self-center"
          >
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              style={{
                boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)",
              }}
            ></div>
            <div className="bg-very-light-gray text-very-light-gray rounded-full w-full h-full flex justify-center items-center">
              <p className="select-none text-rich-black">Learn More</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsAndNetworking;
