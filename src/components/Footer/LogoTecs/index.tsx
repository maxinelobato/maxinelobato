import { Image, Tag, TagLabel } from "@chakra-ui/react";
import { StatusColor } from "../StatusColor";

export function LogoTecs() {
  return (
    <Tag
      size="lg"
      color={"beige"}
      bgColor={"blackAlpha.900"}
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
  );
}
