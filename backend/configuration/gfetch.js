const { request, gql } = require("graphql-request");

const gFetch = (qry) => {
  const query = gql`
    ${qry}
  `;
  return request(process.env.API_URL, query);
};

module.exports = gFetch;
