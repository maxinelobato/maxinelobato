import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGadient(props: BoxProps) {
  return (
    <Box
      minH="100vh"
      color="beige"
      bgGradient="linear(to-r, blackAlpha.500, transparent, blackAlpha.600)"
      {...props}
    />
  );
}
