import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
