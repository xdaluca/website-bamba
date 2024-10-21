import AboutBambaEvents from "@/components/Events/AboutBambaEvents";
import BambaEvents from "@/components/Events/BambaEvents";
import HeadLineEvents from "@/components/Events/HeadLineEvents";
import Partners from "@/components/Events/Partners";
import Template from "@/components/Template";
import { FC } from "react";
import MemberShipPlans from "@/components/Events/MemberShipPlans";

const Events: FC = () => {
  return (
    <Template>
      <HeadLineEvents />
      <BambaEvents />
      <Partners />
      <AboutBambaEvents />
      <MemberShipPlans />
    </Template>
  );
};

export default Events;
