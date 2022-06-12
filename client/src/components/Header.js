import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/Auth";

// const styles = {
//     // display: 'flex',
//     // alignItems: 'center',
//     // justifyContent: 'space-between'

// }

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Rats!</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/myrats">My Rats</a>
        <a href="/myfriends">My Friends</a>
        <button className="btn btn-secondary m=1">Logout</button>
      </div>
    </div>
  );
};

export default Header;
