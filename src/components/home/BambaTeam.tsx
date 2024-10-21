const data = [
  {
    name: "Luca Cosivi",
    position: "Co-Founder",
  },
  {
    name: "Antônio Carneiro",
    position: "Co-Founder",
  },
  {
    name: "Thomas Bourlon",
    position: "Co-Founder",
  },
  {
    name: "Vinicius Santos",
    position: "Developer Relations",
  },
  {
    name: "Larissa Freitas",
    position: "Hub & Events Lead",
  },
  {
    name: "Manoela Franco",
    position: "General Counsel",
  },
];

const BambaTeam = () => {
  return (
    <div className="max-w-7xl mx-auto w-full xl:px-0 px-6 mb-[450px]">
      <div className="flex flex-col md:flex-row gap-16 px-6 bg-[#171717] rounded-2xl text-center md:text-left py-20">
        <div className="flex-1 gap-4 flex flex-col justify-center">
          <div className="gap-2">
            <p className="text-sm text-[#DBDBDB]">Bamba Team</p>
            <h3 className="text-2xl font-semibold leading-8 text-[#F6F7F6]">
              Bamba Team: Innovation in every detail
            </h3>
          </div>
          <p className="text-[#DBDBDB] gap-6">
            Meet the visionaries leading Bamba Labs. With a unique blend of
            experience and passion, our leadership team is shaping the future of
            innovation and technology, driving the transformation of Rio de
            Janeiro into the epicenter of entrepreneurship in Latin America.
          </p>
        </div>
        <div
          className="overflow-x-auto flex md:grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {data.map((member, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-6 rounded-lg flex-shrink-0"
              style={{ flex: "0 0 auto" }}
            >
              <h4 className="text-lg font-semibold text-[#F6F7F6]">
                {member.name}
              </h4>
              <p className="text-[#DBDBDB]">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BambaTeam;
