import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [userExists, setUserExists] = React.useState(false);
  function loginUser(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then((res) => {
      const data = res.data;
      let id = e.target[0].value;
      let password = e.target[1].value;
      console.log(data);
      console.log(data);
      for (let x of data) {
        console.log(x);
        // console.log(data[x]);
        if (x._id === id && x.password === password) {
          alert("Logged in");
          setUserExists(true);
          break;
        } else if (x._id !== id) {
          alert("incorrect email");
        } else {
          alert("incorrect password");
          break;
        }
      }
    });
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <h1>Log in</h1>
        <label htmlFor="email">
          Email:
          <input
            className="border-solid border-2 border-slate-600"
            type="email"
            required
            id="email"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            className="border-solid border-2 border-slate-600"
            type="password"
            required
            id="password"
            placeholder="Enter a password"
          />
        </label>
        <button type="submit">LOG IN</button>
        <Link to="/register">I don't have an account</Link>
      </form>
    </div>
  );
};

export default Login;
