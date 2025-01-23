"use client";
import React, { useState } from "react";

const videos = [
  {
    id: "1qrgu48Vb0HxG_kHdLRlQ-kE8zNQP9zQ0",
    title: "Video 1",
  },
  {
    id: "1lFV4DrqGkcezXpSEcn_mAEGRgb_mB-y1",
    title: "Video 2",
  },
  {
    id: "1h51-36IzE_MBHrnOs_R60SCXvreoVF24",
    title: "Video 3",
  },
];

const AboutBambaEvents = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handleVideoChange = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="flex justify-center bg-rich-black mb-80">
      <div className="text-center flex flex-col items-center justify-center max-w-7xl w-full py-20 xl:px-0 px-6 gap-8">
        <div className="gap-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-very-light-gray text-3xl font-semibold">
              Chainlink, The Graph and Arbitrum
            </h2>
          </div>
          <p className="leading-6 text-light-gray md:w-[664px]">
            March 2024
          </p>
        </div>
        <div className="flex justify-center items-center rounded-2xl max-w-7xl w-full bg-dim-gray relative overflow-hidden">
          <div
            className="w-full"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src={`https://drive.google.com/file/d/${videos[currentVideoIndex].id}/preview`}
              width="100%"
              height="100%"
              className="rounded-2xl"
              allow="autoplay"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-4 text-sm">
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={handlePreviousVideo}
              disabled={currentVideoIndex === 0}
              className=" text-white flex flex-row items-center gap-2"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.9336L6 8.93359L10 4.93359"
                  stroke="#DBDBDB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Previous</p>
            </button>
            {videos.map((video, index) => (
              <button
                key={video.id}
                className={`px-4 py-2 rounded ${
                  index === currentVideoIndex
                    ? "bg-gray-300 text-black"
                    : "text-white"
                }`}
                onClick={() => handleVideoChange(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextVideo}
              disabled={currentVideoIndex === videos.length - 1}
              className=" text-white flex flex-row items-center gap-2"
            >
              <p>Next</p>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.93359L5 4.93359L1 0.933594"
                  stroke="#DBDBDB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBambaEvents;
