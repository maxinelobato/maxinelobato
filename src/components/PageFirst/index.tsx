import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  Center,
  Box,
  Link,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typed from "react-typed";

export const PageFirst = () => {
  return (
    <>
      <Stack
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        direction={{ base: "column", md: "row" }}
        py={{ base: 0, md: 10 }}
        backgroundImage={"url(code.svg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        minH={"80vh"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack w="full" maxW="lg">
            <Box maxW="lg">
              <Heading
                bgGradient="linear(to-l, orange.300, beige)"
                bgClip="text"
                mb={4}
                fontFamily="Krona One"
                fontSize="xxx-large"
                as="h2"
              >
                <Typed
                  strings={[
                    "Sua Landing Page demora mais de 3 segundos para carregar?",
                  ]}
                  typeSpeed={40}
                />
              </Heading>
              <Text
                py={3}
                color="beige"
                fontFamily="Krona One"
                as="h4"
                size="md"
                fontSize="sm"
              >
                Você sabia que as pesquisas indicam que um delay de
                <Tag
                  size="sm"
                  fontSize="sm"
                  variant="subtle"
                  colorScheme="orange"
                >
                  <TagLabel>2 SEGUNDOS</TagLabel>
                </Tag>
                pode resultar em um abandono de até{" "}
                <Tag
                  size="sm"
                  fontSize="sm"
                  variant="subtle"
                  colorScheme="orange"
                >
                  <TagLabel>87% nas visitas?</TagLabel>
                </Tag>
              </Text>
            </Box>
            <Stack
              py={3}
              justify={"center"}
              direction={{ base: "column", md: "row" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://wa.me/message/N7ODJHBPZALLJ1"
                isExternal
              >
                <Button
                  as={motion.div}
                  size={"lg"}
                  height="60px"
                  width="300px"
                  rounded={"lg"}
                  bgColor={"blackAlpha.900"}
                  textColor={"beige"}
                  boxShadow={"0 5px 20px 0px rgb(255 255 145 / 80%)"}
                  _hover={{
                    bg: "orange.500",
                    textColor: "beige",
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition="0.1s linear"
                >
                  <Center>
                    <Text textTransform={"uppercase"}>Saiba como funciona</Text>
                  </Center>
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};
