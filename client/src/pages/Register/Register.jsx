import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  async function registerNewUser(e) 
    e.preventDefault();

    let newUser = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      _id: e.target[2].value,
      password: e.target[3].value,
    };

    try {
      axios
        .post("http://localhost:8080/users", newUser)
        .then((res) => {
          setCurrentUser(res.data);
          navigate("/");
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
    <main className="flex justify-center items-center my-8 ">
      <section className="flex flex-col shadow-full w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 h-4/5 justify-center items-center py-8">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={registerNewUser}
        >
          <h1 className="  text-xl font-semibold uppercase my-6">
            Register your account
          </h1>
          <label htmlFor="firstName">
            <p className=" text-sm uppercase mb-1">First Name</p>
            <input
              className="input-primary"
              type="text"
              required
              id="firstName"
              placeholder="Enter your first name"
            />
          </label>
          <label htmlFor="lastName">
            <p className=" text-sm uppercase mb-1">Last Name</p>
            <input
              className="input-primary"
              type="text"
              required
              id="lastName"
              placeholder="Enter your last name"
            />
          </label>
          <label htmlFor="email">
            <p className=" text-sm uppercase mb-1">Email</p>
            <input
              className="input-primary"
              type="email"
              required
              id="email"
              placeholder="Enter your Email"
            />
          </label>
          <label htmlFor="password">
            <p className=" text-sm uppercase mb-1">Password</p>
            <input
              className="input-primary"
              type="password"
              required
              id="password"
              placeholder="Enter a password"
            />
          </label>
          <button className="btn-primary" type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
