import React, { useState } from "react";
import { Button } from "flowbite-react";
import useLocalStorage from "use-local-storage";
import { Router } from "react-router";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //   const router = Router();
  const navigate = useNavigate();
  const [username, setUsername] = useLocalStorage("username", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");

  const validateLogin = () => {
    if (username.length <= 1) {
      setNameError("Invalid username");
      return;
    }
    if (password.length <= 1) {
      setPassError("Invalid length");
      return;
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="p-20">
      <div>
        <h1 className="text-2xl">Login</h1>
      </div>
      <div className="">
        <form onSubmit={validateLogin}>
          <div className="py-5">
            <div className="py-2">
              <label>Username</label>
            </div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="p-5 h-10 w-full border-1 rounded-md"
            />
            <label className="">{nameError}</label>
          </div>

          <div>
            <div className="py-2">
              <label>Password</label>
            </div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-5 h-10 w-full border-1 rounded-md"
            />
            <label className="">{passError}</label>
            <div className="py-10">
              <Button
                color="blue"
                className="w-24 h-12 border-1"
                type="submit"
                value="Submit"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
