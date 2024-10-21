"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const data = [
  "/imagens/partners/partners1.png",
  "/imagens/partners/partners2.png",
  "/imagens/partners/partners3.png",
  "/imagens/partners/partners4.png",
  "/imagens/partners/partners5.png",
  "/imagens/partners/partners6.png",
  "/imagens/partners/partners7.png",
  "/imagens/partners/partners8.png",
];

const ScrollingPatterns = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const step = 1;
    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += step;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative"
      ref={scrollRef}
    >
      <div
        className="flex flex-row"
        style={{ width: "200%" }}
      >
        {data.concat(data).map((item, index) => (
          <div
            key={index}
            className="mx-2"
          >
            <Image
              src={item}
              width={1200}
              height={600}
              alt={`Imagem ${index}`}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingPatterns;
