import { Box, chakra, Stack } from "@chakra-ui/react";
import { AccordionFaq } from "./AccordionFaq";
import React from "react";
import Bounce from "react-reveal/Bounce";

export function AccordionItens() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 2 }}
    >
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <Bounce left>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={16}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontFamily={"Krona One"}
          >
            faq - perguntas e respostas
          </chakra.h1>
        </Bounce>
        <AccordionFaq />
      </Box>
    </Stack>
  );
}
