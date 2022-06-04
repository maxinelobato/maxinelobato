import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FramerMotionViewPort } from "../components/FramerMotionViewPort";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FramerMotionViewPort />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
