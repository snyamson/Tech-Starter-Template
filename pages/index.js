import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Cto from "../components/cto";
import Features from "../components/features";
import Footer from "../components/footer";
import NavBarHero from "../components/navBarHero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box as="main">
      <NavBarHero />
      <Features />
      <Cto />
      <Footer />
    </Box>
  );
}
