import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home/Home";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return routeElements;
}
