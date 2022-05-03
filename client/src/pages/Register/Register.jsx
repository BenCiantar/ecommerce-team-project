import React from "react";
import axios from "axios";

const Register = () => {
  async function registerNewUser(e) {
    e.preventDefault();

    let newUser = {
      _id: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      axios
        .post("http://localhost:8080/users", newUser)
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            console.log(res);
            throw Error("Error", res);
          }
          if (res.status === 200) {
            alert("Registered!");
          }
        })
        .catch(() => {
          alert("Error: server is not reachible");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={registerNewUser}>
        <h1>Register an account</h1>
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
