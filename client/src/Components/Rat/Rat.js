import React from "react";
import "./Rat.css";

const Rat = () => {
  return (
    <div>
        <div>
            <h1 className="title">Adopt a Rat!</h1>
        </div>
        
      <div className="container">
        <div className="card">
          <img
            className="card-img-top"
            src="https://static.vecteezy.com/system/resources/previews/003/304/312/original/a-sticker-template-of-rat-cartoon-character-free-vector.jpg"
            alt="rat eating cheese"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
          </div>
          <div>
            <input
              type="text"
              className="input"
              placeholder="Name Your Rat!"
            ></input>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rat;
