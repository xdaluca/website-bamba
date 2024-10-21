import { Template } from "@/components";
import {
  EventsAndNetworking,
  HeadLineHub,
  MembershipPlans,
  OurPartners,
  Space,
} from "@/components/hub";

const Hub = () => {
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
