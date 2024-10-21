const data = [
  {
    index: "01",
    title: "Lorem Ipsum",
    description:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
  },
  {
    index: "02",
    title: "Lorem Ipsum",
    description:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
  },
  {
    index: "03",
    title: "Lorem Ipsum",
    description:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
  },
  {
    index: "04",
    title: "Lorem Ipsum",
    description:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
  },
];

const OurBuilders = () => {
  return (
    <div className="w-full bg-[#007AFF] flex items-center justify-center p-20">
      <div className="max-w-7xl w-full h-full mx-auto flex flex-col justify-center gap-[30px]">
        <p className="text-sm text-[#171717]">About Bamba Studio</p>
        <p className="text-[#171717] text-3xl font-semibold">Our Builders</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
          {data.map((item) => (
            <div
              key={item.index}
              className="flex rounded-2xl p-8 flex-row gap-[30px] justify-center items-center text-white bg-[#171717] "
            >
              <p className="text-xl font-semibold">{item.index}</p>
              <div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm leading-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBuilders;
