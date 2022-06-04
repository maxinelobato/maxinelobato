import {
  Box,
  Container,
  Icon,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { GiBrazil } from "@react-icons/all-files/gi/GiBrazil";
import { LogoTecs } from "../LogoTecs";

export function SecondFooter() {
  return (
    <Box bg="blackAlpha.600" color={"beige"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={8}
        justify={"center"}
        align={"center"}
      >
        <LogoTecs />
        <Container
          py={5}
          as={Stack}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Icon as={GiBrazil} color="whiteAlpha.400" />
          <Text color={"whiteAlpha.400"}>Brasil</Text>
        </Container>
        <Tag
          color={"whiteAlpha.400"}
          size="sm"
          bgGradient="linear(to-l, blackAlpha.700, blackAlpha.800)"
          borderRadius="full"
          fontSize={"smaller"}
          shadow={"lg"}
        >
          <TagLabel>Desenvolvido por Maxine L. Lima</TagLabel>
        </Tag>
      </Container>
    </Box>
  );
}
