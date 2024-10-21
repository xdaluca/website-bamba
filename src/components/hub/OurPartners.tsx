const data = [
  "/imagens/partners/partners9.png",
  "/imagens/partners/partners10.png",
  "/imagens/partners/partners11.png",
  "/imagens/partners/partners12.png",
];

const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto h-[791px] flex md:flex-row flex-col items-center px-6 text-center md:text-left xl:px-0 gap-8 mb-20">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 px-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-rich-black">About Bamba Hub</p>
          <p className="text-3xl font-semibold text-rich-black">Our partners</p>
        </div>
        <p className="text-rich-black leading-6">
          Our strategic partnerships with the largest blockchain platforms allow
          us to deliver cutting-edge innovaAt Bamba Labs, we believe in the
          power of collaboration. We work hand-in-hand with industry leaders in
          Web3, technology and hospitality to create an innovative and vibrant
          ecosystem. Meet our strategic partners who share our vision of
          building the future, driving growth and innovation with their unique
          solutions.tion to startups and disruptive projects.
        </p>
      </div>
      <div className="bg-azure w-full lg:w-1/2 h-[631px] flex flex-col items-center justify-center rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center bg-rich-black rounded-full transition duration-300 ease-in-out hover:bg-very-light-gray hover:scale-105"
            >
              <img
                src={item}
                alt={`Partner ${index + 1}`}
                className="h-auto w-full max-w-[142px] object-contain transition duration-300 ease-in-out hover:filter hover:brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
