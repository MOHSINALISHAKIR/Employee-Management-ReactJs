import React, { useState } from "react";

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent w-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none mt-3 bg-transparent placeholder:text-gray-400"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="px-5 py-3 mt-4 rounded-full bg-emerald-600 text-white outline-none w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
