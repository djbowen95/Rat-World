import React, { useState} from "react";
import ChooseARat from "./components/chooseARat/ChooseARat";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Rat from "./components/rat/Rat";

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
      <Header/>
      <div><Rat/></div>
      <div><ChooseARat/></div>
      <Footer/>
    </div>
  );
}

export default App;
