const data = [
  {
    title: "ETHSamba Hackaton",
    description:
      "A welcoming space to take a break, grab a coffee or snack, and connect with other members.",
    btn: "Go To ETHSamba",
    link: "/Events",
  },
  {
    title: "Bamba Events Calendar",
    description:
      "Equipped with audiovisual technology, our rooms are perfect for meetings, workshops and presentations.",
    btn: "Go To Bamba Events",
    link: "/Events",
  },
];

const BambaEvents = () => {
  return (
    <div className="max-w-7xl mx-auto w-full gap-4 flex flex-col xl:flex-row justify-between text-center xl:px-0 lg:px-10 px-6 pb-20">
      {data.map((item, index) => (
        <div
          className="h-[400px] bg-azure rounded-2xl w-full flex flex-col items-center justify-center gap-6 p-6"
          key={index}
        >
          <div className="flex flex-col gap-4">
            <p className="text-rich-black text-2xl font-semibold">
              {item.title}
            </p>
            <p className="text-rich-black leading-6 md:w-[400px]">
              {item.description}
            </p>
          </div>
          <div className="relative group h-[48px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              style={{
                boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)",
              }}
            ></div>
            <div className="bg-rich-black text-very-light-gray rounded-full w-full h-full flex justify-center items-center px-5">
              <p className="select-none">{item.btn}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BambaEvents;
