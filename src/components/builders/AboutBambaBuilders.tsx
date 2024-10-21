const data = [
  {
    title: "Builders Club",
    about: "About Bamba Builders",
    description1:
      "Equipped with audiovisual technology, our rooms are perfect for meetings, workshops and presentations.",
    description2:
      "Our strategic partnerships with the largest blockchain platforms allow us to deliver cutting-edge innovation to startups and disruptive projects.",
    link: "/Builders",
  },
  {
    title: "Hacker House",
    about: "About Bamba Builders",
    description1:
      "Equipped with audiovisual technology, our rooms are perfect for meetings, workshops and presentations.",
    description2:
      "Our strategic partnerships with the largest blockchain platforms allow us to deliver cutting-edge innovation to startups and disruptive projects.",
    link: "/Builders",
  },
  {
    title: "Program Partnes",
    about: "About Bamba Builders",
    description1:
      "Equipped with audiovisual technology, our rooms are perfect for meetings, workshops and presentations.",
    description2:
      "Our strategic partnerships with the largest blockchain platforms allow us to deliver cutting-edge innovation to startups and disruptive projects.",
    link: "/Builders",
  },
];

const AboutBambaBuilders = () => {
  return (
    <div className="max-w-7xl w-full justify-center items-center mx-auto py-20">
      <div className="w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col justify-between xl:flex-row gap-4 py-10  px-10 xl:px-0"
          >
            <div className="bg-[#007AFF] text-black text-center lx:w-1/2 xl:w-[632px] h-[400px] flex flex-col justify-center items-center rounded-2xl gap-6 py-6 px-20">
              <p className="text-2xl font-semibold">{item.title}</p>
              <p>{item.description1}</p>
              <div className="w-[119px] flex justify-center p-2 bg-[#171717] text-white rounded-full">
                <p>Learn More</p>
              </div>
            </div>
            <div className="lx:w-1/2 pl-9 h-[400px] xl:text-left text-center flex items-start flex-col justify-center it  text-black">
              <div className="gap-4">
                <p className="text-[#171717] text-sm font-semibold">
                  {item.about}
                </p>
                <p className="text-3xl font-semibold">{item.title}</p>
                <p className="text-[#6F6F6F] leading-6 ">{item.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBambaBuilders;
