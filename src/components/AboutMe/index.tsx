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
      as={SimpleGrid}
      maxW={"7xl"}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={{ base: 10, sm: 20, lg: 20 }}
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
      <Stack
        justifyContent="center"
        border="1px"
        borderColor="beige"
        bgColor="blackAlpha.600"
        rounded={"lg"}
        p={{ base: 2, sm: 6, md: 12 }}
        spacing={{ base: 14 }}
        maxW="lg"
        maxH="lg"
      >
        <Stack spacing={4}>
          <About />
        </Stack>
      </Stack>
    </Container>
  );
}
