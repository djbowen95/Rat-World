import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseARat from "./components/chooseARat/ChooseARat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateRat from "./components/createRat/CreateRat";

function App() {
  // let [currentPage, setPage] = useState('rat');

  // function renderPage() {
  //   switch (currentPage) {
  //     case 'rat' :
  //       return <Rat/>;
  //     case 'chooseRat' :
  //       return <ChooseARat/>;
  //   }
  // }

  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<CreateRat />} />
          <Route path="/myrats" element={<ChooseARat />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
