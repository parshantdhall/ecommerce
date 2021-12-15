import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { CustomTheme } from "../lib/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
export default MyApp;
