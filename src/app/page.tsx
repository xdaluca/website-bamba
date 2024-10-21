import BambaEco from "@/components/home/BambaEco";
import BambaTeam from "@/components/home/BambaTeam";
import HeadLine from "@/components/home/HeadLine";
import OurPartners from "@/components/home/OurPartners";
import Template from "@/components/Template";

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
