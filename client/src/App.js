import React, { useState} from "react";
import ChooseARat from "./Components/ChooseARat/ChooseARat";
import Rat from "./Components/Rat/Rat";

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
