import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <form>
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
        <button></button>
      </form>
    </div>
  );
};

export default LoginForm;
