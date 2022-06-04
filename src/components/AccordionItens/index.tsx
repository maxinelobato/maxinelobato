import { Box, chakra, Stack } from "@chakra-ui/react";
import { AccordionFaq } from "./AccordionFaq";

export function AccordionItens() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 2 }}
    >
      <Box maxW="7xl" mx={"auto"} pt={0} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={16}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          perguntas e respostas
        </chakra.h1>
        <AccordionFaq />
      </Box>
    </Stack>
  );
}
