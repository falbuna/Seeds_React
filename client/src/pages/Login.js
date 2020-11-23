import React, { useState } from "react";
import Axios from "axios";
import seedsLogo from "../assets/images/seedsLogo.png";

function Login() {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    

    const login = () => {
      Axios({
        method: "POST",
        data: {
          email: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: "auth/login",
      }).then((res) => console.log(res));
    };

    const getUser = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "auth/user",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };


  return (

    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <img className="mx-auto h-auto w-16" src={seedsLogo} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
            Sign in to your account
      </h2>
        </div>
        <form className="mt-8 login">
          <input type="hidden" name="remember" value="true"></input>
          <div className="rounded-md shadow-sm">
            <div>
              <input id="email-input" name="email" type="email" required
                className="form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="username"
                onChange={(e) => setLoginUsername(e.target.value)} />
            </div>
            <div className="-mt-px">
              <input id="password-input" aria-label="Password" name="password" type="password" required
                className="form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)} />
            </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" type="checkbox"
                    className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-white">
                    Remember me
          </label>
                </div>

                <div className="text-sm leading-5">
                  <a href="signup"
                    className="font-medium text-white hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Create an account
          </a>
                </div>
              </div>

              <div className="mt-6">
                <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-lime1 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  onClick={login}>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd" />
                    </svg>
                  </span>
          Sign in
        </button>
              </div>

          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;