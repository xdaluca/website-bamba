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
    title: "ETHSamba Hackaton",
    description:
      "A welcoming space to take a break, grab a coffee or snack, and connect with other members.",
    btn: "Go To ETHSamba",
    link: "/Events",
  },
];

const BambaEvents = () => {
  return (
    <div className="max-w-7xl mx-auto w-full gap-4 flex flex-col xl:flex-row justify-between text-center xl:px-0 lg:px-10 px-6">
      {data.map((item, index) => (
        <div
          className="  h-[400px] bg-[#007AFF] rounded-2xl flex flex-col items-center justify-center gap-4 px-20"
          key={index}
        >
          <p className="text-[#171717] text-2xl font-semibold">{item.title}</p>
          <p className="text-[#171717] leading-6 w-[400px]">
            {item.description}
          </p>
          <div className="flex justify-center p-2 bg-[#171717] text-white rounded-full w-[166px]">
            <Link href={item.link}>{item.btn}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BambaEvents;
