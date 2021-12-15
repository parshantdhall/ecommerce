import { Box } from "@chakra-ui/react";
import Header from "../components/layout/Header";
import MainBody from "../components/layout/MainBody";
import "swiper/css";
import "swiper/css/bundle";

export default function Home() {
  return (
    <Box>
      <Header />
      <MainBody />
    </Box>
  );
}
