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
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typed from "react-typed";

export const PageFirst = () => {
  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" color="blackAlpha.900" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
  return (
    <>
      <Stack
        spacing={{ base: 8, md: 14 }}
        direction={{ base: "column", md: "row" }}
        py={{ base: 0, md: 10 }}
        backgroundImage={"url(code.svg)"}
        backgroundSize="cover"
        backgroundPosition={"center center"}
        minH={"100vh"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack w="full" maxW="4xl">
            <Box maxW="full">
              <Box
                borderWidth="2px"
                borderRadius="lg"
                overflow="hidden"
                bgColor="blackAlpha.700"
              >
                <Box mt={-3} maxW="full" bgColor="beige">
                  <Box ml={3}>
                    <CircleIcon mt={3} />
                    <CircleIcon mt={3} />
                    <CircleIcon mt={3} />
                  </Box>
                </Box>
                <Heading
                  textAlign={"center"}
                  bgGradient="linear(to-l, orange.300, beige)"
                  bgClip="text"
                  mb={4}
                  p={10}
                  fontFamily="Krona One"
                  fontSize="xxx-large"
                >
                  <Typed
                    strings={[
                      "Sua Landing Page demora mais de 3 segundos para carregar?",
                    ]}
                    typeSpeed={40}
                  />
                </Heading>
                <Text
                  textAlign={"center"}
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
                <Stack
                  py={10}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
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
                      bgColor="beige"
                      textColor={"blackAlpha.900"}
                      _hover={{
                        bg: "orange.500",
                        textColor: "beige",
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition="0.1s linear"
                    >
                      <Center>
                        <Text textTransform={"uppercase"}>
                          Saiba como funciona
                        </Text>
                      </Center>
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};
