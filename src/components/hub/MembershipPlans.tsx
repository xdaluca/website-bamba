"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const data = [
  {
    name: "Daily Pass",
    price: "R$70,00",
    description:
      "Ideal for those needing a comfortable, equipped space for a day.",
    benefits: [
      "Access to the space for one day",
      "Use of a shared table (non-fixed)",
      "Access from Monday to Friday, 8:00 AM to 18:00 PM",
      "Biometric entry",
    ],
    link: "/Contact",
  },
  {
    name: "Day Plan",
    price: "R$315,00",
    description:
      "Perfect for those needing flexibility and occasional use of the space.",
    benefits: [
      "Access to the space for 5 days during the month",
      "Use of a shared table (non-fixed)",
      "Access from Monday to Friday, 8:00 AM to 18:00 PM",
      "Biometric entry",
    ],
    link: "/Contact",
  },
  {
    name: "Weekly Pass",
    price: "R$595,00",
    description:
      "A great choice for those who need a regular, but not daily, workspace.",
    benefits: [
      "Access to the space for 10 days during the mês",
      "Use of a shared table (non-fixed)",
      "Access from Monday to Friday, 8:00 AM to 18:00 PM",
      "Biometric entry",
    ],
    link: "/Contact",
  },
  {
    name: "Fixed Desk",
    price: "R$595,00",
    description:
      "The best option for those needing an exclusive, guaranteed space daily.",
    benefits: [
      "Unlimited access to the space",
      "Guaranteed fixed table",
      "Access from Monday to Friday, from 8:00 AM to 20:00 PM",
      "Saturdays from 8:00 AM to 14:00 PM",
      "Exclusive offers and discounts for events",
      "Biometric entry",
    ],
    link: "/Contact",
  },
];

const MembershipPlans = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleBenefits = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center flex-col items-center py-20 gap-8 text-center max-w-7xl w-full mx-auto px-6 xl:px-0">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-dim-gray text-center dark:text-[#B4B4B4]">
            About Bamba Hub
          </p>
          <h2 className="text-rich-black text-3xl font-semibold text-center dark:text-[#EEEEEE]">
            Membership Plans
          </h2>
        </div>
        <p className="text-dim-gray leading-6 md:w-[664px] text-center dark:text-[#B4B4B4]">
          At Bamba Labs, we offer more than just a space to work—we provide
          connections, collaborations, and opportunities. Whether you’re a
          freelancer, startup, or growing company, our hub provides the perfect
          environment to turn your ideas into reality.
        </p>
      </div>
      <div className="xl:flex-row w-full flex-col flex gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full bg-rich-black px-6 rounded-2xl gap-8 py-8"
          >
            <div className="text-start flex flex-col w-full gap-4 space-y-4 py-4">
              <p className="text-very-light-gray text-2xl font-semibold">
                {item.name}
              </p>
              <p className="text-light-gray leading-6">{item.description}</p>
              <p className="text-very-light-gray text-3xl font-semibold">
                {item.price}
              </p>

              <Link
                href={item.link}
                className="relative group w-full h-[48px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  style={{
                    boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)",
                  }}
                ></div>
                <div className="text-rich-black bg-azure rounded-full w-full h-full flex justify-center items-center">
                  <p className="select-none">Learn More</p>
                </div>
              </Link>

              <button
                className="text-light-gray mb-2 md:hidden self-center flex flex-row justify-center items-center gap-2 space-x-3"
                onClick={() => toggleBenefits(index)}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M1 1.68359L6 6.68359L11 1.68359"
                    stroke="#007AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>
                  {expandedIndex === index
                    ? "Hide information"
                    : "See more information"}
                </p>
              </button>
            </div>

            <div
              className={`w-full pb-4 ${
                expandedIndex === index ||
                (isClient && window.innerWidth >= 768)
                  ? ""
                  : "hidden"
              }`}
            >
              <ul className="list-none text-dim-gray">
                {item.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="mb-2 flex items-center gap-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6673 1L5.50065 10.1667L1.33398 6"
                        stroke="#007AFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-start text-light-gray">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
