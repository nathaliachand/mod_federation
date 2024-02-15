import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Detail from "../pages/Detail";
import React from "react";
import { Home } from "../pages/Home";
import { QueryClientProvider } from "react-query";
import Login from "../pages/Login";
import Register from "../pages/Register";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     children: [
//     //   { path: "/detail/:id", element: <Detail /> },
//     ],
//   },
// ]);

export default function Routes2() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/home/detail/:id" element={<Detail />} />
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
