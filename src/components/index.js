import React from "react";
import ReactDOM from "react-dom/client";

import App from "../App.js";
// import Body from "./Body.js";
import Body from "./Body.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main.js";
import Cart from "./Cart.js";

import About from "./About";
import Contact from "./Contact.js";

//Now First We havee to Create a Router

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Main/:id",
        element: <Main />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
