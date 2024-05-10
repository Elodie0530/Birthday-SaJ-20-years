import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Porte_clic from "./pages/Porte_clic.jsx";
import Home from "./pages/Home.jsx";
import Association from "./pages/Association.jsx";
import NuitBlanche from "./pages/NuitBlanche.jsx";
import Partenaires from "./pages/Partenaires.jsx";
import Credits from "./pages/Credits.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Porte_clic />,
  },
  {
    element: <App />,
    children: [
      {
        path: "20ans",
        element: <Home />,
      },
      {
        path: "association",
        element: <Association />,
      },
      {
        path: "nuitBlanche",
        element: <NuitBlanche />,
      },
      {
        path: "partenaires",
        element: <Partenaires />,
      },
      {
        path: "credits",
        element: <Credits />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
