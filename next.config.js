const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCSS(
  withSass(
    withPurgeCss({
      purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
      serverRuntimeConfig: {
        // Will only be available on the server side
        // mySecret: "secret"
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        graphqlEndpoint: "http://localhost:8888/wordpress/graphql"
      }
    })
  )
);
