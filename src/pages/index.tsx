import { AboutMe } from "../components/AboutMe";
import { AccordionItens } from "../components/AccordionItens";
import { BoxGadient } from "../components/BoxGadient";
import { Footer } from "../components/Footer";
import { PageFirst } from "../components/PageFirst";
import { PagePlane } from "../components/PagePlane";
import { PageTech } from "../components/PageTech";
import SocialProve from "../components/SocialProve";

const IndexPage = () => {
  return (
    <>
      <BoxGadient>
        <PageFirst />
        <PageTech />
        <PagePlane />
        <SocialProve />
        <AccordionItens />
        <AboutMe />
      </BoxGadient>
      <Footer />
    </>
  );
};

export default IndexPage;
