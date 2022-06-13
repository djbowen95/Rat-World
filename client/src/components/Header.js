import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../utils/Auth';

const Header = () => {
    const logout = (e) => {
        e.preventDefault();
        Auth.logout();
    };
    return (
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">Rats!</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/myrats">My Rats</a>
          <a href="/myfriends">My Friends</a>
          <button onClick={logout} className="btn btn-secondary m=1">Logout</button>
        </div>
    </div>
    )
}

export default Header