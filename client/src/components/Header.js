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
    };
    return (
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">RatHub</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {Auth.loggedIn() ? (
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/myrats">My Rats</a>
            <a href="/myfriends">My Friends</a>
            <button onClick={logout} style={styles.navButton} className="btn btn-secondary m=1">Logout</button>
          </div>          
          ) : (
          <div class="nav-links">
            <a href="/">Home</a>
          </div>
          )}
    </div>
    )
}

export default Header;
