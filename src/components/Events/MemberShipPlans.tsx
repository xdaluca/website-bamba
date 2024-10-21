import Link from "next/link";

const MemberShipPlans = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto w-full py-20 flex flex-col justify-center items-center gap-8 px-6 pb-60">
        <div className="gap-4 flex flex-col text-center justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-sm text-dim-gray font-medium">About Bamba Hub</p>
            <p className="text-rich-black text-3xl font-semibold">
              Membership Plans
            </p>
          </div>
          <p className="text-dim-gray leading-6 md:w-[664px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            urna nec nulla tempor dapibus. Nullam gravida sapien a volutpat
            ornare. Quisque fringilla, nunc vitae varius consequat, urna leo
            laoreet turpis, non tempus velit ligula sed libero.
          </p>
        </div>
        <div className="flex justify-center p-2 bg-rich-black text-very-light-gray rounded-full md:w-[166px] w-full transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <Link href={""}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default MemberShipPlans;
