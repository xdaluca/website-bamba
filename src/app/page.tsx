import { Template } from "@/components";
import { BambaEco, BambaTeam, HeadLine, OurPartners } from "@/components/home";

export const metadata = {
  title: "Bamba Labs | Home",
  description: "Home",
};

export default function Home() {
  return (
    <Template>
      <HeadLine />
      <BambaEco />
      <OurPartners />
      <BambaTeam />
    </Template>
  );
}
