import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Credentials",

    credentials: {
      email: {
        label: "Email",
        type: "text",
        placeholder: "youremail@blah.com",
      },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      try {
        const { email, password } = credentials;
        const { status, data } = await axios({
          method: "POST",
          baseURL: process.env.BACKEND_BASE_URL,
          url: `/auth/login`,
          data: { email, password },
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(data);
        // IF password is right fetch the user info
        if (data.status === "ok" && status === 200) {
          const userId = data.payload.uid;
          const userRes = await axios({
            method: "GET",
            baseURL: process.env.BACKEND_BASE_URL,
            url: `/user/${userId}`,
            headers: {
              authorization: `Bearer ${data.payload.token}`,
            },
          });
          const user = userRes.data.payload.data[0];
          return { ...user, token: data.payload.token };
        }
      } catch (e) {
        const errorMessage = e.data.payload;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }
    },
  }),
];
const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token;
      token.user = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      };
    }
    return token;
  },

  async session(session, token) {
    session.isAdmin = token.isAdmin;
    session.accessToken = token.accessToken;
    session.user = token.user;
    return session;
  },
};
export default NextAuth({
  providers,
  callbacks,
  session: {
    jwt: true,
  },
});
