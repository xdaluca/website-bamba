import { Template } from "@/components";
import {
  EventsAndNetworking,
  HeadLineHub,
  MembershipPlans,
  OurPartners,
  Space,
} from "@/components/cowork";

export const metadata = {
  title: "Bamba Labs | Hub",
  description: "Hub",
};
const Hub = () => {
  return (
    <Template>
      <HeadLineHub />
      <Space />
      <OurPartners />
      <MembershipPlans />
      <EventsAndNetworking />
    </Template>
  );
};

export default Hub;
