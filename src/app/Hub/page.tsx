import EventsAndNetworking from "@/components/hub/EventsAndNetworking";
import HeadLineHub from "@/components/hub/HeadLineHub";
import MembershipPlans from "@/components/hub/MembershipPlans";
import OurPartners from "@/components/hub/OurPartners";
import Space from "@/components/hub/Space";
import Template from "@/components/Template";
import { FC } from "react";

const Hub: FC = () => {
  return (
    <Template>
      <HeadLineHub />
      <Space />
      <OurPartners />
      <EventsAndNetworking />
      <MembershipPlans />
    </Template>
  );
};

export default Hub;
