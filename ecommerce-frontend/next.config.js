require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
  },
  images: {
    domains: ["media.graphcms.com"],
  },
};
