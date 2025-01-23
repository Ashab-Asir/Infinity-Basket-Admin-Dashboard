import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
];

export default publicRoutes;
