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
  signup: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  label: {
    color: "#fff",
    fontSize: "2.3em",
    justifyContent: "center",
    display: "flex",
    margin: "60px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.5s ease-in-out",
  },
  input: {
    width: "60%",
    height: "20px",
    background: "#e0dede",
    justifyContent: "center",
    display: "flex",
    margin: "20px auto",
    padding: "10px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
  },
  button: {
    width: "60%",
    height: "40px",
    margin: "10px auto",
    justifyContent: "center",
    display: "block",
    color: "#fff",
    background: "#573b8a",
    fontSize: "1em",
    fontWeight: "bold",
    marginTop: "20px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    transition: "0.2s ease-in",
    cursor: "pointer",
  },
  button:hover: {
    background: "#6d44b8",
  },
  login: {
    height: "460px",
    background: "#eee",
    borderRadius: "60% / 10%",
    transform: "translateY(-180px)",
    transition: "0.8s ease-in-out",
  },
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
