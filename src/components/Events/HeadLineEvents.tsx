const HeadLineEvents = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-4 py-20 xl:px-0 px-6">
      <div className="flex gap-2 flex-col">
        <p className="text-sm text-dim-gray dark:text-[#B4B4B4]">
          About Bamba Events
        </p>
        <h2 className="text-rich-black dark:text-white text-3xl font-semibold">
          Bamba Events
        </h2>
      </div>
      <p className="text-dim-gray dark:text-[#B4B4B4] leading-6 md:w-[664px]">
        We proudly partner with some of the most innovative companies in the
        crypto and tech world, including Chainlink, The Graph, Arbitrum,
        Polygon, Near, Ethereum Foundation, OpenZeppelin, Ledger, Scroll,
        ETHKipu, Metacartel, Metamask Snaps, Celo, Lens, and others.
      </p>
    </div>
  );
};

export default HeadLineEvents;
