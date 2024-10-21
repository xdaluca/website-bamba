import { FC } from "react";

const HeadLineBuilders: FC = () => {
  return (
    <div className="h-[340px] text-center flex flex-col items-center justify-center max-w-7xl mx-auto w-full space-y-5">
      <p className="text-sm text-[#6F6F6F]">About Bamba Builders</p>
      <p className="text-[#171717] text-3xl font-semibold">Bamba Builders</p>
      <p className="text-[#6F6F6F] ">
        We proudly partner with some of the most innovative companies in the
        crypto and tech world, including Chainlink, The Graph, Arbitrum,
        Polygon, Near, Ethereum Foundation, OpenZeppelin, Ledger, Scroll,
        ETHKipu, Metacartel, Metamask Snaps, Celo, Lens, and others.
      </p>
    </div>
  );
};

export default HeadLineBuilders;
