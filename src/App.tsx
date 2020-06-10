import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./services/apolloClient";

import StyledGlobal from "./css/styledGlobal";

import Router from "./routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
      <StyledGlobal />
    </ApolloProvider>
  );
}

export default App;
