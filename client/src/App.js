import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateRat from "./components/createRat/CreateRat";
import MyRats from "./components/myRats/MyRats";
import RatDesigner from "./components/createRat/RatDesigner";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Cemetery from "./components/myRats/Cemetery";
import MyFriends from "./components/myRats/MyFriends";
import Progress from "./components/progress/Progress";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/myrats" element={<MyRats />} />
          <Route path="/ratdesigner" element={<RatDesigner />} />
          <Route path="/cemetery" element={<Cemetery />} />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
