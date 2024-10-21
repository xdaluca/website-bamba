import Image from "next/image";

const data = [
  "/imagens/partners/partners9.png",
  "/imagens/partners/partners10.png",
  "/imagens/partners/partners11.png",
  "/imagens/partners/partners12.png",
];

const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto md:h-[791px] flex md:flex-row flex-col items-center px-6 text-center md:text-left xl:px-0 gap-8 mb-20">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 px-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-rich-black">Our partners</p>
          <h2 className="text-3xl font-semibold text-rich-black">
            Partnerships that elevate Web3 technology
          </h2>
        </div>
        <p className="text-rich-black leading-6">
          Our strategic partnerships with the largest blockchain platforms allow
          us to deliver cutting-edge innovation to startups and disruptive
          projects. At Bamba Labs, we believe in the power of collaboration. We
          work hand-in-hand with industry leaders in Web3, technology, and
          hospitality to create an innovative and vibrant ecosystem. Meet our
          strategic partners who share our vision of building the future,
          driving growth and innovation with their unique solutions.
        </p>
      </div>
      <div className="bg-azure w-full lg:w-1/2 h-[631px] flex flex-col items-center justify-center rounded-2xl md:py-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex justify-center"
            >
              <Image
                src={item}
                alt={`Partner ${index + 1}`}
                width={142}
                height={142}
                className={`h-auto w-full max-w-[142px] object-contain transition duration-300 ease-in-out group-hover:invert hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
