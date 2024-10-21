import Link from "next/link";

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
          <div className="flex justify-center p-2 bg-rich-black text-very-light-gray rounded-full md:w-[166px] w-full transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <Link href={item.link}>{item.btn}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BambaEvents;
