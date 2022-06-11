import React from "react";
const styles = {
//   barOutline: {
//     backgroundColor: "grey",
//     borderRadius: "13px",
//     padding: "3px",
//   },

//   progressBar: {
//     height: "20px",
//     backgroundColor: "#573b8a",
//     borderRadius: "10px",
//     width: "40%",
//   },
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  .container {
    padding: 2px 16px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    height: 30rem;
    width: 40rem;
    align: center;
  }
  
  img {
    border-radius: 5px 5px 0 0;
  }
  .baroutline {
    background-color: grey;
    border-radius: 13px;
    padding: 3px;
    line-height: 30%;
  }
  .h2 {
    text-align: center;
    padding-bottom: 20px;
  }
  .h3 {
    text-align: center;
    padding-bottom: 20px;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  
  .progressbar {
    background-color: purple;
    width: 30%;
    height: 10px;
    border-radius: 10px;
  }
};
function Progress() {
  return (
    // //progress bar
    // <div style={styles.barOutline}>
    //   <div style={styles.progressBar}>
    //     <div></div>
    //   </div>
    // </div>

<div class="center">
<div class="card">
  <h2 class="h2"><b>Feed Rat</b></h2>
  <img src="./img/rat.png" class="center" style="width: 40%" />
  <div class="container">
    <!--Progress bar-->
    <h3 class="h3">Hunger level</h3>
    <div class="baroutline">
      <div class="progressbar">
        <div></div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
export default Progress;
