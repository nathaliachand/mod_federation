import React from "react";
import ReactDOM from "react-dom/client";
import { Text } from "./components/Text";
import "./index.scss";
import Header from "itemsdetail/Header";
import Footer from "itemsdetail/Footer";
import SideBarFilter from "itemsdetail/SideBarFilter";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import routes from "./routes/Routes2";
// import SearchBar from "itemsdetail/SearchBar";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./pages/Detail";
import { Home } from "./pages/Home";
import Routes2 from "./routes/Routes2";

const queryClient = new QueryClient();

export const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      {" "}
      <Routes2 />
    </QueryClientProvider>
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
