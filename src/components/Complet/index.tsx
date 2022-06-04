import { CheckCircleIcon } from "@chakra-ui/icons";
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

export function Complet() {
  return (
    <Flex
      minH={"100vh"}
      bgGradient="linear(to-l, orange.900, purple.800)"
      py={{ base: 0, md: 2 }}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack align={"center"} spacing={6}>
          <CheckCircleIcon w={14} h={14} mr={2} color="green.200" />
          <Heading
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            bgGradient="linear(to-l, green.300, whiteAlpha.900)"
            bgClip="text"
            py={2}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontFamily={"Krona One"}
            as="h1"
          >
            Pagamento efetuado <br /> com sucesso!
          </Heading>
          <Stack direction={"row"}>
            <ChakraLink href="/" style={{ textDecoration: "none" }}>
              <Link href="/" passHref>
                <Button
                  boxShadow={"dark-lg"}
                  colorScheme="blackAlpha"
                  bgGradient="linear(to-l, green.500, green.600)"
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
