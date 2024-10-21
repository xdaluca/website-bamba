import AboutBambaEvents from "@/components/Events/AboutBambaEvents";
import AboutBambaHub from "@/components/Events/AboutBambaHub";
import BambaEvents from "@/components/Events/BambaEvents";
import HeadLineEvents from "@/components/Events/HeadLineEvents";
import Partners from "@/components/Events/Partners";
import Template from "@/components/Template";
import { FC } from "react";

const Events: FC = () => {
  return (
    <Template>
      <HeadLineEvents />
      <BambaEvents />
      <Partners />
      <AboutBambaEvents />
      <AboutBambaHub />
    </Template>
  );
};

export default Events;
