const data = [
  {
    title: "Hub",
    description:
      "Our space is the meeting point for builders and who are shaping the future of cryptocurrencies and technology in Rio.",
    bg: "bg-[#E1EFFF]",
  },
  {
    title: "Events",
    description:
      "Hackathons and meetups that accelerate ideas and connect innovative minds to create solutions ecosystem.",
    bg: "bg-azure",
  },
  {
    title: "Builders",
    description:
      "A community of dedicated builders developing the next generation of Web3 and Blockchain solutions.",
    bg: "bg-[#E1EFFF]",
  },
  {
    title: "Studio",
    description:
      "We empower startups with strategic and development, helping them grow in the crypto and tech landscape.",
    bg: "bg-azure",
  },
];

const BambaEco = () => {
  return (
    <div className="w-full flex justify-center items-center px-6">
      <div
        className="max-w-7xl mx-auto flex flex-col items-center justify-center bg-rich-black px-6 gap-8 rounded-2xl py-20"
        style={{ boxShadow: "0px -40px 160px 0px #007AFF29" }}
      >
        <div className="gap-2">
          <p className="text-azure text-sm text-center">Bamba Ecossystem</p>
          <p className="text-center text-very-light-gray font-semibold text-2xl leading-8">
            Our Ecosystem: Innovation, <br className="hidden md:flex" />{" "}
            Technology and Collaboration
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-center w-full md:w-[calc(50%-20px)] h-[304px] md:h-[228px] ${item.bg} p-6 gap-6 rounded-2xl text-rich-black transition duration-300 ease-in-out hover:scale-105`}
            >
              <div className="gap-4">
                <div className="flex flex-row space-x-2 mb-5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9999 3.84187C9.28414 3.84187 3.83992 9.28609 3.83992 16.0019C3.83992 22.7176 9.28414 28.1618 15.9999 28.1618C22.7157 28.1618 28.16 22.7176 28.16 16.0019C28.16 9.28609 22.7157 3.84187 15.9999 3.84187ZM1.91992 16.0019C1.91992 8.2257 8.22374 1.92188 15.9999 1.92188C23.776 1.92188 30.08 8.2257 30.08 16.0019C30.08 23.778 23.776 30.0818 15.9999 30.0818C8.22374 30.0818 1.91992 23.778 1.91992 16.0019Z"
                      fill="#171717"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.7991 16.8551H3.19922V15.1484H28.7991V16.8551Z"
                      fill="#171717"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.147 28.7997V3.19974H16.8537V28.7997H15.147ZM22.1339 15.9997C22.1339 11.3645 20.467 6.779 17.1991 3.74706L18.2148 2.65234C21.845 6.02039 23.6272 11.0349 23.6272 15.9997C23.6272 20.9645 21.845 25.979 18.2148 29.3471L17.1991 28.2523C20.467 25.2204 22.1339 20.6349 22.1339 15.9997ZM8.5332 15.9997C8.5332 11.0421 10.2573 6.0302 13.7769 2.66041L14.8096 3.73906C11.6447 6.76929 10.0265 11.3574 10.0265 15.9997C10.0266 20.6421 11.6447 25.2302 14.8097 28.2604L13.7769 29.339C10.2573 25.9692 8.53322 20.9574 8.5332 15.9997Z"
                      fill="#171717"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.0006 8.44531C20.6285 8.44531 25.3346 9.30108 28.5246 11.0831C28.8847 11.2842 29.0136 11.7391 28.8124 12.0991C28.6114 12.4591 28.1564 12.5879 27.7965 12.3868C24.9167 10.7782 20.4977 9.93865 16.0006 9.93865C11.5034 9.93865 7.08443 10.7782 4.20468 12.3868C3.84466 12.5879 3.38979 12.4591 3.18868 12.0991C2.9876 11.7391 3.11641 11.2842 3.47643 11.0831C6.66659 9.30108 11.3727 8.44531 16.0006 8.44531ZM16.0006 23.1482C20.6285 23.1482 25.3346 22.2923 28.5246 20.5104C28.8847 20.3093 29.0136 19.8544 28.8124 19.4944C28.6114 19.1344 28.1564 19.0055 27.7965 19.2066C24.9167 20.8153 20.4977 21.6549 16.0006 21.6549C11.5034 21.6549 7.08443 20.8153 4.20468 19.2067C3.84466 19.0055 3.38979 19.1344 3.18868 19.4944C2.9876 19.8544 3.11641 20.3093 3.47643 20.5104C6.66659 22.2923 11.3727 23.1482 16.0006 23.1482Z"
                      fill="#171717"
                    />
                  </svg>
                  <p className="text-3xl font-semibold">{item.title}</p>
                </div>
                <p className="leading-6">{item.description}</p>
              </div>

              <div className="self-end w-full md:w-[151px] flex justify-center p-2 bg-rich-black text-very-light-gray rounded-full">
                <p>Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BambaEco;
