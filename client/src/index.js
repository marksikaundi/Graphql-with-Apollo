import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Pages from './pages';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  // options go here
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);

