import {
  Stack,
  Flex,
  Button,
  Text,
  Image,
  Heading,
  Center,
  Box,
  Link,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { CgArrowRightR } from "@react-icons/all-files/cg/CgArrowRightR";
import { motion } from "framer-motion";
import Typed from "react-typed";

export const PageFirst = () => {
  return (
    <>
      <Stack
        textAlign={"left"}
        spacing={{ base: 8, md: 14 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Box maxW="38rem">
              <Heading
                bgGradient="linear(to-l, orange.300, beige)"
                bgClip="text"
                mb={4}
                fontFamily="Krona One"
                as="h2"
                size="xl"
              >
                <Typed
                  strings={[
                    "Sua Landing Page demora mais de 3 segundos para carregar?",
                  ]}
                  typeSpeed={40}
                  loop
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
              justify={"left"}
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
                  leftIcon={<CgArrowRightR />}
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
        <Flex justifyContent="space-evenly" flex={1}>
          <Image
            alt={"Layout Responsivo"}
            loading="lazy"
            src={"device1.svg"}
            h={"90%"}
            w={"90%"}
          />
        </Flex>
      </Stack>
    </>
  );
};
