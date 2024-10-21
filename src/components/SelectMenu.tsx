import Link from "next/link";
import { useEffect, useState } from "react";

export const menu = [
  { name: "Home", link: "/" },
  { name: "Hub", link: "/Hub" },
  { name: "Events", link: "/Events" },
];

const SelectMenu = () => {
  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div className="md:flex hidden flex-row bg-[#F8F8F8] p-4 rounded-full space-x-1">
      {menu.map((item) => (
        <Link
          key={item.name}
          className={`block rounded-full px-4 py-2 ${
            activeLink === item.link
              ? "bg-azure text-[#F8F8F8]"
              : "hover:bg-azure text-dim-gray hover:text-[#F8F8F8]"
          }`}
          href={item.link}
          onClick={() => setActiveLink(item.link)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SelectMenu;
