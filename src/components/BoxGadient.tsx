import { Box, BoxProps } from "@chakra-ui/react";
import { AboutMe } from "./AboutMe";
import { AccordionItens } from "./AccordionItens";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import { PageCoutdown } from "./PageCoutdown";
import { PagePlane } from "./PagePlane";
import { PageTech } from "./PageTech";

export function BoxGadient(props: BoxProps) {
  return (
    <Box
      minH="100vh"
      color="beige"
      bgGradient="linear(to-l, orange.700, purple.800)"
      {...props}
    />
  );
}
