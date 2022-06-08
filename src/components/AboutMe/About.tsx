import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsSpotify, BsWhatsapp } from "react-icons/bs";
import React from "react";
import Bounce from "react-reveal/Bounce";

export function About() {
  return (
    <Bounce top duration={500} cascade>
      <Box rounded={"lg"} p={0} textAlign={"center"}>
        <Avatar
          size={"xl"}
          src={"maxinelobato.svg"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Maxine L. Lima
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @maxinelobato
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Prospecção e Vendas
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Dev. Front-End & UX/UI
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Gestora de Tráfego
        </Text>
        <Stack direction={"row"} justify={"center"} spacing={6} mt={10}>
          <Link href={"https://www.instagram.com/maxinelobato"} isExternal>
            <Icon as={BsInstagram} w={10} h={10} color={"beige"} />
          </Link>
          <Link
            href={
              "https://open.spotify.com/user/12147654153?si=4f79f1686ffb4cb2"
            }
            isExternal
          >
            <Icon as={BsSpotify} w={10} h={10} color={"beige"} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/maxine-lobato-a9613189/"}
            isExternal
          >
            <Icon as={BsLinkedin} w={10} h={10} color={"beige"} />
          </Link>
        </Stack>
        <Stack mt={10} direction={"column"} alignItems="center">
          <HStack>
            <Button
              size="lg"
              variant="solid"
              fontSize={"sm"}
              rounded="md"
              colorScheme="whatsapp"
              rightIcon={<BsWhatsapp />}
              textTransform="uppercase"
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://wa.me/message/N7ODJHBPZALLJ1"
                isExternal
              >
                me chame no Whatsapp
              </Link>
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Bounce>
  );
}
