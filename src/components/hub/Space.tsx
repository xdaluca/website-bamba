import Image from "next/image";

const Space = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto w-full gap-4 xl:px-0 px-5 pb-20">
      <div className="grid grid-rows-[auto,1fr] gap-4">
        <Image
          src="/imagens/CardPages.png"
          alt="Descrição da imagem"
          width={1280}
          height={300}
          className="object-cover"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="md:h-[642px] h-[313px] bg-[#E1EFFF] p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-rich-black">
              Equipped kitchen
            </p>
            <div className="gap-4">
              <p className="font-semibold text-2xl text-rich-black">
                Relaxation area
              </p>
              <p className="text-rich-black leading-6">
                A welcoming space to take a break, grab a coffee or snack, and
                connect with other members.
              </p>
            </div>
          </div>

          <div className="md:h-[642px] h-[313px] bg-[rgb(225,239,255)] p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-rich-black">3</p>
            <div className="gap-4">
              <p className="font-semibold text-2xl text-rich-black">
                Meeting rooms
              </p>
              <p className="text-rich-black leading-6">
                Equipped with audiovisual technology, our rooms are perfect for
                meetings, workshops and presentations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[1fr,auto] gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="md:h-[642px] h-[313px] bg-rich-blatext-rich-black p-4 flex flex-col justify-between rounded-2xl">
            <p className="text-3xl font-semibold text-[#F7F7F6]">49</p>
            <div className="gap-4">
              <p className="font-semibold text-2xl text-[#F7F7F6]">
                Work tables
              </p>
              <p className="text-[#F7F7F6] leading-6">
                Comfortable and well-positioned spaces, ready to meet your daily
                work needs.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="bg-[#21EFFF]  h-[313px] text-rich-black xl:h-full p-4 flex flex-col justify-between rounded-2xl">
              <p className="text-3xl font-semibold ">3</p>
              <div className="gap-4">
                <p className="font-semibold text-2xl ">Booths private</p>
                <p className="leading-6">
                  For those who need privacy for video calls or focused work,
                  our cabins are ideal.
                </p>
              </div>
            </div>

            <div className="bg-[#E1EFFF] text-rich-black h-[313px] xl:h-full p-4 flex flex-col justify-between rounded-2xl">
              <p className="text-3xl font-semibold ">49</p>
              <div className="gap-4">
                <p className="font-semibold text-2xl ">Decompression areas</p>
                <p className=" leading-6">
                  We know that moments of relaxation are also important for
                  productivity. Take advantage of our comfortable areas to
                  recharge your batteries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/imagens/CardPages2.png"
          alt="Descrição da imagem"
          width={1280}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Space;
