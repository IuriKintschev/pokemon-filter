import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
});

export default client;
