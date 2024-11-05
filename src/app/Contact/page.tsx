import { Template } from "@/components";
import FormContact from "@/components/Contact/FormContact";
import HeadLineContact from "@/components/Contact/HeadLineContact";

export const metadata = {
  title: "Bamba Labs | Contact",
  description: "Contact",
};
const Contact = () => {
  return (
    <Template>
      <HeadLineContact />
      <FormContact />
    </Template>
  );
};

export default Contact;
