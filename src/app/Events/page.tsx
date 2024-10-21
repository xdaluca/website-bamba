import {
  AboutBambaEvents,
  BambaEvents,
  HeadLineEvents,
  MemberShipPlans,
  Partners,
  Template,
} from "@/components/Events";

const Events = () => {
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
