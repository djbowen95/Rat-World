import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateRat from "./components/createRat/CreateRat";
import MyRats from "./components/myRats/MyRats";
import RatDesigner from "./components/createRat/RatDesigner";
import Cemetery from "./components/myRats/Cemetery";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<CreateRat />} />
          <Route path="/myrats" element={<MyRats/>} />
          <Route path="/ratdesigner" element={<RatDesigner/>} />
          <Route path="/cemetery" element={<Cemetery/>} />
        </Routes>
      <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
