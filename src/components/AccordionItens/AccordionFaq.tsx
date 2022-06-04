import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";

export function AccordionFaq() {
  return (
    <>
      <Flex maxW="container.sm">
        {/** Accordion 1 */}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "beige", color: "blackAlpha.900" }}
              >
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  O que é uma Landing Page?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"large"}>
              <Text textAlign={"justify"}>
                Landing Pages são páginas de um site com{" "}
                <strong>um foco principal: </strong>
                <em>conversão</em>. Assim, essas páginas de conversão possuem
                menos elementos que uma página tradicional, focando apenas na
                oferta central oferecida por ela.
              </Text>
              <Text textAlign={"left"} mt={2}>
                Fonte:{" "}
                <Link
                  color="blue.200"
                  href="https://rockcontent.com/br/blog/landing-page/"
                  isExternal
                >
                  rocketcontent <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          {/** Accordion 2 */}
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "blackAlpha.900", color: "white" }}
              >
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  Para que serve uma Landing Page?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"large"}>
              <Text textAlign={"justify"}>
                Além de ser uma excelente{" "}
                <strong>estratégia de marketing</strong>, uma Landing Page pode
                te <strong>posicionar no Google</strong> e qualificar ainda mais
                os Leads (clientes), através de <strong>segmentações,</strong>{" "}
                uma forma de expandir o seu negócio, serviço ou produto. Com um
                ótimo <strong>custo benefício,</strong>
                pode de ser um bom ponto de partida para o seu negócio.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          {/** Accordion 3 */}
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "blackAlpha.900", color: "white" }}
              >
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  Preciso ter uma Landing Page para aparecer no Google?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"large"}>
              <Text textAlign={"justify"}>
                Esta é uma pergunta que a maioria das pessoas que estão
                ingressando no mercado de Gestão de Tráfego fazem, ou tem um
                produto ou serviço, e a resposta é depende. Sim!{" "}
                <strong>
                  Se você quiser ter resultados melhores, é o ideal,
                </strong>{" "}
                caso contrário, é melhor que você não faça.
              </Text>
              <Text textAlign={"justify"}>
                Apesar de ser um excelente investimento,{" "}
                <strong>não é milagrosa.</strong> De nada adianta você ter uma
                Página linda e maravilhosa e{" "}
                <strong>
                  não ter um produto, serviço ou negócio de qualidade, moral e
                  ético
                </strong>
                . E não precisa ter dinheiro pra isso, basta ser a pessoa com{" "}
                <strong>informação e determinada para tal.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          {/** Accordion 4 */}
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "blackAlpha.900", color: "white" }}
              >
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  Qual é a diferença de uma Landing Page para um Site?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"large"}>
              <Text textAlign={"justify"}>
                Apesar de algumas pessoas pensarem que ambos são sinônimos,
                existem diferenças entre Landing Page e site. Conforme acabamos
                de explicar, a Landing Page tem a função de conversão em leads,
                enquanto o site oferece conteúdo relevante para o seu público.
              </Text>
              <br />
              <Text textAlign={"justify"}>
                Portanto, dentro da sua estratégia digital, é importante que o
                seu site tenha uma boa estrutura de SEO para que seja encontrado
                nos motores de busca. Por isso, uma boa dica é que a Landing
                Page seja divulgada em CTAs dentro do site, para transformar os
                visitantes em leads.
              </Text>
              <Text textAlign={"left"} mt={2}>
                Fonte:{" "}
                <Link
                  color="blue.200"
                  href="https://rockcontent.com/br/blog/landing-page/"
                  isExternal
                >
                  rocketcontent <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}
