import React from "react";
import axios from "axios";

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();

    let obj = {
      _id: e.target[0].value,
      password: e.target[1].value,
    };
    axios.post("http://localhost:8080/users", obj);

    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ // We should keep the fields consistent for managing this data later
    //         email: name,
    //         clockedIn:false,
    //         dates:[]
    //     })
    // })
    // .then(()=>{
    //     // Once posted, the user will be notified
    //     alert('You have been added to the system!');
    // })
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
            placeholder="Your email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            className="border-solid border-2 border-slate-600"
            type="pasword"
            required
            id="password"
            placeholder="Your password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
