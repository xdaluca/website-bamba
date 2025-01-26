"use client";
import Image from "next/image";

const Space = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto w-full gap-4 xl:px-0 px-5 pb-20">
      {/* Left Column */}
      <div className="grid grid-rows-[auto,1fr] gap-4">
        {/* Top Image */}
        <Image
          src="/imagens/CardPages.png"
          alt="Coworking Space"
          width={1280}
          height={300}
          className="object-cover"
        />

        {/* Bottom Left Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 5 Meeting Rooms */}
          <div className="md:h-[450px] h-[313px] bg-[#E1EFFF] p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-rich-black">
              5 Meeting Rooms
            </p>
            <div className="gap-4">
              <p className="text-rich-black leading-6">
                Fully equipped with audiovisual tech—perfect for workshops,
                presentations, and team sessions.
              </p>
            </div>
          </div>

          {/* 3 Private Booths */}
          <div className="md:h-[450px] h-[313px] bg-[#E1EFFF] p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-rich-black">
              3 Private Booths
            </p>
            <div className="gap-4">
              <p className="text-rich-black leading-6">
                Ideal for confidential calls or focused work, offering the quiet
                you need to stay productive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-rows-[1fr,auto] gap-4">
        {/* Top Right Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 49 Desks */}
          <div className="md:h-[450px] h-[313px] bg-rich-black p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-[#F7F7F6]">49 Desks</p>
            <div className="gap-4">
              <p className="font-semibold text-2xl text-[#F7F7F6]">
                Comfort & Space
              </p>
              <p className="text-[#F7F7F6] leading-6">
                Well-positioned and comfortable, ready to meet all your daily
                work needs.
              </p>
            </div>
          </div>

          {/* Chill Area & 2 Min Away */}
          <div className="grid grid-rows-2 gap-4">
            {/* Chill Area */}
            <div className="bg-[#21EFFF] h-[313px] text-rich-black xl:h-full p-4 flex flex-col justify-between rounded-2xl">
              <p className="text-3xl font-semibold">Chill Area</p>
              <div className="gap-4">
                <p className="text-rich-black leading-6">
                  Unwind, grab a coffee, or chat with fellow members in a
                  relaxed atmosphere.
                </p>
              </div>
            </div>

            {/* 2 Min Away from Ipanema Beach */}
            <div className="bg-[#E1EFFF] text-rich-black h-[313px] xl:h-full p-4 flex flex-col justify-between rounded-2xl">
              <p className="text-3xl font-semibold">2 Min from Ipanema Beach</p>
              <div className="gap-4">
                <p className="leading-6">
                  Soak in the local vibe—step outside and enjoy Rio’s vibrant
                  culture and ocean views just moments away.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <Image
          src="/imagens/CardPages2.png"
          alt="Coworking Space - Another View"
          width={1280}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Space;
