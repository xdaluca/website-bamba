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

const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center gap-4 py-20 px-6 xl:px-0">
      <div className="text-[#171717] md:text-left text-center gap-4 py-10 px-6">
        <div className="gap-2">
          <p className="text-sm">Our partners</p>
          <p className="font-semibold text-2xl">
            Partnerships that elevate Web3 technology
          </p>
        </div>

        <p>
          Our strategic partnerships with the largest blockchain platforms allow
          us to deliver cutting-edge innovation to startups and disruptive
          projects.
        </p>
      </div>
      <div className="bg-[#007AFF] w-full py-10 px-6 rounded-3xl md:h-[631px] justify-center flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center bg-[#171717] rounded-full transition duration-300 ease-in-out hover:bg-white hover:scale-105"
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
