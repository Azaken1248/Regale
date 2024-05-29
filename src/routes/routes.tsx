import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import MaleAttire from "../pages/MaleAttire/MaleAttire";
import FemaleAttire from "../pages/FemaleAttire/FemaleAttire";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "Regale", element: <HomePage /> },
      { path: "Regale/maleSection", element: <MaleAttire /> },
      { path: "Regale/femaleSection", element: <FemaleAttire /> },
    ],
  },
]);
