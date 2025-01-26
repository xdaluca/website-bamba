import { Template } from "@/components";

export const metadata = {
  title: "Bamba Labs | Studio",
  description: "Studio",
};

const Studio = () => {
  return (
    <Template>
      <div className="text-center flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-4 py-20 xl:px-0 px-6">
        <div className="flex gap-2 flex-col">
          <h2 className="text-rich-black dark:text-white text-5xl font-semibold">
            Bamba Studio builds and launches products.
          </h2>
        </div>
        <p className="text-dim-gray dark:text-[#B4B4B4] leading-6 md:w-[664px]">
          For inquiries please send an email to{" "}
          <a
            href="mailto:studio@bambalabs.co"
            className="text-azure underline hover:text-azure-dark"
          >
            studio@bambalabs.co
          </a>
        </p>
      </div>
    </Template>
  );
};

export default Studio;
