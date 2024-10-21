import { Template } from "@/components";
import {
  EventsAndNetworking,
  HeadLineHub,
  MembershipPlans,
  OurPartners,
  Space,
} from "@/components/hub";

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
      <EventsAndNetworking />
      <MembershipPlans />
    </Template>
  );
};

export default Hub;
