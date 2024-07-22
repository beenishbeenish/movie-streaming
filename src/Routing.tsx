import React from "react";
import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import GlobalLoader from "./components/global/GlobalLoader";
import LayoutContainer from "./components/layout/LayoutContainer";
const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/auth/Login"));

interface RoutingProps {}
const Routing: React.FC<RoutingProps> = () => {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        <Route element={<LayoutContainer />}>
          <Route key={"home"} path={"/"} element={<Home />} />
          <Route key={"login"} path={"/login"} element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
