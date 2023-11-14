import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Login from "./components/auth/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/auth/Register";
import VerifyAccount from "./components/VerifyAccount/VerifyAccount";
import CreateResturent from "./components/CreateResturent/CreateResturent";
import ResturentInformation from "./components/ResturentInformation/ResturentInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/verifyaccount',
        element: <VerifyAccount/>,
      },
      {
        path: '/createresturent',
        element: <CreateResturent/>,
      },
      {
        path: '/resturentinformation',
        element: <ResturentInformation/>,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);