import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { CustomTheme } from "../lib/ThemeConfig";
import "swiper/css";
import "swiper/css/bundle";
import CartStateProvider from "../global states/CartStateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Provider session={pageProps.session}>
        <CartStateProvider>
          <Component {...pageProps} />
        </CartStateProvider>
      </Provider>
    </ChakraProvider>
  );
}
export default MyApp;
