import React from "react";
import { Link } from 'react-router-dom';

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

function Header() {
    return (
        <header style={styles}>
            <Link to={`/`}>
                <h1>Rats!</h1>
            </Link>
            <Link to={`/myrats`}>
                <div>My Rats</div>
            </Link>
            <div><button className="btn btn-secondary">Logout</button></div>
        </header>
    )
}

export default Header