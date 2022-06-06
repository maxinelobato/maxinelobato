import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Icon,
  ModalFooter,
  ModalBody,
  ModalContent,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsSpotify } from "react-icons/bs";
import React from "react";
import Bounce from "react-reveal/Bounce";

export function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Bounce top duration={500} cascade>
      <Box rounded={"lg"} p={3} textAlign={"center"}>
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
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Conheça minha história...</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  fontSize="sm"
                  color={"whiteAlpha.500"}
                  p={2}
                  textAlign={["left", "center"]}
                >
                  Depois de formada por 10 anos em Sistemas de Informação,
                  entendi que um certificado não significava nada se você não
                  tem experiência comprovada. <br />
                  Depois de trabalhar com vários projetos e de forma autônoma,
                  resolvi empreender vendendo brigadeiros, eu e a minha sócia{" "}
                  <Link
                    fontWeight={"bold"}
                    color={"hotpink"}
                    href="https://www.instagram.com/soudosanjos"
                    isExternal
                  >
                    Thaís Barreto
                  </Link>{" "}
                  não tínhamos nenhuma fonte de renda e nenhuma habildiade com
                  vendas, mas só tínhamos uma certeza, nosso produto tinha que
                  ser bom.
                  <br />
                  Com isso, um grande amigo nos apresentou uma oportunidade para
                  fazermos parte de um negócio que forma líderes ao redor do
                  mundo. Foi aí que entendemos que não só bastava agir, mas
                  adquirir habilidades que não tínhamos aprendido na faculdade,
                  afinal, o nosso ensino é todo voltado para você se tornar um
                  empregado de alguém e jamais um dono do próprio negócio.
                  <br />
                  Entendemos que gestão financeira, inteligência emocional,
                  processo de vendas, liderança e mentalidade, estavam em
                  livros, aúdios e em pessoas de referência. <br />
                  À partir daí, entendemos que teríamos que nos educar muito e
                  viver esse processo.
                  <br />
                  Ainda vivendo este processo com muito amor e aprendizado, hoje
                  além de fazer parte do programa, um grande amigo e sócio me
                  falou sobre o tráfego pago e como isso seria legal se
                  procurássemos informação, fui atrás e comecei a estudar com os
                  grandes mestres Pedro Sobral, Tiago Tessmann e Caio
                  Calderaro,depois de muitos erros e acertos, consegui colher
                  meus primeiros resultados.
                  <br />
                  Houve então a necessidade de desenvolver sites, só que com um
                  único foco, Landing Pages de alta conversão, então fui
                  procurar ajuda e buscar o que tinha de melhor no mercado para
                  voltar e trazer algo excelente. <br />
                  Foi quando outro grande amigo meu me falou do mercado e das
                  tendências e me disse para estudar na{" "}
                  <Link
                    color={"purple.500"}
                    fontWeight={"bold"}
                    href="https://www.rocketseat.com.br/"
                    isExternal
                  >
                    Rocketseat
                  </Link>
                  , já fazendo cursos de Gestão de Tráfego e me atualizando na
                  plataforma, resolvi trazer uma necessidade que muitas pessoas
                  ainda não sabem, que é expandir sua marca, alcançar mais
                  pessoas, vender seu produto, serviço, etc. Um dos primeiros
                  passos que você irá ter é começar com uma Landing Page, tudo
                  isso me fez pensar que de forma simples e com o melhor do
                  mercado, você já pode alcançar e ter os melhores resultados no
                  Google.
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
        <Stack mt={5} direction={"column"}>
          <Button fontSize={"sm"} rounded={"full"} color={"white"}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://wa.me/message/N7ODJHBPZALLJ1"
              isExternal
            >
              Me chame no Whatsapp
            </Link>
          </Button>
          <Button
            onClick={onOpen}
            rounded={"full"}
            fontSize={"sm"}
            colorScheme={"red"}
          >
            Conheça a minha História
          </Button>
        </Stack>
      </Box>
    </Bounce>
  );
}
