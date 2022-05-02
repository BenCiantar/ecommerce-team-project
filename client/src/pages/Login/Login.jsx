import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();
    const loginDetails = {
      _id: e.target[0].value,
      password: e.target[1].value,
    };

    axios
      .post("http://localhost:8080/login", loginDetails)
      .then((res) => {
        setCurrentUser(res.data);
        console.log(currentUser);
        navigate("/");
        //if server is reachible but the response doesn't contain data
        if (res.request.statusText !== "OK") {
          throw Error("couldn't fetch");
        }
      })
      //if server is not reachible
      .catch((e) => {
        console.log(e.message);
        alert("Error:", e.message);
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
