import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Bounce from "react-reveal/Bounce";

const testimonials = [
  {
    name: "Thais Barreto",
    role: "Networker, Co-Fundadora e CEO da Organização Barreto & Lobato",
    content:
      "Um pessoa que se importa muito com os resultados dos seus clientes, luta por ele e muito comprometida com o seu trabalho.",
    avatar: "thaisbarreto.svg",
  },
  {
    name: "Thais Barreto",
    role: "Networker, Co-Fundadora e CEO da Organização Barreto & Lobato",
    content:
      "Um pessoa que se importa muito com os resultados dos seus clientes, luta por ele e muito comprometida com o seu trabalho.",
    avatar: "thaisbarreto.svg",
  },
  {
    name: "Thais Barreto",
    role: "Networker, Co-Fundadora e CEO da Organização Barreto & Lobato",
    content:
      "Um pessoa que se importa muito com os resultados dos seus clientes, luta por ele e muito comprometida com o seu trabalho.",
    avatar: "thaisbarreto.svg",
  },
  {
    name: "Thais Barreto",
    role: "Networker, Co-Fundadora e CEO da Organização Barreto & Lobato",
    content:
      "Um pessoa que se importa muito com os resultados dos seus clientes, luta por ele e muito comprometida com o seu trabalho.",
    avatar: "thaisbarreto.svg",
  },
];

const backgrounds = [
  `url("backdrop.svg")`,
  `url("backdrop.svg")`,
  `url("backdrop.svg")`,
  `url("backdrop.svg")`,
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow="lg"
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
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
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span fontWeight={"medium"} color={"gray.500"}>
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function SocialProve() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 2 }}
    >
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <Bounce left duration={500}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontFamily="Krona One"
          >
            o que os clientes dizem
          </chakra.h1>
        </Bounce>
        <VStack textAlign="center" mt={-6} py={6}>
          <Bounce left duration={600}>
            <Text fontSize="lg" color={"whiteAlpha.500"}>
              Dar o nosso melhor todos os dias é a nossa principal função na
              vida.
            </Text>
          </Bounce>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {testimonials.map((cardInfo, index) => (
            // eslint-disable-next-line react/jsx-key
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
