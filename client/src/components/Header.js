import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../utils/Auth';

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
        <button className="btn btn-secondary m=1">Logout</button>
      </div>
    </div>
        // <header style={styles}>
        //     <div className="container flex-row justify-space-between-lg justify-center align-center">
        //         <div>
        //             <Link className= "text-light" to={`/`}>
        //                 <h1>Rats!</h1>
        //             </Link>
        //             <Link className= "m=0" to={`/myrats`}>
        //                 <div>My Rats</div>
        //             </Link>
        //             <Link className= "m=0" to ={`/myfriends`}>
        //                 <div>My Friends </div>
        //             </Link>
        //         </div>
        //         <div><button className="btn btn-secondary m=1">Logout</button></div>
        //     </div>
        // </header>
    )
}

export default Header