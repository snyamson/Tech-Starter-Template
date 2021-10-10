import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Tech | Starter Template</title>
        <meta
          name="description"
          content="Tech starter template built with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
