import React from 'react';

const Register = () => {
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
