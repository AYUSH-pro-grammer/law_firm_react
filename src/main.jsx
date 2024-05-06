import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./1_pages/About_page/About";
import Contact from "./1_pages/Contact_page/Contact.jsx"

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);
