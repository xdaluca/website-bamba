import Link from "next/link";

const AboutBambaHub = () => {
  return (
    <div className="max-w-7xl mx-auto w-full py-20 flex flex-col justify-center items-center gap-8">
      <div className="gap-4 flex flex-col justify-center items-center">
        <p className="text-sm text-[#6F6F6F] font-medium">About Bamba Hub</p>
        <p className="text-[#171717] text-3xl font-semibold">
          Membership Plans
        </p>
        <p className="text-[#6F6F6F] leading-6 w-[664px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          urna nec nulla tempor dapibus. Nullam gravida sapien a volutpat
          ornare. Quisque fringilla, nunc vitae varius consequat, urna leo
          laoreet turpis, non tempus velit ligula sed libero.
        </p>
      </div>
      <div className="flex justify-center p-2 bg-[#171717] text-white rounded-full w-[166px]">
        <Link href={""}>Learn More</Link>
      </div>
    </div>
  );
};

export default AboutBambaHub;
