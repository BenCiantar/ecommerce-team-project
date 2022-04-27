import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  function loginUser(e) {
    e.preventDefault();
    let users = [];
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res);
      users.push(res.data);
      console.log(users);
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
