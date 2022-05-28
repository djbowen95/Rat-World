import React from "react";

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

function Header() {
    return (
        <header style={styles}>
            <h1>Rats!</h1>
            <div>My Rats</div>
            <div><button className="btn btn-secondary">Logout</button></div>
        </header>
    )
}

export default Header