import React, { useState } from "react";
import Login from "./Login"
import Signup from "./Signup"

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

function LoginContainer(){
    return (
        <section style={styles}>
            <Login/>
            <Signup/>
        </section>
    )
}

export default LoginContainer