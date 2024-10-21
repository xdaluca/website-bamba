import Link from "next/link";

export const menu = [
  { name: "Home", link: "/" },
  { name: "Hub", link: "/Hub" },
  { name: "Events", link: "/Events" },
];

const SelectMenu = () => {
  return (
    <div className="md:flex hidden flex-row bg-[#F8F8F8] p-3 rounded-full">
      {menu.map((item) => (
        <Link
          key={item.name}
          className="block rounded-full px-4 py-2 hover:bg-[#007AFF] text-[#6F6F6F]"
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SelectMenu;
