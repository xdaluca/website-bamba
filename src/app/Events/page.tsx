import {
  AboutBambaEvents,
  BambaEvents,
  HeadLineEvents,
  Partners,
  Template,
} from "@/components/Events";

export const metadata = {
  title: "Bamba Labs | Events",
  description: "Events",
};
const Events = () => {
  return (
    <Template>
      <HeadLineEvents />
      <BambaEvents />
      <Partners />
      <AboutBambaEvents />
      {/* <MemberShipPlans /> */}
    </Template>
  );
};

export default Events;
