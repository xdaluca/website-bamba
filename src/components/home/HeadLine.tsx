"use client";

const HeadLine = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById("bamba-eco");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="md:h-[616px] h-[516px] text-center flex flex-col items-center justify-center w-full max-w-7xl xl:px-0 lg:px-10 px-6 gap-8">
        <p className="text-rich-black text-5xl md:text-[80px] font-extrabold md:leading-[80px]">
          YOUR <br />
          <span className="text-azure">LAUNCHPAD FOR</span>{" "}
          <br className="hidden md:flex" />
          <span className="text-azure">GROWTH</span> IN{" "}
          <br className="hidden md:flex" /> LATAM
        </p>
        <p className="text-dim-gray">
          Where innovation, startups and brilliant minds connect to transform
          the future of <br className="hidden md:flex" /> technology and crypto
          in Latin America.
        </p>
        <div className="relative group w-full md:w-[166px] h-[48px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
          <div
            onClick={handleScroll}
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            style={{
              boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)",
            }}
          ></div>
          <div className="bg-rich-black text-very-light-gray rounded-full w-full h-full flex justify-center items-center">
            <p className="select-none">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;
