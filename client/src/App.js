import React, { useState} from "react";
import ChooseARat from "./components/chooseARat/ChooseARat";
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
      <div><Rat/></div>
      <div><ChooseARat/></div>
    </div>
  );
}

export default App;
