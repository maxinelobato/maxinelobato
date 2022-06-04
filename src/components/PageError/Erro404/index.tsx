import { NotAllowedIcon } from "@chakra-ui/icons";
import {
  Heading,
  Button,
  Link as ChakraLink,
  Stack,
  VStack,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

export function Erro404() {
  return (
    <Flex
      minH={"100vh"}
      bgGradient="linear(to-l, red.900, red.800)"
      py={{ base: 0, md: 2 }}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack align={"center"} spacing={10}>
          <NotAllowedIcon w={56} h={56} mr={2} color="red.200" />
          <Heading
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            letterSpacing={"wide"}
            py={3}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontFamily={"Krona One"}
          >
            Erro 404
          </Heading>
          <Heading
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            letterSpacing={"wide"}
            py={3}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontFamily={"Krona One"}
          >
            Página não encontrada!
          </Heading>
          <Stack direction={"row"}>
            <ChakraLink href="/" style={{ textDecoration: "none" }}>
              <Link href="/" passHref>
                <Button
                  boxShadow={"base"}
                  colorScheme="blackAlpha"
                  bgGradient="linear(to-l, red.300, red.600)"
                  color="white"
                  variant="solid"
                  size={"lg"}
                >
                  Volte para a página inicial!
                </Button>
              </Link>
            </ChakraLink>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
