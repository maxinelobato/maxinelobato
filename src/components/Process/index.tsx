import {
  Heading,
  Button,
  Link as ChakraLink,
  Stack,
  VStack,
  useBreakpointValue,
  Flex,
  CircularProgress,
} from "@chakra-ui/react";
import Link from "next/link";

export function Process() {
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
          <CircularProgress
            isIndeterminate
            color="yellow.200"
            value={30}
            size="120px"
          />
          <Heading
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            bgGradient="linear(to-l, yellow.300, whiteAlpha.900)"
            bgClip="text"
            py={2}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontFamily={"Krona One"}
            as="h1"
          >
            Seu pagamento está processando <br /> Aguarde a confirmação!
          </Heading>
          <Stack direction={"row"}>
            <ChakraLink href="/" style={{ textDecoration: "none" }}>
              <Link href="/" passHref>
                <Button
                  boxShadow={"dark-lg"}
                  colorScheme="blackAlpha"
                  bgGradient="linear(to-l, yellow.500, yellow.600)"
                  color="whiteAlpha.900"
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
