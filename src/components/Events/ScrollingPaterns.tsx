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
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative h-full"
      ref={scrollRef}
    >
      <div
        className="flex flex-row h-full"
        style={{ width: "200%" }}
      >
        {data.concat(data).map((item, index) => (
          <div
            key={index}
            className="mx-2 h-full flex items-center"
          >
            <Image
              src={item}
              width={600}
              height={400}
              alt={`Imagem ${index}`}
              className="w-auto h-full max-w-full min-w-[200px] min-h-[40px] object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingPatterns;
