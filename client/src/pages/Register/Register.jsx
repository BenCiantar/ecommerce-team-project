import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <label for="email">
          Email:
          <input
            className="border-solid border-2 border-slate-600"
            type="email"
            required
            id="email"
            placeholder="Your email"
          />
        </label>
        <label for="password">
          Password:
          <input
            className="border-solid border-2 border-slate-600"
            type="pasword"
            required
            id="password"
            placeholder="Your password"
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
