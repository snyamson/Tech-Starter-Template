import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#03A9F4",
      100: "#E6F6FE",
      50: "#F7FAFC",
    },
    text: {
      900: "#1A202C",
      800: "#718094",
    },
    link: {
      900: "#2D3748",
      800: "#858B9B",
    },
  },
});

export default theme;
