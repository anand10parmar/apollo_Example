import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./styles.css";
import Users from "./Users";

const client = new ApolloClient({
  uri: "https://nosy-baritone.glitch.me"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Users />
      </div>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
