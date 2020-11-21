import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        email: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "auth/register",
    }).then((res) => console.log(res));
  };

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
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.name}</h1> : null}
      </div>
    </div>
  );
}

export default App;
