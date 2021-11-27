import axios from "axios";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  // setting base url for axios
  axios.defaults.baseURL = process.env.BACKEND_BASE_URL;
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
