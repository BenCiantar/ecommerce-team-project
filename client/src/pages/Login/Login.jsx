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
    <main className="flex justify-center items-center my-14 ">
      <section className="flex flex-col shadow-full w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 h-4/5 justify-center items-center py-8">
        <h1 className="  text-2xl font-semibold uppercase my-6">Log in</h1>
        <form
          onSubmit={loginUser}
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="email">
            <h3 className=" text-sm uppercase mb-1">E-mail:</h3>
            <input
              className="border-solid border border-slate-400 w-64 px-2 py-1 mb-4"
              type="email"
              required
              id="email"
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="password">
            <h3 className=" text-sm uppercase mb-1">Password:</h3>
            <input
              className="border-solid border border-slate-400 w-64 px-2 py-1 mb-6"
              type="password"
              required
              id="password"
              placeholder="Enter a password"
            />
          </label>
          <button
            className="bg-green-600 md:hover:bg-green-400 text-white w-1/2 min-w-fit flex flex-row justify-center items-center p-1 shadow-md mb-2 "
            type="submit"
          >
            LOG IN
          </button>
          <Link to="/register" className="text-xs text-slate-400">
            I don't have an account
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
