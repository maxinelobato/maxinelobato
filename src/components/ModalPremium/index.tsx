import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Tag,
  TagLeftIcon,
  TagLabel,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiGift } from "react-icons/hi";

export function ModalPremium() {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(20px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        colorScheme="blue"
        variant="outline"
        w="full"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        textTransform={"uppercase"}
      >
        SAIBA MAIS
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader color={"beige"}>
            <Tag size={"lg"} textTransform="uppercase" colorScheme="blue">
              <TagLeftIcon boxSize="50px" as={HiGift} />
              <TagLabel>você ganha</TagLabel>
            </Tag>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"beige"}>
            <Stack direction="row" h="180px">
              <Divider orientation="vertical" bgColor={"blue.500"} />
              <List textAlign="start">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Atendimento EXCLUSIVO.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Primeiro mês de manutenção GRÁTIS.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Hospedagem e Domínio do VERCEL.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Configuração do Tawk, monitoramento e chat de visitantes,
                  geração de tickets e criação da central de ajuda.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Certificado de Segurança SSL GRATUITO.
                </ListItem>
              </List>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Link
              style={{ textDecoration: "none" }}
              href="https://wa.me/message/N7ODJHBPZALLJ1"
              isExternal
            >
              <Button
                textTransform={"uppercase"}
                colorScheme="blue"
                variant="outline"
                mr={3}
              >
                saiba mais
              </Button>
            </Link>
            <Button colorScheme="blue" onClick={onClose}>
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
