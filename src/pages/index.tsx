import { AboutMe } from "../components/AboutMe";
import { AccordionItens } from "../components/AccordionItens";
import { BoxGadient } from "../components/BoxGadient";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { PageCoutdown } from "../components/PageCoutdown";
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
        <PageCoutdown />
        <AccordionItens />
        <ContactForm />
      </BoxGadient>
      <Footer />
    </>
  );
};

export default IndexPage;
