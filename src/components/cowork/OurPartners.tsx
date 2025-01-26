import Image from "next/image";
import Link from "next/link";

const data = [
  { img: "/imagens/partners/partners9.png", link: "https://cartesi.io/" },
  {
    img: "/imagens/partners/partners10.png",
    link: "https://www.voahoteis.com.br/",
  },
  {
    img: "/imagens/partners/partners11.png",
    link: "https://www.tripflip.com.br/en/",
  },
  { img: "/imagens/partners/partners12.png", link: "https://y5.systems/" },
];

const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto md:h-[400px] flex md:flex-row flex-col items-center px-6 text-center md:text-left xl:px-0 gap-8 mb-20">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-rich-black dark:text-[#EEEEEE]">
            Companies Working from Bamba
          </h2>
        </div>
      </div>
      <div className="bg-azure w-full lg:w-1/2 h-[400px] flex flex-col items-center justify-center rounded-2xl md:py-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group flex justify-center cursor-pointer"
            >
              <Image
                src={item.img}
                alt={`Partner ${index + 1}`}
                width={130}
                height={56}
                className={`h-auto w-[200px] object-contain transition duration-300 ease-in-out group-hover:invert hover:scale-105`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
