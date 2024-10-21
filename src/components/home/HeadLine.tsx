const HeadLine = () => {
  return (
    <div className="md:h-[616px] h-[516px] text-center flex flex-col items-center justify-center w-full max-w-7xl xl:px-0 lg:px-10 px-6 gap-8">
      <p className="text-black text-5xl md:text-[80px] font-extrabold md:leading-[80px]">
        YOUR <br />
        <span className="text-[#007AFF]">LAUNCHPAD FOR</span>{" "}
        <br className="hidden md:flex" />
        <span className="text-[#007AFF]">GROWTH</span> IN{" "}
        <br className="hidden md:flex" /> LATAM
      </p>
      <p className="text-[#6F6F6F]">
        Where innovation, startups and brilliant minds connect to transform the
        future of <br className="hidden md:flex" /> technology and crypto in
        Latin America.
      </p>
      <div className="bg-[#171717] text-white rounded-full w-full md:w-[166px] h-[48px] flex justify-center items-center">
        <p>Learn More</p>
      </div>
    </div>
  );
};

export default HeadLine;
