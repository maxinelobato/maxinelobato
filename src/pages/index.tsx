import { AccordionItens } from "../components/AccordionItens";
import { BoxGadient } from "../components/BoxGadient";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { PageFirst } from "../components/PageFirst";
import { PagePlane } from "../components/PagePlane";
import { PageTech } from "../components/PageTech";

const IndexPage = () => {
  return (
    <>
      <BoxGadient>
        <PageFirst />
        <PageTech />
        <PagePlane />
        <AccordionItens />
        <ContactForm />
      </BoxGadient>
      <Footer />
    </>
  );
};

export default IndexPage;
