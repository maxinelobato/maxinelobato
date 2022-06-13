import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/krona-one";
import { ReactNode } from "react";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { ModalPremium } from "../ModalPremium";
import { motion } from "framer-motion";
import React from "react";
import Bounce from "react-reveal/Bounce";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
      boxShadow="lg"
      direction={{ base: "column-reverse", md: "row" }}
      rounded={"xl"}
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
      }}
    >
      <Box alignSelf={{ base: "center", lg: "flex-start" }}>{children}</Box>
    </Flex>
  );
}

export function PagePlane() {
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
            fontFamily={"Krona One"}
          >
            os melhores planos do mercado
          </chakra.h1>
        </Bounce>
        <VStack textAlign="center" mt={-6} py={6}>
          <Bounce left duration={600}>
            <Text fontSize="lg" color={"whiteAlpha.500"}>
              Adquira um dos planos e tenha a sua página em até 5 dias. Parcele
              no cartão em até 4x SEM JUROS. Cancele quando quiser.
            </Text>
          </Bounce>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          {/** Plano 1 */}
          <Bounce top duration={700}>
            <PriceWrapper>
              <Box py={4} px={12}>
                <HStack justifyContent={"center"}>
                  <Tag
                    fontSize="sm"
                    colorScheme="green"
                    textTransform={"uppercase"}
                    variant={"solid"}
                    size={"lg"}
                  >
                    1 LP
                  </Tag>
                </HStack>
                <HStack justifyContent="center">
                  <Tag fontSize="sm" colorScheme="green">
                    Plano
                  </Tag>
                  <Text fontSize="5xl" fontWeight="900" color="green.300">
                    Lite
                  </Text>
                </HStack>
              </Box>
              <VStack
                bgGradient="linear(to-l, transparent, blackAlpha.600)"
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Logo Superior.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Sequência de Copys H1 e H2.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    CTA (simples, eficaz, frasal e quantitativo)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Imagem/Vídeo/Animação projetada sem invadir o texto.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Somente 1 Landing Page.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Manutenção mensal.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="https://wa.me/message/N7ODJHBPZALLJ1"
                    isExternal
                  >
                    <Button
                      textTransform={"uppercase"}
                      w="full"
                      colorScheme="green"
                      variant="outline"
                    >
                      saiba mais
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </PriceWrapper>
          </Bounce>
          {/** Plano 2 */}
          <Bounce top duration={800}>
            <PriceWrapper>
              <Box>
                <Box py={4} px={12}>
                  <HStack justifyContent={"center"}>
                    <Tag
                      fontSize="sm"
                      colorScheme="orange"
                      textTransform={"uppercase"}
                      variant={"solid"}
                      size={"lg"}
                    >
                      5 LPs
                    </Tag>
                  </HStack>
                  <HStack justifyContent="center">
                    <Tag fontSize="sm" colorScheme="orange">
                      Plano
                    </Tag>
                    <Text fontSize="5xl" fontWeight="900" color="orange.300">
                      Plus
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bgGradient="linear(to-l, transparent, blackAlpha.600)"
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      Logo Superior.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      Sequência de Copys H1 e H2.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      CTA (simples, eficaz, frasal e quantitativo)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      Imagem/Vídeo/Animação projetada sem invadir o texto.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      Até 5 Landing Pages.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      Manutenção mensal.
                    </ListItem>
                  </List>
                  <Box w="80%" pt={7}>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="https://wa.me/message/N7ODJHBPZALLJ1"
                      isExternal
                    >
                      <Button
                        textTransform={"uppercase"}
                        w="full"
                        colorScheme="orange"
                      >
                        saiba mais
                      </Button>
                    </Link>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
          </Bounce>
          {/** Plano 3 */}
          <Bounce top duration={900}>
            <PriceWrapper>
              <Box py={4} px={12}>
                <HStack justifyContent={"center"}>
                  <Tag
                    fontSize="sm"
                    colorScheme="blue"
                    textTransform={"uppercase"}
                    variant={"solid"}
                    size={"lg"}
                  >
                    Ilimitado
                  </Tag>
                </HStack>
                <HStack justifyContent="center">
                  <Tag fontSize="sm" colorScheme="blue">
                    Plano
                  </Tag>
                  <Text fontSize="5xl" fontWeight="900" color="blue.300">
                    Premium
                  </Text>
                </HStack>
              </Box>
              <VStack
                bgGradient="linear(to-l, transparent, blackAlpha.600)"
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Logo Superior.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Sequência de Copys H1 e H2.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    CTA (simples, eficaz, frasal e quantitativo)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Imagem/Vídeo/Animação projetada sem invadir o texto.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Landing Pages Ilimitadas.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Manutenção mensal.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <ModalPremium />
                </Box>
              </VStack>
            </PriceWrapper>
          </Bounce>
        </Stack>
      </Box>
    </Stack>
  );
}
