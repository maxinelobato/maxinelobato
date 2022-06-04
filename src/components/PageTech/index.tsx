import {
  Box,
  chakra,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  Image,
  Text,
} from "@chakra-ui/react";
import { Code, Kbd, Link } from "@chakra-ui/layout";
import { CheckCircleIcon } from "@chakra-ui/icons";
import "@fontsource/krona-one";
import { motion } from "framer-motion";

export const PageTech = () => {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 2 }}
    >
      <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={16}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          Sua Experiência é a nossa missão
        </chakra.h1>
        {/** SIMPLEGRID 1 */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/** CARD_1 */}
          <Stat
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            transition="0.1s linear"
            px={{ base: 4, md: 8 }}
            py={"5"}
            shadow={"lg"}
            bgGradient="linear(to-l, blackAlpha.600, transparent)"
            rounded={"lg"}
          >
            <Box mb={2} display={{ md: "flex" }}>
              <Box flexShrink={0}>
                <Image
                  mt={1}
                  h={10}
                  w={10}
                  src="imageoptimization.svg"
                  alt="Otimização de Imagens"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                  fontSize="2xl"
                  lineHeight="normal"
                  fontFamily={"Krona One"}
                  color={"green.300"}
                >
                  Otimização de Imagens
                </Text>
              </Box>
            </Box>
            <br />
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="green.300" />
              Alta performance
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="green.300" />
              Estabilidade Visual
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="green.300" />
              Carregamento Rápido
            </StatHelpText>
          </Stat>
          {/** CARD_2 */}
          <Stat
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            transition="0.1s linear"
            px={{ base: 4, md: 8 }}
            py={"5"}
            shadow={"lg"}
            bgGradient="linear(to-l, blackAlpha.600, transparent)"
            rounded={"lg"}
          >
            <Box mb={2} display={{ md: "flex" }}>
              <Box flexShrink={0}>
                <Image
                  mt={1}
                  h={10}
                  w={10}
                  src="seo.svg"
                  alt="SEO em Tempo Real"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                  fontSize="2xl"
                  lineHeight="normal"
                  fontFamily={"Krona One"}
                  color={"blue.300"}
                >
                  SEO em Tempo Real
                </Text>
              </Box>
            </Box>
            <br />
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="blue.300" />
              Experiência em Tempo Real
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="blue.300" />
              Colete Informações Vitais
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="blue.300" />
              Performance em Cada Página
            </StatHelpText>
          </Stat>
          {/** CARD_3 */}
          <Stat
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            transition="0.1s linear"
            px={{ base: 4, md: 8 }}
            py={"5"}
            shadow={"lg"}
            bgGradient="linear(to-l, blackAlpha.600, transparent)"
            rounded={"lg"}
          >
            <Box mb={2} display={{ md: "flex" }}>
              <Box flexShrink={0}>
                <Image
                  mt={1}
                  h={10}
                  w={10}
                  src="ux.svg"
                  alt="Experiência de Usuário"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                  fontSize="2xl"
                  lineHeight="normal"
                  fontFamily={"Krona One"}
                  color={"beige"}
                >
                  Experiência de Usuário
                </Text>
              </Box>
            </Box>
            <br />
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="beige" />
              <Code>Menos Código</Code> + Velocidade
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="beige" />
              <Code>Menos Tempo</Code> Desenvolvendo
            </StatHelpText>
            <StatHelpText fontFamily={"Krona One"}>
              <CheckCircleIcon mr={2} w={8} h={8} color="beige" />
              <Code>Ótima Experiência</Code> à Você
            </StatHelpText>
          </Stat>
        </SimpleGrid>
        {/** H1_2 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"2xl"}
          py={16}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          Conheça a <Kbd fontSize={"3xl"}>Tecnologia</Kbd> que Utilizamos
        </chakra.h1>
        {/** SIMPLEGRID 2 */}
        <SimpleGrid
          py={2}
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {/** CARD_1 */}
          <Link
            style={{ textDecoration: "none" }}
            href={"https://nextjs.org/"}
            isExternal
          >
            <Stat
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              transition="0.1s linear"
              px={{ base: 4, md: 8 }}
              py={"5"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <Box mb={2} display={{ md: "flex" }}>
                <Box flexShrink={0}>
                  <Image
                    mt={"auto"}
                    h={10}
                    w={10}
                    src="next.svg"
                    alt="Next.js"
                  />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <StatHelpText
                    color={"whiteAlpha.900"}
                    fontFamily={"Krona One"}
                  >
                    <Code>Next.js</Code> é um poderoso framework de produção de
                    Reactjs, trazendo uma excelente experiência para o usuário
                    em suas aplicações.
                  </StatHelpText>
                </Box>
              </Box>
            </Stat>
          </Link>
          {/** CARD_2 */}
          <Link
            style={{ textDecoration: "none" }}
            href={"https://vercel.com/home"}
            isExternal
          >
            <Stat
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              transition="0.1s linear"
              px={{ base: 4, md: 8 }}
              py={"5"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <Box mb={2} display={{ md: "flex" }}>
                <Box flexShrink={0}>
                  <Image
                    mt={"auto"}
                    h={10}
                    w={10}
                    src="vercel_logo.svg"
                    alt="Vercel"
                  />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <StatHelpText
                    color={"whiteAlpha.900"}
                    fontFamily={"Krona One"}
                  >
                    <Code>Vercel</Code> foi construído em parceria do Google e
                    Facebook para melhor implantar e escalar suas aplicações
                    dinamicamente.
                  </StatHelpText>
                </Box>
              </Box>
            </Stat>
          </Link>
          {/** CARD_3 */}
          <Link
            style={{ textDecoration: "none" }}
            href={"https://chakra-ui.com/"}
            isExternal
          >
            <Stat
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              transition="0.1s linear"
              px={{ base: 4, md: 8 }}
              py={"5"}
              shadow={"lg"}
              rounded={"lg"}
            >
              <Box mb={2} display={{ md: "flex" }}>
                <Box flexShrink={0}>
                  <Image
                    mt={"auto"}
                    h={10}
                    w={10}
                    src="chakraui.svg"
                    alt="ChakraUi"
                  />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <StatHelpText
                    color={"whiteAlpha.900"}
                    fontFamily={"Krona One"}
                  >
                    <Code>Chakra UI</Code> é um Framework que conta com uma
                    biblioteca de componentes em blocos para aplicações em
                    Reactjs.
                  </StatHelpText>
                </Box>
              </Box>
            </Stat>
          </Link>
        </SimpleGrid>
      </Box>
    </Stack>
  );
};
