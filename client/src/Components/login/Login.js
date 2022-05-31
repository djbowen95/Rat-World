import React from "react";
//add function
const styles = {
  body: {
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Jost,sans-serif",
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
  },
  main: {
    width: "350px",
    height: "500px",
    background: "573b8b",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "5px 20px 50px #000",
  },
  //add id
};
function Login() {
  return (
    <div style={styles.main}>
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Sign up</button>
        </form>
      </div>
      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
