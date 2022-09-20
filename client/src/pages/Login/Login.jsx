import React from 'react';

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-500 flex justify-center items-center">
      <div className="text-white w-[420px] h-[320px] px-20 py-10 rounded-md bg-[rgba(10,10,10,0.2)] backdrop-blur-md">
        <h1>Log in to your account</h1>
        <form className="flex flex-col mt-10 space-y-10">
          <input
            className="bg-transparent outline-none  border-b-2 placeholder-white pb-2"
            placeholder="Username"
          />
          <input
            className="bg-transparent outline-none  border-b-2 placeholder-white pb-2"
            placeholder="Password"
          />
          <button className="border-2 py-1 rounded-sm active:scale-95">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
