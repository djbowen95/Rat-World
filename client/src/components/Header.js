import { style } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/Auth";

const styles = {
  navButton: {
    width: "60px"
  }
}

const Header = () => {
    const logout = (e) => {
        e.preventDefault();
        Auth.logout();
       window.location.replace("/")
    };
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">RatHub</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {Auth.loggedIn() ? (
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/myrats">My Rats</a>
            <a href="/myfriends">My Friends</a>
            <button onClick={logout} style={styles.navButton} className="btn btn-secondary m=1">Logout</button>
          </div>          
          ) : (
          <div className="nav-links">
            <a href="/">Home</a>
          </div>
          )}
    </div>
    )
}

export default Header;
