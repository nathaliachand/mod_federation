import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";

const Register = () => {
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [password, setPassword] = useState(() => {
    const saved = localStorage.getItem("password");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [nameError] = useState("");
  const [passError] = useState("");

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
  }, [username, password]);

  return (
    <div className="p-20">
      <div>
        <h1 className="text-2xl">Register</h1>
      </div>
      <div className="">
        <form>
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
            <label>{nameError}</label>
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
            <label>{passError}</label>
          </div>
        </form>
      </div>
      <div className="py-10">
        <button
          className="py-2 px-7 text-black hover:bg-slate-100 border-2 border-gray-500 color-black rounded-md"
          type="submit"
          value="Submit"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
