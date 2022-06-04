import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, chakra, Link, Stack, Text, VStack } from "@chakra-ui/react";
import "@fontsource/krona-one";
import { Clock } from "./Clock";

export function PageCoutdown() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 0 }}
    >
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={2}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          tenha o gatilho urgência em suas vendas
        </chakra.h1>
        <VStack textAlign="center">
          <Text fontSize="lg" color={"whiteAlpha.500"}>
            Com o Coutdown Timer, o gatilho urgência é excelente para aumentar
            ainda mais as suas vendas, determinando quanto tempo o seu produto
            estará disponível para venda.
          </Text>
          <Text textAlign={"left"} mt={2}>
            Fonte:{" "}
            <Link
              color="blue.200"
              href="https://www.npmjs.com/package/react-countdown-circle-timer"
              isExternal
            >
              React Countdown Circle Timer <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={16}
        >
          <Clock />
        </Stack>
      </Box>
    </Stack>
  );
}
