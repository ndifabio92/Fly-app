import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/global.css";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_BASE_URL_API
  })
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

