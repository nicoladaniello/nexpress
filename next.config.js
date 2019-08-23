const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const dotEnvResult = require("dotenv-flow").config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = withCSS(
  withSass({
    publicRuntimeConfig: {
      // Will be available on both server and client
      graphqlEndpoint: process.env.ENDPOINT
    }
  })
);
