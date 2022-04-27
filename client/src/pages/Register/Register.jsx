import React from "react";
import axios from "axios";

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();

    let newUser = {
      _id: e.target[0].value,
      password: e.target[1].value,
    };
    axios
      .post("http://localhost:8080/users", newUser)
      .then((res) => {
        //if server is reachible but the response doesn't contain data
        if (!res.ok) {
          throw Error("couldn't fetch");
        }
      })
      //if server is not reachible
      .catch((e) => {
        console.log(e.message);
        alert("Error:" e.message);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="email">
          Email:
          <input
            className="border-solid border-2 border-slate-600"
            type="email"
            required
            id="email"
            placeholder="Enter an email"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
