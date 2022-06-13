import {
  Stack,
  Text,
  Heading,
  Icon,
  Box,
  AvatarGroup,
  useBreakpointValue,
  Tag,
  TagLabel,
  Container,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import "@fontsource/krona-one";
import { AiFillHeart } from "react-icons/ai";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { About } from "./About";
import React from "react";
import Bounce from "react-reveal/Bounce";

export function AboutMe() {
  return (
    <Container
      minH="100vh"
      as={SimpleGrid}
      maxW={"7xl"}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={{ base: 10, sm: 20, lg: 32 }}
    >
      <Stack spacing={{ base: 10, md: 20 }}>
        <Box maxW="32rem">
          <Bounce left>
            <Heading
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Sabemos do potencial deste mercado{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              Vou dar o meu melhor para lhe ajudar.
            </Heading>
          </Bounce>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <Icon
                  as={IoPeopleCircleSharp}
                  w={"14"}
                  h={"14"}
                  color="blackAlpha.500"
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  zIndex={2}
                  ml={-2}
                  mr={3}
                />
                <TagLabel textTransform={"uppercase"}>Eu</TagLabel>
              </Tag>
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <AvatarGroup>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <TagLabel textTransform={"uppercase"}>você</TagLabel>
                <Icon
                  as={AiFillHeart}
                  w={"14"}
                  h={"14"}
                  color="red.500"
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  zIndex={2}
                  ml={2}
                  mr={-3}
                />
              </Tag>
            </AvatarGroup>
          </Stack>
        </Box>
      </Stack>
      <Flex
        boxShadow="lg"
        direction="column"
        rounded="xl"
        justifyContent={"center"}
        bg="whiteAlpha.200"
        border="1px solid"
        borderColor="whiteAlpha.400"
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
        }}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "full",
          maxW: "640px",
          width: "full",
          filter: "blur(40px)",
          transform: "scale(0.98)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <About />
      </Flex>
    </Container>
  );
}
