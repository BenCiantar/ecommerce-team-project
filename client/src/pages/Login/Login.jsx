import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        <h1>Sign In</h1>
        <label>
          Email:
          <input
            className="border-solid border-2 border-slate-600"
            type="text"
            required
          />
        </label>
        <label>
          Password:
          <input
            className="border-solid border-2 border-slate-600"
            type="text"
            required
          />
        </label>
        <button>LOG IN</button>
        <Link to="/register">I don't have an account</Link>
      </form>
    </div>
  );
};

export default Login;
