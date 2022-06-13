import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Icon,
  Link,
  Tag,
  HStack,
  TagLabel,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { GiBrazil } from "@react-icons/all-files/gi/GiBrazil";
import { StatusColor } from "./StatusColor";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box
      bg="blackAlpha.900"
      color={"beige"}
      borderTop={"1px solid"}
      borderTopColor={"beige"}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        mt={8}
        py={6}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction="row" spacing={6}>
          <Link href="https://instagram.com/maxinelobato">
            <Icon as={FaInstagram} w={8} h={8} />
          </Link>
          <Link href="https://github.com/maxinelobato">
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/maxine-lobato-a9613189/">
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="https://open.spotify.com/user/12147654153?si=4f79f1686ffb4cb2&nd=1">
            <Icon as={FaSpotify} w={8} h={8} />
          </Link>
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={6}>
          <Button
            color="white"
            fontWeight="bold"
            borderRadius="md"
            onClick={scrollToTop}
          >
            <ArrowUpIcon />
          </Button>
        </Stack>
      </Container>

      <Container
        as={Stack}
        mt={-10}
        py={8}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack align="center">
          <HStack py={6}>
            <Text>© 2022 - Desenvolvido no</Text>
            <Icon as={GiBrazil} />
            <Text ml={2}>por Maxine Lobato</Text>
          </HStack>
          <Tag
            size="lg"
            color="beige"
            bgColor="whiteAlpha.100"
            borderRadius="lg"
            shadow={"lg"}
          >
            <TagLabel>Hospedado por</TagLabel>
            <Image
              h={4}
              w={4}
              src="vercel_logo.svg"
              alt="Deployed by Vercel"
              ml={2}
              mr={2}
            />
            <TagLabel>Vercel</TagLabel>
            <StatusColor />
          </Tag>
        </Stack>
      </Container>
    </Box>
  );
}
